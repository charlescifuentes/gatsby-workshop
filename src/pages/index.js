import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="about">About</Link>
      <Header title="Home" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200"></img>
    </div>
  )
}
