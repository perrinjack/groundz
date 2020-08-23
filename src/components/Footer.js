import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small cyan darken-3">
      <br></br>
      <div className="footer-copyright text-center py-3">
        <a href="https://github.com/perrinjack">
          {' '}
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>{' '}
        </a>
        <a href="https://www.linkedin.com/in/perrinjack/">
          {' '}
          <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
        </a>
        <br></br>© 2020 Copyright: J Perrin
      </div>
    </footer>
  );
};

export default Footer;
