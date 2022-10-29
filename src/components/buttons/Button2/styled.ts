import styled from "styled-components";

export const Container = styled.button`
  --neon-color: #2196f3;
  --neon-color-dark: #255784;

  position: relative;
  color: var(--neon-color);
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.2s;
  letter-spacing: 4px;
  background-color: inherit;
  border: none;
  
  padding: 15px 30px;
  font-size: 24px;
  
  :hover {
    color: var(--neon-color-dark);
    background-color: var(--neon-color);
    box-shadow: 0 0 10px var(--neon-color), 0 0 40px var(--neon-color),
    0 0 80px var(--neon-color);
    transition-delay: 1s;
  }

  span {
    position: absolute;
    display: block;

    :nth-child(1) {
      height: 2px;
      top: 0;
      left: -100%;
      width: 100%;
      background: linear-gradient(90deg, transparent, var(--neon-color));
    }

    :nth-child(3) {
      height: 2px;
      bottom: 0;
      left: 100%;
      width: 100%;
      background: linear-gradient(270deg, transparent, var(--neon-color));
    }

    :nth-child(2) {
      width: 2px;
      right: 0;
      top: -100%;
      height: 100%;
      background: linear-gradient(180deg, transparent, var(--neon-color));
    }

    :nth-child(4) {
      width: 2px;
      left: 0;
      top: 100%;
      height: 100%;
      background: linear-gradient(380deg, transparent, var(--neon-color));
    }

  }

  :hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
  }
  
  :hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: .25s;
  }

  :hover span:nth-child(3) {
    left: -100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  :hover span:nth-child(4) {
    top: -100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`

