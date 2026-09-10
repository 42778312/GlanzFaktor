import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from './ContactForm';
import MobileCTA from './MobileCTA';
import EditMode from './EditMode';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ContactForm />
      <MobileCTA />
      <EditMode />
    </>
  );
}
