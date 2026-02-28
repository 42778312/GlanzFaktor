/**
 * Vercel Serverless Function - GitHub API Proxy
 * Keeps GitHub token secure on the server
 */

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Password');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Verify password
    const password = req.headers['x-password'];
    const correctPassword = process.env.EDIT_PASSWORD || 'glanzfaktor2026';
    
    if (password !== correctPassword) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    // Get GitHub token from environment
    const githubToken = process.env.GITHUB_TOKEN;
    
    if (!githubToken) {
        return res.status(500).json({ error: 'GitHub token not configured' });
    }

    // Proxy the request to GitHub
    const { method, body } = req;
    const { path } = req.query;

    if (!path) {
        return res.status(400).json({ error: 'Path parameter required' });
    }

    try {
        const githubUrl = `https://api.github.com/${path}`;
        
        const options = {
            method: method,
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
                'User-Agent': 'GlanzFaktor-Edit-Mode'
            }
        };

        if (method !== 'GET' && body) {
            options.body = typeof body === 'string' ? body : JSON.stringify(body);
        }

        const response = await fetch(githubUrl, options);
        const data = await response.json();

        res.status(response.status).json(data);
    } catch (error) {
        console.error('GitHub API Error:', error);
        res.status(500).json({ error: error.message });
    }
}
