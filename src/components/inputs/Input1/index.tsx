//Ref: https://youtu.be/KnYwz3ksW7E
import { Container, LabelText, StyledIcon, StyledInput } from "./styled"


// const SampleProps: React.FC<
// StyledComponentProps<"input", DefaultTheme, {}, never>
//  & {ref: React.RefObject<HTMLInputElement>}
//  > = () => null

const Input1: React.FC = () => {
  return (
    <Container>
      <StyledInput
        type={'text'}
        required
      />
      <LabelText>First name</LabelText>
      <StyledIcon></StyledIcon>
    </Container>
  )
}

export default Input1