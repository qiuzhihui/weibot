import React from 'react'

const AppFooter = () => (
    <footer>
      <div className="container">
        <div className="row" >
            <div className="col-lg-12">
                <h6 id="techword">Follow us on:</h6>
                <ul className="list-inline">
                    <li>
                        <img className="social-icon" id="twitter-icon" src="static/img/twitter.svg" /><a href="https://www.python.org/">Twitter</a>
                    </li>
                    <li className="footer-menu-divider">&sdot;</li>
                    <li>
                        <img className="social-icon" id="facebook-icon" src="static/img/facebook.jpeg" /><a href="https://www.docker.com/">  Facebook</a>
                    </li>
                    <li className="footer-menu-divider">&sdot;</li>
                    <li>
                        <img className="social-icon" id="yelp-icon" src="../static/img/Yelp.svg" /><a href="https://www.yelp.com/developers/documentation/v2/overview">  Yelp </a>
                    </li>
                    <li className="footer-menu-divider">&sdot;</li>
                    <li>
                        <img className="social-icon" id="instagram-icon" src="../static/img/instagram.png" /><a id="bootstraplink" href="http://getbootstrap.com/">Instagram </a>
                    </li>
                </ul>
                <ul className="list-inline">
                    <li>
                <p className="copyright text"> Uboston Auto School</p>
                        </li>
                    <li className="footer-menu-divider">&sdot;</li>
                    <li>
                    <p id="author" className="copyright text-muted small">Created By Jumbos</p>
                    </li>
                    <li className="footer-menu-divider">&sdot;</li>
                    <li><p className="copyright text-muted small">
                        Copyright Aug. 2017</p></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
)

export default AppFooter