import React from "react"
import {WrapperContext} from './context';


export default function Provider({ children }) {
  const [state, setState] = React.useState(true)

  return (
    <WrapperContext.Provider
      value={{
        on: state,
        handleOn: setState,
      }}
    >
      {children}
    </WrapperContext.Provider>
  )
}
