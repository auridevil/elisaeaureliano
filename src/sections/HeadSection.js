import React from 'react'

import Section from '../components/section'

import { orangered, black, white, grey } from '../data/colors.yaml'
import { HeadTitle } from '../styles/head-styles'
import topo from '../images/topo.svg'

export class HeadSection extends React.Component {
  render () {
    console.log('topo', topo)

    return (
      <Section background={topo} backgroundColor={orangered} index={0}>
        <div>logo qui</div>
        <HeadTitle>elisa & aureliano</HeadTitle>
        <div>si sposano</div>
      </Section>
    )
  }
}

export default HeadSection
