//Ref: https://youtu.be/L8VU8Ad_gpc
import { useState } from "react"
import { getNextColor } from "../../../utils"
import { Container, TextContainer } from "./styled"

const Button4: React.FC = () => {
  const [colorSelection, setColorSelection] = useState(() => getNextColor())

  return (
    <Container clr={colorSelection.color}
      onClick={() => setColorSelection(getNextColor(colorSelection.index))}>

      <TextContainer>
        Button 4
      </TextContainer>
    </Container>
  )
}



export default Button4