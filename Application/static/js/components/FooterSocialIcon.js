import React from 'react'

const styleIcon = {
  filter: 'brightness(0) invert(1)'
}

const FooterSocialIcon = () => (
    <div className="row" style={styleIcon}>
        <div className="col-lg-12">
            <ul className="list-inline">
                <li>
                    <img className="social-icon" src="static/img/twitter.svg" /><a href="https://www.python.org/">   Twitter</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                    <img className="social-icon"  src="static/img/facebook.svg" /><a href="https://www.docker.com/">   Facebook</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                    <img className="social-icon"  src="../static/img/yelp.svg" /><a href="https://www.yelp.com/developers/documentation/v2/overview">   Yelp </a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                    <img className="social-icon" src="../static/img/instagram.svg" /><a id="bootstraplink" href="http://getbootstrap.com/">  Instagram </a>
                </li>
            </ul>
        </div> 
    </div>
)

export default FooterSocialIcon
