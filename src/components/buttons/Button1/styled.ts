import React from "react";
import styled from "styled-components";

type props = {
  activeColor: string
}

export const Container = styled.button<props>`
  --background: #27282c;
  --text-color: #fff;
  --transition-time: 0.5s;
  --active-color: ${props => props.activeColor};
  
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  transition: var(--transition-time);
  font-size: 1.5em;
  letter-spacing: 0.1;

  padding: 10px 30px;
  background-color: #444;
  color: var(--text-color);

  :hover {
    letter-spacing: 0.25em;
    color: var(--active-color);
    background-color: var(--active-color);
    box-shadow: 0 0 35px var(--active-color);
  }

  ::before {
    content: '';
    position: absolute;
    inset: 2px;

    background-color: var(--background);
  }

  span {
    position: relative;
    z-index: 1;
  }

  i {
    position: absolute;
    inset: 0;
    display: block;


    ::before {
      content: '';
      position: absolute;
      top: -3.5px;
      left: 80%;
      width: 10px;
      height: 5px;
      transform: translateX(-50%);
      border: 2px solid var(--active-color);
      background-color: var(--background);
      transition: var(--transition-time);
    }

    ::after {
      content: '';
      position: absolute;
      bottom: -3.5px;
      left: 20%;
      width: 10px;
      height: 5px;
      border: 2px solid var(--active-color);
      background-color: var(--background);
      transition: var(--transition-time);
    }
  }
  
  :hover i::before {
    width: 20px;
    left: 20%;
  }

  :hover i::after {
    width: 20px;
    left: 80%;
  }

`