import React from 'react';
import {WrapperContext} from "./context"

export function withContext(Component) {
  return function (props) {
    return (
      <WrapperContext.Consumer>
        {({ on, handleOn }) => (
          <Component {...props} on={on} handleOn={handleOn} />
        )}
      </WrapperContext.Consumer>
    )
  }
}