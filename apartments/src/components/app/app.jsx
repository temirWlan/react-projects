import React from 'react';
import styled from 'styled-components';

import CardList from '../card-list';


export default function App() {
  return (
    <>
      <Container>
        <Title>
          Квартиры
        </Title>
        <CardList />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 940px;
  }

  @media (max-width: 992px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    max-width: 500px;
  }

  @media (max-width: 576px) {
    max-width: 400px;
  }

  @media (max-width: 425px) {
    max-width: 360px;
  }

  @media (max-width: 375px) {
    max-width: 300px;
  }
`;

const Title = styled.h1` 
  font-size: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;