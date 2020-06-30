import  React from  'react';
import "../styles/footer.css";
const  Footer = (props) => {
  return (
    <footer>
      <div id="footer-column" class="container">
        <div class="trademark category">
          <p>© Южно-Российский государственный</p> 
          <p>политехнический университет (НПИ), 2014</p>
        </div>
        <div class="development category">
          <p>УДК 519.6:519.615</p>
          <p>ББК 22.19 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;