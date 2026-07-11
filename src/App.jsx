import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import MainApp from './components/MainApp'
import Footer from './components/Footer'

function App() {
    return (
        <div className='main-container'>
            <Header />
            <MainApp />
            <Footer />
        </div>
    )
}


export default App;
