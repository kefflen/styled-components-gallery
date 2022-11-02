import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: .5em;
`
export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.5s;

  :hover {
    transform: scale(1.2);
  }
`

export const InputContainer = styled.div`
  position: relative;
  width: 250px;
`

export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  outline: none;
  border: none;
  color: white;
  box-shadow: none;
  font-size: 1em;
  background-color: transparent;

  letter-spacing: 0.1em;
  padding: 10px 0 5px;

`

export const LabelText = styled.label`
  left: 0;
  position: absolute;
  padding: 10px 0 5px;
  color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 0.1em;

  ${StyledInput}:valid ~ &,
  ${StyledInput}:focus ~ &,
  ${StyledInput}:disabled ~ & {
    color: #2196f3;
    transform: translateY(-100%);
    font-size: 0.65em;
    padding: 0;
  }


`

export const StyledIcon = styled.i`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  overflow: hidden;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    background: linear-gradient(90deg, #2196f3, #8ccbff);
    transition: 0.5s;
  }

  ${StyledInput}:valid ~ &::before,
  ${StyledInput}:focus ~ &::before {
    left: 0;
  }
  
`