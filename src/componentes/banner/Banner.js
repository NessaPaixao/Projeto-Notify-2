import React from "react";
import mao from "../imagens/hand.png";
import android from "../imagens/icone-android.png";
import ios from "../imagens/icone-ios.png";
import windows from "../imagens/icone-windows.png";
import "./Banner.scss";
import Icons from "./Icons.js";

const Banner = () => {
    return(
        <header className="Banner">
            <div className="divNome">
                <h1>Notify<span>.</span></h1>
                <p>A great new free psd theme to showcase </p>
                <p>your new application.</p>
                    <div className="Icons">
                        <Icons imagem= {android}/>
                        <Icons imagem= {ios}/>
                        <Icons imagem= {windows}/>
                    </div>
            </div>
            <div className="Mao">
                <img src={mao} alt=""></img>
            </div>
        </header>
    )
}

export default Banner;