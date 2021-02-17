import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {withContext} from '../../withContext';

const SecondPage = ({handleOn}) => {
  React.useEffect(() => {
    setTimeout(() => {
      handleOn(false);
    }, 3000);
    

    return () => handleOn(true)

  }, [])

  return (<Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default withContext(SecondPage);
