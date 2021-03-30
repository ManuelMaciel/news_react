import React from 'react';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css';

const Formulario = ({guardarCategoria}) => {
  
  const OPCIONES = [
    {value: 'general',        label: 'General'},
    {value: 'technology',     label: 'Technology'},
    {value: 'entertainment',  label: 'Entertainment'},
    {value: 'science',        label: 'Science'},
    {value: 'business',       label: 'Business'},
    {value: 'sports',         label: 'Sports'},
    {value: 'health',         label: 'Health'},
  ]
  //usando el custom hook
  const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

  const buscarNoticia = e => {
    e.preventDefault();
    guardarCategoria(categoria);
  }

  return (  
    <div className={`row ${styles.buscador}`}>
      <div className='col s12 m8 offset-m2'>
        <form
          onSubmit={buscarNoticia}
        >
          <h2 className={styles.heading}>Find news by category</h2>
          <SelectNoticias />
          <div className='input-field col s12'>
            <input 
              type='submit'
              className={`btn-large light-blue darken-1 ${styles['btn-block']}`}
              value='Search'
            />
          </div>
        </form>
      </div>
    </div>
  );
}

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;