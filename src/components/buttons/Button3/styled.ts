import styled from "styled-components";

type props = {
  neonColor: string
}

export const Container = styled.div<props>`
  --neon-color: ${props => props.neonColor};

  position: relative;
  
  ::before {
    content: '';
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: -5px;
    background: var(--neon-color);
    box-shadow: 0 0 5px var(--neon-color),
                0 0 15px var(--neon-color),
                0 0 30px var(--neon-color),
                0 0 60px var(--neon-color);
    width: 30px;
    height: 10px;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0;
  }
  
  :hover::before {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  ::after {
    content: '';
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: -5px;
    background: var(--neon-color);
    box-shadow: 0 0 5px var(--neon-color),
                0 0 15px var(--neon-color),
                0 0 30px var(--neon-color),
                0 0 60px var(--neon-color);
    width: 30px;
    height: 10px;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0;
  }
  
  :hover::after {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  
  button {
    position: relative;
    border: none;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: #fff;
    font-weight: 400;
    letter-spacing: 1px;
    transition: 0.5s;
    padding: 15px 30px;
    overflow: hidden;
    backdrop-filter: blur(15px);
    z-index: 1;
    
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
      transform: skewX(45deg) translate(0);
      transition: 0.5s;
    }
  
    :hover::before {
      transform: skewX(45deg) translate(200%);
    }
  } 
`