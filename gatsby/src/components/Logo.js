import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const LogoStyles = styled.div`
  h1{
    margin: 0;
    text-align: center;
  }
  div{
    display: flex;
    place-items: center;
    min-height: 5rem;
  }
`

const Logo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "mountain.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <LogoStyles>
      <BackgroundImage fluid={imageData}>
        
      </BackgroundImage>
      <h1>Conor Climbs</h1>
    </LogoStyles>
  );
}
 
export default Logo;