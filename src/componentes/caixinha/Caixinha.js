import React from "react";
import "./Caixinha.scss";


const  Caixinha = ({titulo,icon}) =>  {
    return (
      <div className="Caixinha">
          <div>
              <img src={icon} alt=""></img>
          </div>
          <h1>{titulo}</h1>
          <p>Lorem ipsum dolor sit amet ,consectetur adipiscing elit .Suspendisse 
          fringilla fringilla </p>
      </div>
    )
  }
  
  export default Caixinha;