const createFooter = () => {
  let footer = document.querySelector("footer");
  footer.innerHTML = `<div class="footer-content">
    <img src="image/light-logo.png" class="logo" alt="" />
    <div class="footer-url-container">
      <ul class="category">
        <li class="category-title">men</li>
        <li><a href="#" class="footer-link">t-shirt</a></li>
        <li><a href="#" class="footer-link">shoses</a></li>
        <li><a href="#" class="footer-link">vest</a></li>
        <li><a href="#" class="footer-link">jean</a></li>
        <li><a href="#" class="footer-link">brand</a></li>
        <li><a href="#" class="footer-link">hat</a></li>
        <li><a href="#" class="footer-link">class</a></li>
        <li><a href="#" class="footer-link">shirt</a></li>
        <li><a href="#" class="footer-link">jacket</a></li>
        <li><a href="#" class="footer-link">coat</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">women</li>
        <li><a href="#" class="footer-link">t-shirt</a></li>
        <li><a href="#" class="footer-link">shoses</a></li>
        <li><a href="#" class="footer-link">vest</a></li>
        <li><a href="#" class="footer-link">jean</a></li>
        <li><a href="#" class="footer-link">brand</a></li>
        <li><a href="#" class="footer-link">hat</a></li>
        <li><a href="#" class="footer-link">class</a></li>
        <li><a href="#" class="footer-link">shirt</a></li>
        <li><a href="#" class="footer-link">jacket</a></li>
        <li><a href="#" class="footer-link">coat</a></li>
      </ul>
    </div>
  </div>

  <p class="footer-title">About Company</p>
  <p class="info">
    Companies are also sometimes distinguished for legal and regulatory
    purposes between public companies and private companies. Public
    companies are companies whose shares can be publicly traded, often
    (although not always) on a stock exchange which imposes listing
    requirements/Listing Rules as to the issued shares, the trading of
    shares and future issue of shares to help bolster the reputation of the
    exchange or particular market of an exchange. Private companies do not
    have publicly traded shares, and often contain restrictions on transfers
    of shares. In some jurisdictions, private companies have maximum numbers
    of shareholders.
  </p>
  <p class="info">support email - support@gmail.com</p>
  <p class="info">telephone number - 0773114946</p>
  <div class="footer-social-container">
    <div>
      <a href="#" class="social-link">term & service</a>
      <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
      <a href="#" class="social-link">facebook</a>
      <a href="#" class="social-link">instagram</a>
      <a href="#" class="social-link">twitter</a>
    </div>
  </div>
  <p class="footer-credit">Clothing - Best Collection of fashion</p>`;
};
createFooter();
