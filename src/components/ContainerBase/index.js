import React from 'react'
import "./styles.scss"

const ContainerBase= ({ children }) => (
  <div className="containerBase">
    <div className="containerContent">
      {children}
    </div>
  </div>
);

export default ContainerBase;