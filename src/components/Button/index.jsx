import React from 'react'
import styles from './styles.module.css'

const Button = ({regenerarLista, text}) => {
  return (
    <button onClick={regenerarLista} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
