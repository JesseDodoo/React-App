import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Discography, Landing } from './pages'
import {Header, Footer} from './layout'
import './App.css'

const App = () => {
    return (
        <>
        <Header />

        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="discography" element={<Discography />} />
        </Routes>

        <Footer />
        </>
        
    )
} 

export default App;
