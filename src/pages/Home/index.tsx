import Button1 from "../../components/buttons/Button1"
import Button2 from "../../components/buttons/Button2"
import Button3 from "../../components/buttons/Button3"
import Button4 from "../../components/buttons/Button4"
import Button5 from "../../components/buttons/Button5"
import ComponentCanvas from "../../components/ComponentCanvas"
import { Container } from "./styled"


const Home: React.FC = () => {

  return (
    <Container>
      <ComponentCanvas component={<Button1 />} />
      <ComponentCanvas component={<Button2 />} />
      <ComponentCanvas component={<Button3 />} />
      <ComponentCanvas component={<Button4 />} />
      <ComponentCanvas component={<Button5 />} />
    </Container>
  )
}

export default Home