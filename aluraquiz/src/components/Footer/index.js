import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #000070;
  padding:20px;
  display: flex;
  align-items: center;
  border-radius:4px;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition:.3s;
    &:hover,
    &:focus {
      opacity: .5s;
    }

    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1576550767.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosmente criado durante {''} a {''}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}