import React from 'react'
import styles from './styles.module.css'

const Table = ({listaFiltrada}) => {

  return (
    <div>
      <table className={styles.table}>
        <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {listaFiltrada.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
