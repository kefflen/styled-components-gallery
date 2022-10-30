import styled from "styled-components"

type props = {
  clr: string
}
export const Container = styled.button<props>`
  --clr: ${props => props.clr};

  cursor: pointer;
  position: relative;
  border: 2px solid var(--clr);
  background-color: transparent;
  transition: 0.5s;
  
  padding: 15px 30px;
  -webkit-box-reflect: below 0 linear-gradient(transparent, #0002);

  ::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: var(--clr);
    transform: translateY(-50%);
    top: 50%;
    left: -20px;
    
    box-shadow: 5px -8px 0 var(--clr),
                5px 8px 0 var(--clr);

    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 1s, 0.5s, 0.5s, 0.5s;
  }

  :hover::before {
    width: 60%;
    height: 100%;
    left: -2px;

    box-shadow: 5px 0px 0 var(--clr),
                5px 0px 0 var(--clr);

    transition-delay: 0s, 0s, 1s, 1s;
  }

  ::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: var(--clr);
    transform: translateY(-50%);
    top: 50%;
    right: -20px;
    
    box-shadow: -5px -8px 0 var(--clr),
                -5px 8px 0 var(--clr);

    transition: width 0.5s, right 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 1s, 0.5s, 0.5s, 0.5s;
  }

  :hover::after {
    width: 60%;
    height: 100%;
    right: -2px;

    box-shadow: -5px 0px 0 var(--clr),
                -5px 0px 0 var(--clr);

    transition-delay: 0s, 0s, 1s, 1s;
  }
`

export const TextContainer = styled.span`
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2em;
  transition: color 2s ease-in, box-shadow 0.5s;
  transition-delay: 0s, 0;
  position: relative;
  z-index: 100;
  

  ${Container}:hover & {
    transition: color 2s ease-in, box-shadow 0.5s;
    transition-delay: 0s, 1.5s;

    color: black;
    box-shadow: 0 0 15px var(--clr),
                0 0 35px var(--clr),
                0 0 65px var(--clr),
                0 0 105px var(--clr);
  }
`
