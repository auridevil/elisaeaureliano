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
        <HeadTitle>elisa & aureliano</HeadTitle>
      </Section>
    )
  }
}

export default HeadSection
