import React from "react";
import Caixinha from  "./Caixinha";
import icone1 from "../imagens/icone1.png";
import icone2 from "../imagens/icone2.png";
import icone3 from "../imagens/icone3.png";
import "./Caixa.scss";


const  Caixa = () =>  {
    return (
      <div className="Caixa">
          <Caixinha titulo="Editable Theme" icon={icone1}/>
          <Caixinha titulo="Flat Design" icon={icone2}/>
          <Caixinha titulo="Reach tour audience" icon={icone3}/>
      </div>
    )
  }
  
  export default Caixa;