import React from 'react'

const Heading = ({children}) => {
  return (
    <h1 style={{fontSize: '2.5rem', marginBottom: '2rem'}}>
      {children}
    </h1>
  )
}

export default Heading
