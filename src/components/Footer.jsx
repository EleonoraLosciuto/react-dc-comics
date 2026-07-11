import './Footer.css';


const FooterLinks = [
    {
        id: 1,
        title: "DC Comics",
        links: [
            {
                id: 1,
                title: "Characters",
                href: "#"
            },
            {
                id: 2,
                title: "Comics",
                href: "#"
            },
            {
                id: 3,
                title: "Movies",
                href: "#"
            },
            {
                id: 4,
                title: "TV",
                href: "#"
            },
            {
                id: 5,
                title: "Games",
                href: "#"
            },
            {
                id: 6,
                title: "Videos",
                href: "#"
            },
            {
                id: 7,
                title: "News",
                href: "#"
            },
        ],
    },
    {
        id: 2,
        title: "Shop",
        links: [
            {
                id: 1,
                title: "Shop DC",
                href: "#"
            },
            {
                id: 2,
                title: "Shop DC Collectibles",
                href: "#"
            },
        ],
    },
    {
        id: 3,
        title: "DC",
        links: [
            {
                id: 1,
                title: "Terms of Use",
                href: "#"
            },
            {
                id: 2,
                title: "Privacy Policy (New)",
                href: "#"
            },
            {
                id: 3,
                title: "Ad Choice",
                href: "#"
            },
            {
                id: 4,
                title: "Advertising",
                href: "#"
            },
            {
                id: 5,
                title: "Jobs",
                href: "#"
            },
            {
                id: 6,
                title: "Subscription",
                href: "#"
            },
            {
                id: 7,
                title: "Talent Workshops",
                href: "#"
            },
            {
                id: 8,
                title: "CPSC Certificates",
                href: "#"
            },
            {
                id: 9,
                title: "Ratings",
                href: "#"
            },
            {
                id: 10,
                title: "Shop Help",
                href: "#"
            },
            {
                id: 11,
                title: "Contact Us",
                href: "#"
            },
        ],
    },
    {
        id: 4,
        title: "Sites",
        links: [
            {
                id: 1,
                title: "DC",
                href: "#"
            },
            {
                id: 2,
                title: "MAD Magazine",
                href: "#"
            },
            {
                id: 3,
                title: "DC Kids",
                href: "#"
            },
            {
                id: 4,
                title: "DC Universe",
                href: "#"
            },
            {
                id: 5,
                title: "DC Power Visa",
                href: "#"
            },
        ],
    },
];

const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
                <div className="container">
                    <div className="info-footer-menu">
                        {
                            FooterLinks.map(link => (
                                <div key={link.id} className="info-footer-card">
                                    <h3>{link.title}</h3>
                                    <ul>
                                        {link.links.map(element =>
                                            <li key={element.id}>
                                                <a href={element.href}>{element.title}</a>
                                            </li>
                                        )
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                    <div className="logo">
                    </div>
                </div>

            </div>
            <div className='footer-social'>
                <div className="container">
                    <button id='signup-btn'>
                        Sign-up now!
                    </button>
                    <div className='follow-footer'>
                        <h3>Follow us</h3>
                        <img src="img/footer-facebook.png" alt="Facebook" />
                        <img src="img/footer-twitter.png" alt="Twitter" />
                        <img src="img/footer-youtube.png" alt="Youtube" />
                        <img src="img/footer-pinterest.png" alt="Pinterest" />
                        <img src="img/footer-periscope.png" alt="Periscope" />
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;