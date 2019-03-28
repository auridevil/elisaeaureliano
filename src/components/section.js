import React from 'react'
import { SectionBlock } from '../styles/main-styles.js'

const Section = ({ title, description, index, background, backgroundColor, cta, children, content }) => (
  <SectionBlock
    id={`section-${ index }`}
    className="section"
    style={{
      backgroundColor,
      ...(background && { backgroundImage: `url(${ background })` })
    }}
    index={index}
  >
    {content || children}
  </SectionBlock>
)

export default Section
