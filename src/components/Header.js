import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
        <div id="header-sticky" className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-menu">
                  <nav className="navbar navbar-expand-lg">
                    <a href="index.html" className="navbar-brand">
                      <img src="img/logo/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                      <span className="navbar-icon" />
                      <span className="navbar-icon" />
                      <span className="navbar-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><a className="nav-link" href="/#supplement">Supplement</a></li>
                        <li className="nav-item"><a className="nav-link" href="/#order">Order</a></li>
                        <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                        <li className="nav-item"><a className="nav-link" href="/#contact">Contact</a></li>
                      </ul>
                    </div>
                    <div className="header-action">
                      <ul>
                        <li className="search-icon"><a href="/#"><i className="fas fa-search" /></a></li>
                        <li className="shop-cart"><a href="/#"><i className="fas fa-shopping-basket" /><span className="cart-count" /></a></li>
                      </ul>
                    </div>
                    <div className="header-btn d-none d-xl-block">
                      <a href="/#" className="btn">order now</a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
