import '../styles/Footer.css';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Dev Portfolio. Built with 💻 and 💜.</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '1rem',
    textAlign: 'center',
    borderTop: '1px solid #333',
    marginTop: '2rem',
    fontSize: '0.9rem',
    color: '#999',
  },
};

export default Footer;
