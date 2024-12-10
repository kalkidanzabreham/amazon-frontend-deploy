import React from 'react'
import Header from '../Header/Header'

function LayOUt({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default LayOUt