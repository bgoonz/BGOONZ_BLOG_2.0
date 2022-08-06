<<<<<<< HEAD
import * as React from "react"
import {Link} from "gatsby"

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif"
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320
}

const paragraphStyles = {
    marginBottom: 48
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4
}

// markup
const NotFoundPage = () => {
    return (
        <main style={pageStyles}>
            <title>Not found</title>
            <h1 style={headingStyles}>Page not found</h1>
            <p style={paragraphStyles}>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>
                {" "}
                we couldn’t find what you were looking for.
                <br/> {
                process.env.NODE_ENV === "development" ? (
                    <>
                        <br/>
                        Try creating a page in
                        <code style={codeStyles}>src/pages/</code>.
                        <br/>
                    </>
                ) : null
            }
                <br/>
                <Link to="/">Go home</Link>.
            </p>
        </main>
    )
}

export default NotFoundPage

=======
import React from 'react'

const NotFoundPage = () => (
      <div>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
)

export default NotFoundPage
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
