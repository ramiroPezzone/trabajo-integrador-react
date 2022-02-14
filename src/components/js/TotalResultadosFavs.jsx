import React from 'react'
import styles from '../css/TotalResultadosFavs.module.css'

const TotalResultadosFavs = (props) => {
  return (
    <div>
      <div className={styles.pagesControlPanel}>
        <div className={styles.contenedorGralControlPanel}>
          <p className={styles.resultadosTotal}>Total de títulos: {props.pages}</p>
        </div>
      </div>
    </div>
  )
}

export default TotalResultadosFavs