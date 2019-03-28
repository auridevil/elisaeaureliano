import React from 'react'

import Section from '../components/section'
import { secondColor } from '../data/colors.yaml'

export class DetailSection extends React.Component {
  render () {
    return (
      <Section backgroundColor={secondColor} index={0}>
        <div>(logo) Quando: 21 giugno 2019</div>
        <div>(logo) Dove: Castello di Fossano </div>
        <div>(logo) Chi: con le persone che ci sono più vicine</div>
        <div>si sposano</div>
      </Section>
    )
  }
}

export default DetailSection
