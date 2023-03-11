import logo from '../logo.svg';

import '../App.css';

function Header() {
  return (
    <div>
    <header class="section-header">
      <section class="header-main">
        <div class="container">
          <div class="row gy-3 align-items-center">
            <div class="col-lg-2 col-sm-4 col-4">
              <a href="http://bootstrap-ecommerce.com" class="navbar-brand">
                <img class="logo" height="60" src="images/logo.png" />
              </a>
            </div>
            <div class="order-lg-last col-lg-5 col-sm-8 col-8">
              <div class="float-end">
                <a href="#" class="btn btn-light">
                  <i class="fa fa-user"></i>
                  <span class="ms-1 d-none d-sm-inline-block">Sign in </span>
                </a>
                <a href="#" class="btn btn-light">
                  <i class="fa fa-heart"></i>
                  <span class="ms-1 d-none d-sm-inline-block">Wishlist</span>
                </a>
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvas_cart"
                  class="btn btn-light"
                >
                  <i class="fa fa-shopping-cart"></i>
                  <span class="ms-1">My cart </span>
                </a>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 col-12">
              <form action="#" class="">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search"
                  />
                  <select class="form-select">
                    <option value="">All type</option>
                    <option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
                  </select>
                  <button class="btn btn-danger">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <header class="header">
        <div class="container">
          <div class="row v-center">
            <div class="header-item item-left">
              <div class="logo">
                <a href="#" class="navBar-heading"></a>
              </div>
            </div>
          
            <div class="header-item item-center">
              <div class="menu-overlay">
              </div>
              <nav class="menu">
                <div class="mobile-menu-head">
                  <div class="go-back"><i class="fa fa-angle-left"></i></div>
                  <div class="current-menu-title"></div>
                  <div class="mobile-menu-close">&times;</div>
                </div>
                <ul class="menu-main">
                  <li>
                    <a href="#" class="navBar-heading">Home</a>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#" class="navBar-heading" >New <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item text-center">
                        <a href="#" class="navBar-link">
                        <img src={logo} alt="shop"/>
                        <h4 class="title">Product 1</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#" class="navBar-link">
                        <img src={logo} alt="shop"/>
                        <h4 class="title">Product 2</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#" class="navBar-link">
                        <img src={logo} alt="shop"/>
                        <h4 class="title">Product 3</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#" class="navBar-link">
                        <img src={logo} alt="shop"/>
                        <h4 class="title">Product 4</h4>
                         </a>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#" class="navBar-heading">Shop <i class="fa fa-angle-down"></i></a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                                    <div class="list-item">
                                        <h4 class="title">Men's Fashion</h4>
                                        <ul class="navBar-link">
                                           <li><a class="navBar-link" href="#">Product List</a></li>
                                               <li><a class="navBar-link" href="#">Product List</a></li>
                                               <li><a class="navBar-link" href="#">Product List</a></li>
                                               <li><a class="navBar-link" href="#">Product List</a></li>
                                        </ul>
                                        <h4 class="title">Beauty</h4>
                                        <ul class="navBar-link">
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                        </ul>
                                    </div>
                                    <div class="list-item">
                                      <h4 class="title">Women's Fashion</h4>
                                      <ul class="navBar-link">
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                        </ul>
                                        <h4 class="title">Furniture</h4>
                                      <ul class="navBar-link">
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                        </ul>
                                    </div>
                                    <div class="list-item">
                                      <h4 class="title navBar-heading">Home, Kitchen</h4>
                                      <ul class="navBar-link">
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                         <li><a class="navBar-link" href="#">Product List</a></li>
                                        </ul>
                                    </div>
                                    <div class="list-item">
                                       <img src={logo} alt="shop"/>
                                    </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#" class="navBar-heading">Blog <i class="fas fa-angle-down"></i></a>
                    <div class="sub-menu single-column-menu">
                      <ul>
                        <li><a class="navBar-link" href="#">Standard Layout</a></li>
                        <li><a class="navBar-link" href="#">Grid Layout</a></li>
                        <li><a  class="navBar-link" href="#">single Post Layout</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#" class="navBar-heading">Pages <i class="fas fa-angle-down"></i></a>
                    <div class="sub-menu single-column-menu">
                      <ul>
                        <li><a class="navBar-link" href="#">Login</a></li>
                        <li><a class="navBar-link" href="#">Register</a></li>
                        <li><a class="navBar-link" href="#">Faq</a></li>
                        <li><a class="navBar-link" href="#">404 Page</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="navBar-heading">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div class="header-item item-right">
              <a href="#" class="navBar-link" ><i class="fas fa-search"></i></a>
              <a href="#" class="navBar-link"><i class="far fa-heart"></i></a>
              <a href="#" class="navBar-link"><i class="fas fa-shopping-cart"></i></a> 
              <div class="mobile-menu-trigger">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </header>
    <section class="banner-section">
 	
    </section>
    </div>
  );
}

export default Header;
