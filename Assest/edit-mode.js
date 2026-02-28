/**
 * GlanzFaktor Image Edit Mode
 * Allows editing images via GitHub API without traditional backend
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        GITHUB_REPO: '42778312/GlanzFaktor', // Update if needed
        GITHUB_BRANCH: 'main',
        API_BASE: '/api/github-proxy', // Vercel serverless function
        EDIT_MODE_PARAM: 'editmode',
        STORAGE_KEY: 'glanzfaktor_edit_mode'
    };

    // State
    let isEditMode = false;
    let userPassword = null;
    let pendingChanges = [];

    // Initialize
    function init() {
        // Check if edit mode should be activated
        const pathname = window.location.pathname;
        console.log('Edit Mode Init - Current pathname:', pathname);
        
        if (pathname === '/edit' || pathname === '/edit/') {
            console.log('Edit mode triggered!');
            showPasswordPrompt();
        }

        // Check if already authenticated
        const savedPassword = sessionStorage.getItem('edit_password');
        if (savedPassword && checkEditModeActive()) {
            userPassword = savedPassword;
            activateEditMode();
        }
    }

    // Check if edit mode is active in session
    function checkEditModeActive() {
        return sessionStorage.getItem(CONFIG.STORAGE_KEY) === 'true';
    }

    // Show password prompt
    function showPasswordPrompt() {
        const overlay = document.createElement('div');
        overlay.id = 'edit-mode-overlay';
        overlay.innerHTML = `
            <style>
                #edit-mode-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 999999;
                }
                .edit-mode-dialog {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    max-width: 500px;
                    width: 90%;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                }
                .edit-mode-dialog h2 {
                    margin: 0 0 20px 0;
                    color: #333;
                }
                .edit-mode-dialog p {
                    color: #666;
                    margin-bottom: 20px;
                }
                .edit-mode-dialog input {
                    width: 100%;
                    padding: 12px;
                    margin: 10px 0;
                    border: 2px solid #ddd;
                    border-radius: 6px;
                    font-size: 16px;
                    box-sizing: border-box;
                }
                .edit-mode-dialog button {
                    width: 100%;
                    padding: 12px;
                    margin: 10px 0;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 600;
                }
                .edit-mode-dialog .btn-primary {
                    background: #F7931E;
                    color: white;
                }
                .edit-mode-dialog .btn-secondary {
                    background: #f1f1f1;
                    color: #333;
                }
                .edit-mode-dialog .btn-primary:hover {
                    background: #e08315;
                }
                .error-message {
                    color: #d32f2f;
                    margin: 10px 0;
                    display: none;
                    padding: 10px;
                    background: #ffebee;
                    border-radius: 6px;
                }
            </style>
            <div class="edit-mode-dialog">
                <h2>🔒 Edit Mode Aktivieren</h2>
                <p>Geben Sie das Passwort ein um Bilder zu bearbeiten:</p>
                <input type="password" id="edit-password" placeholder="Passwort eingeben" />
                <div class="error-message" id="error-message"></div>
                <button class="btn-primary" onclick="window.editMode.authenticate()">Anmelden</button>
                <button class="btn-secondary" onclick="window.editMode.closeDialog()">Abbrechen</button>
            </div>
        `;
        document.body.appendChild(overlay);

        // Focus password field
        setTimeout(() => {
            document.getElementById('edit-password').focus();
        }, 100);

        // Handle Enter key
        document.getElementById('edit-password').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                authenticate();
            }
        });
    }

    // Authenticate user
    async function authenticate() {
        const password = document.getElementById('edit-password').value;
        const errorEl = document.getElementById('error-message');

        if (!password) {
            errorEl.textContent = 'Bitte Passwort eingeben!';
            errorEl.style.display = 'block';
            return;
        }

        // Show loading
        errorEl.textContent = 'Überprüfe Passwort...';
        errorEl.style.display = 'block';
        errorEl.style.background = '#e3f2fd';
        errorEl.style.color = '#1976d2';

        // Verify password by testing API
        try {
            const response = await fetch(`${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}`, {
                headers: {
                    'X-Password': password
                }
            });

            if (response.ok) {
                userPassword = password;
                sessionStorage.setItem('edit_password', password);
                sessionStorage.setItem(CONFIG.STORAGE_KEY, 'true');
                closeDialog();
                activateEditMode();
            } else if (response.status === 401) {
                errorEl.textContent = 'Falsches Passwort!';
                errorEl.style.display = 'block';
                errorEl.style.background = '#ffebee';
                errorEl.style.color = '#d32f2f';
            } else {
                errorEl.textContent = 'Fehler beim Anmelden. Bitte versuchen Sie es erneut.';
                errorEl.style.display = 'block';
                errorEl.style.background = '#ffebee';
                errorEl.style.color = '#d32f2f';
            }
        } catch (error) {
            console.error('Authentication error:', error);
            errorEl.textContent = 'Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung.';
            errorEl.style.display = 'block';
            errorEl.style.background = '#ffebee';
            errorEl.style.color = '#d32f2f';
        }
    }

    // Verify GitHub token (removed - now handled by server)
    async function verifyGitHubToken(token) {
        // This function is no longer needed but kept for compatibility
        return true;
        }
    }

    // Close dialog
    function closeDialog() {
        const overlay = document.getElementById('edit-mode-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    // Activate edit mode
    function activateEditMode() {
        isEditMode = true;
        
        // Add edit mode indicator
        addEditModeIndicator();
        
        // Make all images editable
        makeImagesEditable();
        
        // Show success message
        showNotification('✅ Edit Mode aktiviert! Klicken Sie auf Bilder zum Bearbeiten.', 'success');
    }

    // Add edit mode indicator
    function addEditModeIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'edit-mode-indicator';
        indicator.innerHTML = `
            <style>
                #edit-mode-indicator {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #F7931E;
                    color: white;
                    padding: 15px 25px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                    z-index: 999998;
                    display: flex;
                    gap: 15px;
                    align-items: center;
                }
                #edit-mode-indicator button {
                    padding: 8px 16px;
                    border: 2px solid white;
                    background: transparent;
                    color: white;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                }
                #edit-mode-indicator button:hover {
                    background: white;
                    color: #F7931E;
                }
                #edit-mode-indicator .changes-count {
                    background: white;
                    color: #F7931E;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-weight: bold;
                    font-size: 14px;
                }
            </style>
            <span>📝 <strong>Edit Mode</strong></span>
            <span class="changes-count" id="changes-count">0 Änderungen</span>
            <button onclick="window.editMode.saveChanges()">💾 Speichern</button>
            <button onclick="window.editMode.exitEditMode()">❌ Beenden</button>
        `;
        document.body.appendChild(indicator);
    }

    // Make all images editable
    function makeImagesEditable() {
        const images = document.querySelectorAll('img');
        
        images.forEach((img, index) => {
            // Skip very small images (icons)
            if (img.width < 30 || img.height < 30) {
                return;
            }

            // Wrap image in editable container
            const wrapper = document.createElement('div');
            wrapper.className = 'editable-image-wrapper';
            wrapper.style.cssText = 'position: relative; display: inline-block; cursor: pointer;';
            
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);

            // Add edit overlay
            const overlay = document.createElement('div');
            overlay.className = 'edit-overlay';
            overlay.innerHTML = '<span>✏️ Bearbeiten</span>';
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(247, 147, 30, 0.9);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s;
                font-weight: bold;
                font-size: 18px;
            `;
            wrapper.appendChild(overlay);

            // Show overlay on hover
            wrapper.addEventListener('mouseenter', () => {
                overlay.style.opacity = '1';
            });
            wrapper.addEventListener('mouseleave', () => {
                overlay.style.opacity = '0';
            });

            // Handle click
            wrapper.addEventListener('click', () => {
                openImageEditor(img);
            });
        });
    }

    // Open image editor
    function openImageEditor(img) {
        const modal = document.createElement('div');
        modal.className = 'image-editor-modal';
        modal.innerHTML = `
            <style>
                .image-editor-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000000;
                }
                .image-editor-content {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                .image-editor-content h3 {
                    margin: 0 0 20px 0;
                }
                .image-editor-content img {
                    max-width: 100%;
                    height: auto;
                    margin: 20px 0;
                    border-radius: 8px;
                    border: 2px solid #ddd;
                }
                .image-editor-content input[type="file"] {
                    display: none;
                }
                .image-editor-content label {
                    display: block;
                    padding: 15px;
                    background: #F7931E;
                    color: white;
                    text-align: center;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    margin: 10px 0;
                }
                .image-editor-content label:hover {
                    background: #e08315;
                }
                .image-editor-content .buttons {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                }
                .image-editor-content button {
                    flex: 1;
                    padding: 12px;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 600;
                }
                .btn-save {
                    background: #4CAF50;
                    color: white;
                }
                .btn-cancel {
                    background: #f1f1f1;
                    color: #333;
                }
                .current-path {
                    background: #f5f5f5;
                    padding: 10px;
                    border-radius: 6px;
                    font-family: monospace;
                    font-size: 12px;
                    word-break: break-all;
                    margin: 10px 0;
                }
            </style>
            <div class="image-editor-content">
                <h3>📸 Bild bearbeiten</h3>
                <div class="current-path">
                    <strong>Aktueller Pfad:</strong><br>
                    ${img.src}
                </div>
                <img src="${img.src}" id="preview-image" />
                <input type="file" id="file-input" accept="image/*" />
                <label for="file-input">📁 Neues Bild wählen</label>
                <div class="buttons">
                    <button class="btn-save" id="save-image">💾 Übernehmen</button>
                    <button class="btn-cancel" id="cancel-edit">Abbrechen</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);

        let newImageData = null;
        let newImageName = null;

        // Handle file selection
        const fileInput = modal.querySelector('#file-input');
        const preview = modal.querySelector('#preview-image');
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                newImageName = file.name;
                const reader = new FileReader();
                reader.onload = (e) => {
                    newImageData = e.target.result;
                    preview.src = newImageData;
                };
                reader.readAsDataURL(file);
            }
        });

        // Handle save
        modal.querySelector('#save-image').addEventListener('click', () => {
            if (newImageData) {
                addPendingChange(img, newImageData, newImageName);
                modal.remove();
                showNotification('✅ Änderung vorgemerkt!', 'success');
            } else {
                showNotification('⚠️ Bitte wählen Sie erst ein Bild aus!', 'warning');
            }
        });

        // Handle cancel
        modal.querySelector('#cancel-edit').addEventListener('click', () => {
            modal.remove();
        });

        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Add pending change
    function addPendingChange(img, newImageData, newImageName) {
        const oldSrc = img.getAttribute('src');
        
        // Update preview
        img.src = newImageData;
        
        // Store change
        pendingChanges.push({
            element: img,
            oldSrc: oldSrc,
            newImageData: newImageData,
            newImageName: newImageName
        });

        updateChangesCount();
    }

    // Update changes count
    function updateChangesCount() {
        const countEl = document.getElementById('changes-count');
        if (countEl) {
            countEl.textContent = `${pendingChanges.length} Änderung${pendingChanges.length !== 1 ? 'en' : ''}`;
        }
    }

    // Save changes to GitHub
    async function saveChanges() {
        if (pendingChanges.length === 0) {
            showNotification('⚠️ Keine Änderungen zum Speichern!', 'warning');
            return;
        }

        showNotification('⏳ Speichere Änderungen...', 'info');

        try {
            // 1. Get current HTML file
            const htmlContent = await getFileFromGitHub('home.html');
            let updatedHTML = atob(htmlContent.content);

            // 2. Process each image change
            for (const change of pendingChanges) {
                // Upload new image
                const newPath = `Assest/uploads/${Date.now()}_${change.newImageName}`;
                await uploadImageToGitHub(newPath, change.newImageData);

                // Update HTML
                updatedHTML = updatedHTML.replace(
                    new RegExp(escapeRegExp(change.oldSrc), 'g'),
                    newPath
                );

                // Delete old image if it's in Assest folder
                if (change.oldSrc.startsWith('Assest/')) {
                    await deleteFileFromGitHub(change.oldSrc);
                }
            }

            // 3. Update HTML file
            await updateFileOnGitHub('home.html', updatedHTML, htmlContent.sha);

            showNotification('✅ Erfolgreich gespeichert! Seite wird neu geladen...', 'success');
            
            // Clear pending changes
            pendingChanges = [];
            updateChangesCount();

            // Reload after 2 seconds
            setTimeout(() => {
                window.location.reload();
            }, 2000);

        } catch (error) {
            console.error('Save error:', error);
            showNotification('❌ Fehler beim Speichern: ' + error.message, 'error');
        }
    }

    // GitHub API functions (via proxy)
    async function getFileFromGitHub(path) {
        const response = await fetch(
            `${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}/contents/${path}&ref=${CONFIG.GITHUB_BRANCH}`,
            {
                headers: {
                    'X-Password': userPassword
                }
            }
        );
        
        if (!response.ok) {
            throw new Error(`Failed to get file: ${response.statusText}`);
        }
        
        return await response.json();
    }

    async function uploadImageToGitHub(path, imageData) {
        // Convert data URL to base64
        const base64Data = imageData.split(',')[1];
        
        const response = await fetch(
            `${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}/contents/${path}`,
            {
                method: 'PUT',
                headers: {
                    'X-Password': userPassword,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: `Upload image: ${path}`,
                    content: base64Data,
                    branch: CONFIG.GITHUB_BRANCH
                })
            }
        );
        
        if (!response.ok) {
            throw new Error(`Failed to upload image: ${response.statusText}`);
        }
        
        return await response.json();
    }

    async function updateFileOnGitHub(path, content, sha) {
        const base64Content = btoa(unescape(encodeURIComponent(content)));
        
        const response = await fetch(
            `${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}/contents/${path}`,
            {
                method: 'PUT',
                headers: {
                    'X-Password': userPassword,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: `Update images from edit mode`,
                    content: base64Content,
                    sha: sha,
                    branch: CONFIG.GITHUB_BRANCH
                })
            }
        );
        
        if (!response.ok) {
            throw new Error(`Failed to update file: ${response.statusText}`);
        }
        
        return await response.json();
    }

    async function deleteFileFromGitHub(path) {
        try {
            // Get file SHA
            const fileData = await getFileFromGitHub(path);
            
            const response = await fetch(
                `${CONFIG.API_BASE}?path=repos/${CONFIG.GITHUB_REPO}/contents/${path}`,
                {
                    method: 'DELETE',
                    headers: {
                        'X-Password': userPassword,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        message: `Delete old image: ${path}`,
                        sha: fileData.sha,
                        branch: CONFIG.GITHUB_BRANCH
                    })
                }
            );
            
            if (!response.ok) {
                console.warn(`Could not delete ${path}: ${response.statusText}`);
            }
        } catch (error) {
            console.warn(`Could not delete ${path}:`, error);
        }
    }

    // Helper function to escape regex special characters
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Show notification
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `edit-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : type === 'warning' ? '#ff9800' : '#2196F3'};
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000001;
            font-weight: 600;
            animation: slideUp 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Exit edit mode
    function exitEditMode() {
        if (pendingChanges.length > 0) {
            if (!confirm('Sie haben ungespeicherte Änderungen. Wirklich beenden?')) {
                return;
            }
        }
        
        sessionStorage.removeItem(CONFIG.STORAGE_KEY);
        sessionStorage.removeItem('edit_password');
        window.location.href = window.location.pathname;
    }

    // Expose public API
    window.editMode = {
        authenticate,
        closeDialog,
        saveChanges,
        exitEditMode
    };

    // Initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                transform: translateX(-50%) translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
        @keyframes slideDown {
            from {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) translateY(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

})();
