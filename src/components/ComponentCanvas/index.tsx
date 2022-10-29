import { Container } from "./styled"

type ComponentCanvasProps = {
  component: React.ReactNode
}

const ComponentCanvas: React.FC<ComponentCanvasProps> = ({
  component
}) => {
  return (
    <Container>
      {component}
    </Container>
  )
}


export default ComponentCanvas