import React from 'react'
import Menu from '../Menu/Menu'
import '../../Css/homepage.scss'
const Homepage = () => {
    return (
        <>

            <div className="container">
                <div className="left">
                    <Menu />
                </div>
                <div className="right">
                    <h1>Content</h1>
                </div>
            </div>
        </>
    )
}

export default Homepage