import React from 'react';
import './App.scss';
import Banner from './componentes/banner/Banner';
import Caixa from './componentes/caixinha/Caixa';

const  App = () =>  {
  return (
    <div className="App">
    < Banner />
    <Caixa/>
    </div>
  );
}

export default App;
