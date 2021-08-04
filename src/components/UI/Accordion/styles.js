import styled from 'styled-components'
import Typography from 'components/UI/Typography'

export const AccordionContainer = styled.div`
  padding: 50px 45px 25px;
  background: white;
  border-radius: 10px;

  @media (max-width: 700px) {
    padding: 30px 0 25px;
    background: transparent;
  }

  .react-slidedown {
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
`

export const AccordionTitle = styled(Typography)`
  margin-bottom: 30px;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`

export const AccordionExcerpt = styled(Typography)`
  margin-bottom: 50px;
`

export const AccordionContent = styled.div``

export const AccordionQuestion = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`

export const AccordionQuestionTitle = styled(Typography)`
  padding-bottom: 20px;
`

export const AccordionQuestionBody = styled(Typography)`
  padding-bottom: 20px;
`
