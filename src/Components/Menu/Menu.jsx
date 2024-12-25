import React from 'react'
import "../../Css/menu.scss"

const Menu = () => {
    return (
        <>
            <div className="menu">
                <div className="heading">
                    <img className='logo' src="/logo.png" alt="logo" />
                    <h1 className='company' >CodeAnt AI</h1>
                </div>

                <div className="options">
                    <select className='select' name="option" id="option">
                        <option value="1">UtkarshDhairyaPa1..</option>
                        <option value="2">UtkarshDhairyaPa2..</option>
                        <option value="3">UtkarshDhairyaPa3..</option>
                        <option value="4">UtkarshDhairyaPa4..</option>
                    </select>
                </div>

                <div className="pages">
                    <div className="page">

                        repositories
                    </div>
                    <div className="page">

                        codeReview</div>
                    <div className="page">

                        cloudSecurity</div>
                    <div className="page">

                        howToUse</div>
                    <div className="page">

                        settings</div>
                </div>


            </div>
        </>
    )
}

export default Menu;
