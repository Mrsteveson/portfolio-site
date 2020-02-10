import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://linkedin.com/in/patricktsteveson" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/mrsteveson" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://docs.google.com/document/d/1NRi__5oozf6C2neaxn-M2lzMI7kIOIxbfcqkWhDJINw/edit?usp=sharing" className="icon fa-file"><span className="label">Resume</span></a></li>
                        <li><a href="mailto:patrick.steveson727@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Patrick Steveson</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
