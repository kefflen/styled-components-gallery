//Ref: https://youtu.be/KnYwz3ksW7E
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Container, IconButton, InputContainer, LabelText, StyledIcon, StyledInput } from "./styled"

const Input2: React.FC = () => {
  const [text, setText] = useState('Teste')
  const [currentText, setCurrentText] = useState('')
  const [onVisualize, setOnVisualize] = useState(true)

  useEffect(() => {
    setCurrentText(text)
  }, [])

  return (
    <Container>
      <InputContainer>
        <StyledInput
          disabled={onVisualize}
          type={'text'}
          required
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <LabelText>First name</LabelText>
        <StyledIcon></StyledIcon>
      </InputContainer>
      {onVisualize ? (
        <IconButton onClick={() => setOnVisualize(false)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </IconButton>
      ) : (
        <>
          <IconButton
            onClick={() => {
              setCurrentText(text)
              setOnVisualize(true)
            }}
          >
            <FontAwesomeIcon icon={'check'} />
          </IconButton>
          <IconButton
            onClick={() => {
              setText(currentText)
              setOnVisualize(true)
            }}
          >
            <FontAwesomeIcon icon={'xmark'} />
          </IconButton>
        </>
      )}
    </Container>
  )
}

export default Input2