import React from "react"
import { createPortal } from "react-dom"

import {WrapperContext} from './context';


export default function Wrapper() {
  const {on} = React.useContext(WrapperContext);

  return createPortal(
    <div
      style={{
        transition: 'all 2s ease',
        top: 0,
        left: 0,
        position: "absolute",
        width: on ? "100vw" : 0,
        height: "100vh",
        backgroundColor: "black",
      }}
    ></div>,
    document.body
  )
}
