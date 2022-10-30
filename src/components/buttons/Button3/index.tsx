//Ref: https://youtu.be/YrOq7OpRV8I
import { useState } from "react"
import { getNextColor } from "../../../utils"
import { Container } from "./styled"

const Button3: React.FC = () => {
  const [colorSelection, setColorSelection] = useState(() => getNextColor())

  return (
    <Container neonColor={colorSelection.color}
      onClick={() => setColorSelection(getNextColor(colorSelection.index))}>
      <button>
        Glass button
      </button>
    </Container>
  )
}


export default Button3