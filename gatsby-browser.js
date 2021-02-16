/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import Wrapper from "./Wrapper"
import Provider from "./Provider"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Provider>
      {element}
      <Wrapper/>
    </Provider>
  )
}
