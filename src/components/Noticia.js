import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

  //destructuring
  const { urlToImage, url, description, title, source } = noticia;

  //condicional imagen
  const imagen = (urlToImage) ? <div className='card-image'>
                                  <img src={urlToImage} alt={title}/>
                                  <span className='card-title'>{source.name}</span>
                                </div> : null
  return (  
    <div className='col s12 m6 l4'>
      <div className='card'>
        {imagen}
        <div className='card-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='card-action'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='waves-effect waves-light btn'
          >Read the full story</a>
        </div>
      </div>
    </div>
  );
}

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
}
 
export default Noticia;