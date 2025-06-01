import React from 'react'
import styles from './styles.module.css'
import {Trash2} from 'lucide-react'

const input = ({id, name, type, placeholder, text, onChange, value}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{text}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value}/>
      <button><Trash2/></button>
    </div>
  )
}

export default input
