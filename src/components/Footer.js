import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://facebook.com/comprorolascari" target="_blank" className="icon fa-facebook"><span className="label">Twitter</span></a></li>
                        <li><a href="https://g.page/comproorolascari?gm" target="_blank" className="icon fa-google"><span className="label">Github</span></a></li>
                        <li><a href="https://m.me/comprorolascari" target="_blank" className="icon fa-envelope-o "><span className="label">Facebook Messenger</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Compro Oro Lascari • <a href="/privacypolicy">Privacy Policy</a></li><li>Design: <a href="http://1000sunny.social">1000 Sunny</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
