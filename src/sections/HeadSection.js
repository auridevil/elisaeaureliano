import React from 'react'

import Section from '../components/section'

import { mainColor } from '../data/colors.yaml'
import { HeadSubtitle, HeadTitle } from '../styles/head-styles'
import topo from '../images/topo.svg'

export class HeadSection extends React.Component {
  render () {
    console.log('topo', topo)

    return (
      <Section background={topo} backgroundColor={mainColor} index={0}>
        <div>logo qui</div>
        <HeadTitle>elisa & aureliano</HeadTitle>
        <HeadSubtitle>si sposano</HeadSubtitle>
      </Section>
    )
  }
}

export default HeadSection
