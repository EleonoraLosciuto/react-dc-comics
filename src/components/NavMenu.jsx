import './NavMenu.css';


function NavMenu() {
    return (
        <div className='nav-menu'>
            <div className="container">
                <ul>
                    <li>
                        <img src="img/buy-comics-digital-comics.png" alt="Digital Comics Logo" />
                        <a href="#">digital comics</a>
                    </li>
                    <li>
                        <img src="img/buy-comics-merchandise.png" alt="Merchandise Logo" />
                        <a href="#">dc merchandise</a></li>
                    <li>
                        <img src="img/buy-comics-subscriptions.png" alt="Subscription Logo" />
                        <a href="#">subscription</a></li>
                    <li>
                        <img src="img/buy-comics-shop-locator.png" alt="Shop Locator Logo" />
                        <a href="#">comic shop locator</a></li>
                    <li>
                        <img src="img/buy-dc-power-visa.svg" alt="DC Power Visa Logo" />
                        <a href="#">dc power visa</a></li>
                </ul>
            </div>
        </div>
    )
};

export default NavMenu;