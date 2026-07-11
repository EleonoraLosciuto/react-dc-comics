import './MainApp.css'
import NavMenu from './NavMenu.jsx'
import Comics from './Comics.jsx'

function MainApp() {
    return (
        <main>
            <div className="content">
                <div className="jumbotron">

                </div>

                <div className="container">
                    <Comics />
                </div>
            </div>

            <NavMenu />

        </main>
    )
}

export default MainApp;