import React from "react";
import mao from "../imagens/hand.png";
import android from "../imagens/icone-android.png";
import ios from "../imagens/icone-ios.png";
import windows from "../imagens/icone-windows.png";
import "./Banner.scss";

const Banner = () => {
    return(
        <div className="Banner">
            <div className="divNome">
                <h1>Notify<span>.</span></h1>
                <p>A great new free psd theme to showcase</p>
                <p>your new application.</p>
                <aside>
                    <a href="www.google.com"> <img src={android} alt="icon android"></img></a>
                    <a href=""> <img src={ios} alt="icon ios"></img></a>
                    <a href=""> <img src={windows} alt="icon windows"></img></a>
                </aside>
            </div>
            <div className="Mao">
                <img src={mao} alt=""></img>
            </div>
        </div>
            
        
    
    )
}

export default Banner;