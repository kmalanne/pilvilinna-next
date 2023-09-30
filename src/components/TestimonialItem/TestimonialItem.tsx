import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'
import styled from 'styled-components'

export interface ITestimonialItemProps {
  author: string
  text: string
}

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 20px;
  }

  @media (max-width: 578px) {
    flex-direction: column;

    svg {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`

const Statement = styled.div`
  font-size: 22px;
  color: #ffffff;

  @media (max-width: 578px) {
    margin-bottom: 40px;
  }
`

const Author = styled.div`
  margin-top: 10px;
  font-weight: 600;
`

export const TestimonialItem: React.FC<ITestimonialItemProps> = (props: ITestimonialItemProps) => {
  const { author, text } = props

  return (
    <Item aria-label="testimonial_item">
      <FontAwesomeIcon icon={faUserCircle} size="4x" inverse></FontAwesomeIcon>
      <Statement>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <Author>{author}</Author>
      </Statement>
    </Item>
  )
}
