import React from 'react'

const styleIcon = {
  filter: 'brightness(0) invert(1)'
}

const FooterSocialIcon = () => (
    <div className="row" style={styleIcon}>
        <div className="col-lg-12">
            <ul className="list-inline">
                <li>
                    <a href="#"><img className="social-icon" src="static/img/twitter.svg" />   Twitter</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                    <a href="#"><img className="social-icon"  src="static/img/facebook.svg" />   Facebook</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                    <a href="#"><img className="social-icon"  src="../static/img/yelp.svg" />   Yelp </a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                   <a id="bootstraplink" href="#"> <img className="social-icon" src="../static/img/instagram.svg" />  Instagram </a>
                </li>
            </ul>
        </div> 
    </div>
)

export default FooterSocialIcon
