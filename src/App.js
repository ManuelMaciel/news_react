import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  //useState
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() =>{
    const consultarAPI = async () => {
      const APIkey = '36ff0363ebc6407d9716b412fff669e5';
      const URL = `https://newsapi.org/v2/top-headlines?country=ar&category${categoria}&apiKey=${APIkey}`;
      const respuesta = await fetch(URL);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])
  return (
    <Fragment>
      <Header 
        titulo='News Search'
      />
      <div className='container white'>
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
