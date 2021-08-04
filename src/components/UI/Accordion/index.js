import React, { useState } from 'react'
import {
  AccordionContainer,
  AccordionTitle,
  AccordionExcerpt,
  AccordionContent,
  AccordionQuestion,
  AccordionQuestionTitle,
  AccordionQuestionBody,
} from './styles'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const Accordion = (props) => {
  const { title, excerpt, items, className, style } = props
  const [step, setStep] = useState(0)

  return (
    <AccordionContainer
      style={style}
      className={
        className ? `${className} AccordionContainer` : 'AccordionContainer'
      }
    >
      {title && (
        <AccordionTitle elementTheme="h5 bold" className="AccordionTitle">
          {title}
        </AccordionTitle>
      )}
      {excerpt && (
        <AccordionExcerpt className="AccordionExcerpt">
          {excerpt}
        </AccordionExcerpt>
      )}
      {items?.length > 0 && (
        <AccordionContent className="AccordionContent">
          {items?.map((item, index) => {
            const options = {
              renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return children
                },
              },
            }
            const body = item?.bodyLong?.raw
              ? documentToReactComponents(
                  JSON.parse(item?.bodyLong?.raw),
                  options
                )
              : item?.body

            return (
              <AccordionQuestion
                key={item.id}
                onClick={() => setStep(index)}
                isActive={step === index}
                numbersOfStep={items.length - 1}
                className="AccordionQuestion"
                role="button"
              >
                {item?.title && (
                  <AccordionQuestionTitle
                    elementTheme="semi-bold"
                    className="AccordionQuestionTitle"
                  >
                    {item.title}
                  </AccordionQuestionTitle>
                )}
                {body && (
                  <SlideDown>
                    {step === index && (
                      <AccordionQuestionBody className="AccordionQuestionBody">
                        {body}
                      </AccordionQuestionBody>
                    )}
                  </SlideDown>
                )}
              </AccordionQuestion>
            )
          })}
        </AccordionContent>
      )}
    </AccordionContainer>
  )
}

export default Accordion
