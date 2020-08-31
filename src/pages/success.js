import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Success = props => (
  <Layout>
    <Helmet>
      <title>Pagina di ringraziamento</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Grazie per averci contattato per informazioni, un appuntamento od una quotazione di oro od argento!</h1>
          </header>
          <span className="image main">
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          </span>
          <p>Modulo inviato!</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "pic11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;