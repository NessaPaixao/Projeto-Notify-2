import React from "react";
import "./Icons.scss";

const Icons = ({imagem}) => {
    return (
        <div className='Divicones'>
            <img  src ={imagem} alt="icones" />  
        </div>
    )
}
export default Icons;