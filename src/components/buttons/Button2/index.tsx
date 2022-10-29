//Ref: https://youtu.be/ex7jGbyFgpA
import { useState } from "react"
import { getNextColor } from "../../../utils"
import { Container } from "./styled"

const Button2: React.FC = () => {
  const [colorSelection, setColorSelection] = useState(() => getNextColor())
  console.log(colorSelection)
  return (
    <Container activeColor={colorSelection.color}
      onClick={() => setColorSelection(getNextColor(colorSelection.index))}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Neon Button
    </Container>
  )
}


export default Button2