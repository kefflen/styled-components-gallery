//Ref: https://youtu.be/Q4ta_NZOYwE
import { useState } from "react"
import { getNextColor } from "../../../utils"
import { Container, TextContainer } from "./styled"

const Button5: React.FC = () => {
  const [colorSelection, setColorSelection] = useState(() => getNextColor())

  return (
    <Container clr={colorSelection.color}>

      <TextContainer>
        Battery button
      </TextContainer>
    </Container>
  )
}

export default Button5