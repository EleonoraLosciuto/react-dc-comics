import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="info-footer-menu">
                    <div className="info-footer-card">
                        <h3>DC comics</h3>
                        <ul>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div className="info-footer-card">
                        <h3>DC</h3>
                        <ul>
                            <li>Terms of Use</li>
                            <li>Privacy Policy (New)</li>
                            <li>Ad Choice</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscription</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="info-footer-card">
                        <h3>Sites</h3>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                    <div className="info-footer-card">
                        <h3>Shop</h3>
                        <ul>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-social'>
                    <button id='signup-btn'>
                        Sign-up now!
                    </button>
                    <div className='follow-footer'>
                        <h3>Follow us</h3>
                        <img src="../../img/footer-facebook.png" alt="Facebook" />
                        <img src="../../img/footer-twitter.png" alt="Twitter" />
                        <img src="../../img/footer-youtube.png" alt="Youtube" />
                        <img src="../../img/footer-pinterest.png" alt="Pinterest" />
                        <img src="../../img/footer-periscope.png" alt="Periscope" />
                    </div>

                </div>
            </footer>
        </>
    )
};

export default Footer;