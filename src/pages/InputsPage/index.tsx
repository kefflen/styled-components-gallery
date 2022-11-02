import ComponentCanvas from "../../components/ComponentCanvas"
import Input1 from "../../components/inputs/Input1"
import Input2 from "../../components/inputs/Input2"
import { Container } from "./styled"


export const InputPage: React.FC = () => {


  return (
    <Container>
      <ComponentCanvas component={<Input1 />} />
      <ComponentCanvas component={<Input2 />} />
    </Container>
  )
}

export default InputPage

