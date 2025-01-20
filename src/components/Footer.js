const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        <p>
          Created By <span className="heart">❤️</span>
          <a
            href="https://www.linkedin.com/in/sandeep-nayak-0547461a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Sandeep Nayak
          </a>
        </p>
        <p>
          <span>&copy; {year}</span>
          <strong>
            Mama's <span className="kitchen">Kitchen</span>
          </strong>
        </p>
      </div>
    );
  };

  export default Footer;