import React from 'react'
import styles from '../css/WithoutFavs.module.css'

const WithoutFavs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <h3 className={styles.text}>No tenés ningún título marcado como favorito</h3>
      </div>
    </div>
  )
}

export default WithoutFavs