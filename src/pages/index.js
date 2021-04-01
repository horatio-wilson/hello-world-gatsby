import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div >
        <h1>Home</h1>
        <p>What a world we live in.</p>
        <img src={`medical-logo-design.jpeg`} alt="Compony logo" />
      </div>
    </Layout>   
  );
}
