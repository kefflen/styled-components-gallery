import styled from "styled-components";

type props = {
  clr: string
}

export const Container = styled.button<props>`
  --clr: ${props => props.clr};
  border: none;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  color: white;
  overflow: hidden;
  transition: 1s;

  padding: 20px 60px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0004);

  :hover {
    background-color: var(--clr);
    box-shadow: 0 0 10px var(--clr),
                0 0 30px var(--clr),
                0 0 60px var(--clr),
                0 0 100px var(--clr);
  }

  ::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 400%;
    background: var(--clr);
    transition: 1s;
    animation: rotation 4s linear infinite;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
  }

  :hover::before {
    width: 120%;
  }

  ::after {
    content: '';
    position: absolute;
    inset: 3px;
    background-color: #0e1538;
    transition: 0.5s;
  }

  :hover::after {
    background: var(--clr);
  }


  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const TextContainer = styled.span`
  position: relative;
  z-index: 1;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;

`