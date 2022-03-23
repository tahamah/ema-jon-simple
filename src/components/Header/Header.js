import React from 'react'
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className="header-nav">
            <img src={logo} alt="" />
            <div>
                <a href="/shope">Shope</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}

export default Header