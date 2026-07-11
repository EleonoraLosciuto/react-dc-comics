import './Header.css';

const navBarLinks = [
    {
        id: 1,
        item: "Characters",
        active: false
    },
    {
        id: 2,
        item: "Comics",
        active: true
    },
    {
        id: 3,
        item: "TV",
        active: false
    },
    {
        id: 4,
        item: "Movies",
        active: false
    },
    {
        id: 5,
        item: "Games",
        active: false
    },
    {
        id: 6,
        item: "Collectibles",
        active: false
    },
    {
        id: 7,
        item: "Videos",
        active: false
    },
    {
        id: 8,
        item: "Fans",
        active: false
    },
    {
        id: 9,
        item: "News",
        active: false
    },
    {
        id: 10,
        item: "Shop",
        active: false
    }
];


function Header() {
    return <header className='container'>
        <img src="img/dc-logo.png" alt="DC LOGO" />
        <nav>
            <ul>
                {navBarLinks.map((link) => (
                    <li key={link.id} className={link.active ? "active" : undefined}><a href='#'>{link.item}</a></li>
                ))}
            </ul>

        </nav>
    </header>
}

export default Header;