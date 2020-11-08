import React from 'react';
import styled from "styled-components";
import mountain from "../assets/images/mountain.svg"

const LogoStyles = styled.div`
  background-image: url(${mountain});
`

const Logo = () => {
  return (
    <LogoStyles>
      <div>
        <h1>Conor Climbs</h1>
      </div>
    </LogoStyles>
  );
}
 
export default Logo;