import React from 'react'
import { SectionBlock, SectionTop, SectionHeader, SectionCTA, SectionContents, SectionTitle, SectionDescription } from '../styles/main-styles.js'

import MarkdownIt from 'markdown-it'

import Texture from './texture'
import SectionIcon from './icon.js'
const md = new MarkdownIt()

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
    {/* {!background && <Texture className="svg-background" width={100} height={100} data={{}} options={{ index }} />} */}

    {/*
    <SectionContents>
      <SectionIcon link={`#section-${ index + 1 }`} iconName={name} />

      <SectionTop>
        <SectionHeader>
          <SectionTitle className="section-title">{title}</SectionTitle>

          {description ? <SectionDescription dangerouslySetInnerHTML={{ __html: md.render(description) }} /> : null}
        </SectionHeader>
        {cta ? <SectionCTA href={cta.url}>{cta.text} ></SectionCTA> : null}
      </SectionTop>
    </SectionContents> */}
    {content || children}
  </SectionBlock>
)

export default Section
