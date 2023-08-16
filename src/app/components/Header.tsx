const Header = () => {
  return (
    <header className="header-area header-style-1 sticky-bar">
      <div className="header-middle py-3 d-none d-lg-block">
        <div className="container-fluid">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <a href="index.html"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg" alt="logo" /></a>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <a href="page-account.html">
                    <img className="svgInject" alt="Nest" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-user.svg" />
                    </a>
                    <a href="page-account.html"><span className="lable ml-0">Account</span></a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <a href="page-account.html"><i className="fi fi-rs-user mr-10"></i>My Account</a>
                        </li>
                        <li>
                          <a href="page-account.html"><i className="fi fi-rs-settings-sliders mr-10"></i>Setting</a>
                        </li>
                        <li>
                          <a href="page-login.html"><i className="fi fi-rs-sign-out mr-10"></i>Sign out</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;