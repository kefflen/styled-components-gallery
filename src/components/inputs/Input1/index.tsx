//Ref: https://youtu.be/KnYwz3ksW7E
import { useState } from 'react'
import { Container, LabelText, StyledIcon, StyledInput } from "./styled"


// const SampleProps: React.FC<
// StyledComponentProps<"input", DefaultTheme, {}, never>
//  & {ref: React.RefObject<HTMLInputElement>}
//  > = () => null

const Input1: React.FC = () => {
  const [text, setText] = useState('')
  return (
    <Container>
      <StyledInput
        type={'text'}
        required
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <LabelText>First name</LabelText>
      <StyledIcon></StyledIcon>
    </Container>
  )
}

export default Input1