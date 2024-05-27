import React from "react";
import "./LandingPage.css"
import {Link} from "react-router-dom"




const LandingPage = () => {
    return (
        <div className="LandingPage">
          

            <div className="tittle" >
                <img src="https://fontmeme.com/permalink/230221/dc42b73c9482c44a56c46293c38b08eb.png" alt="welcome to my pokemon's application" />
            </div>
            <Link to = "/home">
                <button className="buttonImage" ><img src="https://fontmeme.com/permalink/240527/e9d18ce3d12726224b04a5ff9156f9d6.png" alt="Gotcha" /></button>
            </Link>

            <img src="https://fontmeme.com/permalink/240527/05ed72a94ea5f77d6c561ba6297ff9a6.png" alt="Hecho por Valentin Re" className="createdBy" />

          
        </div>

    )
}

export default LandingPage;