import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/profile.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="profile" /></a>
                    <h1>Hello,<strong>I am Patrick Steveson</strong>, a full-stack web developer from Illinois, with a background in finance.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
