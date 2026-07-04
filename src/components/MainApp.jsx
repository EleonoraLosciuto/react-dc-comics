import './MainApp.css'

function MainApp() {
    return <>
        <main>
            <div className="content">
                --&gt; Content goes here  &lt;--
            </div>
            <div className='nav-menu'>
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
        </main>
    </>
}

export default MainApp