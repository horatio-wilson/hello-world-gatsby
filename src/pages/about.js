import React from "react"
import Header from "../components/header"
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="About"/>
        <Header headerText="This is a website using Gatsby" />
        <p>Such wow. Very React.</p>
      </div>
    </Layout>    
  );
}