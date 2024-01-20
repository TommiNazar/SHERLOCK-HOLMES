import React from 'react'
import '../hojas-de-estilos/Libro.css'

function Libro(props) {
  return (
    <div className='contenedor-libro'>
        <img className='imagen-libro' src= {require (`../imagenes/${props.imagen}`)}
         alt = 'imagen-libro' />

        <div className='contenedor-texto-libro'>
          <p className='nombre-libro'> <strong>{props.nombre}</strong></p>
          <p className='año-libro'><strong>{props.año}</strong></p>
          <p className='descripcion-libro'>{props.descripcion}</p>
        </div>
    </div>
  )
}

export default Libro