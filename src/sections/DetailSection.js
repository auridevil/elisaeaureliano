import React from 'react'

import Section from '../components/section'
import { IconImg, InfoBlock, InfoTitle } from '../styles/detail-styles'
import { secondColor } from '../data/colors.yaml'
import watchIcon from '../images/icons_watch.svg'
import tentIcon from '../images/icons_tent.svg'
import mountainIcon from '../images/icons_mountains.svg'

export class DetailSection extends React.Component {
  render () {
    return (
      <Section backgroundColor={secondColor} index={0}>
        <InfoBlock>
          <IconImg src={watchIcon} />
          <InfoTitle>{'Quando'}</InfoTitle>
          {'21 giugno 2019'}
        </InfoBlock>
        <InfoBlock>
          <IconImg src={mountainIcon} />
          <InfoTitle>{'Dove'}</InfoTitle>
          {'Castello di Fossano'}
        </InfoBlock>
        <InfoBlock>
          <IconImg src={tentIcon} />
          <InfoTitle>{'Chi'}</InfoTitle>
          {'le persone che ci sono più vicine'}
        </InfoBlock>
      </Section>
    )
  }
}

export default DetailSection
