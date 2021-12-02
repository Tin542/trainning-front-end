const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
        <div class="nav">
            <img src="image/dark-logo.png" class="brand-logo" alt=""/>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search...">
                    <button type="button" class="search-btn">search</button>
                </div>
                <a href="#"><img src="image/user.png" alt=""/></a>
                <a href="#"><img src="image/cart.png" alt=""/></a>
            </div>
            
        </div>
        <ul class="link-container">
            <li class="link-items"><a href="#" class="link">Home</a></li>
            <li class="link-items"><a href="#" class="link">Men</a></li>
            <li class="link-items"><a href="#" class="link">Women</a></li>
            <li class="link-items"><a href="#" class="link">Kids</a></li>
        </ul>
     `;
};

createNav();
