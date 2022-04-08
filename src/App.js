import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Discography, Landing } from './pages'
import {Header, Footer, Layout} from './layout'
import './App.css'

const App = () => {
    return (
        <>

        <Routes>
            <Route path="/" element={<Layout />} > 
            <Route path="discography" element={<Discography />} />
            </Route  >
        </Routes>
        </>
        
    )
} 

export default App;
