import React from "react"
import Header from "../components/header"
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
        <a href="mailto:me@example.com">me@example.com</a>
      </div>
    </Layout>
  );
}