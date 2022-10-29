//Ref: https://youtu.be/LSNoRzojcQo
import { useState } from "react"
import { Container } from "./styled"

const colors = ["#1e9bff", "#ff1867", "#6eff3e"]
const Button1: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0)

  const handleClick = () => {
    let nextIndex = colorIndex + 1
    if (nextIndex >= colors.length) {
      nextIndex = 0
    }
    setColorIndex(nextIndex)
  }

  return (
    <Container
      activeColor={colors[colorIndex]}
      onClick={handleClick}
    >
      <span>
        Button
      </span>
      <i></i>
    </Container>
  )
}


export default Button1