import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// const Subt = styled.h2`
//   font-size: 30px;
//   color: ${({ theme }) => theme.colors.secondary};
// `

// function Title(props) {
//   return <h1>{props.children}</h1>
// }

// function Subt(pudimComBatata) {
//   return <h2>{pudimComBatata.children}</h2>
// }

// export const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//     flex: 1;
//     background-size: cover;
//     background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>Texto Cabeçalho</Widget.Header>
          <Widget.Content>
            <form onSubmit={function () {
              console.log('testando... funfou');
            }}
            >
              <input type="text" placeholder="Digite seu nome" />
              <button type="submit">
                Jogar, [seuNome]
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>Alá...2</Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/fesanto" />
    </QuizBackground>
  );
}
