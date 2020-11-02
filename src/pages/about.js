import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header title="About Us" />
            <p>Such wow. Very React.</p>
      </div>
    )
}

