import React from 'react'

import Section from '../components/section'
import { InfoBlock, InfoTitle } from '../styles/detail-styles'
import { secondColor } from '../data/colors.yaml'
import watchIcon from '../images/icons_watch.svg'
import tentIcon from '../images/icons_tent.svg'
import mountainIcon from '../images/icons_mountains.svg'

export class DetailSection extends React.Component {
  render () {
    return (
      <Section backgroundColor={secondColor} index={0}>
        <InfoBlock>
          <img src={watchIcon} />
          <InfoTitle>{'Quando'}</InfoTitle>
          {'21 giugno 2019'}
        </InfoBlock>
        <InfoBlock>
          <img src={mountainIcon} />
          <InfoTitle>{'Dove'}</InfoTitle>
          {'Castello di Fossano'}
        </InfoBlock>
        <InfoBlock>
          <img src={tentIcon} />
          <InfoTitle>{'Chi'}</InfoTitle>
          {'le persone che ci sono più vicine'}
        </InfoBlock>
      </Section>
    )
  }
}

export default DetailSection
