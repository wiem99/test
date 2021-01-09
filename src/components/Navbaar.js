import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo_blanc_text.png'

function Navbaar() {
    return (
        <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/" bg="dark">
                <img 
                 src={logo}
                 width="300" 
                 align="left"
                 style={{ marginRight: '1em' }}>
                </img>
            </Navbar.Brand>
            <br/>Registre d'appel
        </Navbar>
        </div>
    )
}

export default Navbaar
