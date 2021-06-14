import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export default function TermsFooter() {
  return (
    <Wrapper>
      <Link to="/terms">DSGVO & Impressum</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0.8;
  a {
    color: white;
  }
`;
