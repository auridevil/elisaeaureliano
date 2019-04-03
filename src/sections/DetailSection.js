import React from 'react'

import { Description, IconImg, InfoBlock, InfoTitle, Pane, PaneRow, SubDescription, TitleSection, Underline, WhoBlock } from '../styles/detail-styles'
import watchIcon from '../images/icons_watch.svg'
import tentIcon from '../images/icons_tent.svg'
import mountainIcon from '../images/icons_mountains.svg'

export class DetailSection extends React.Component {
  render () {
    return (
      <Pane>
        <WhoBlock>
          <TitleSection>
            <IconImg src={tentIcon} />
            <InfoTitle>{'Chi'}</InfoTitle>
            <Underline />
          </TitleSection>
          <Description>{'Le persone che ci sono più care'}</Description>
          <SubDescription>{'famiglia e amici'}</SubDescription>
        </WhoBlock>
        <PaneRow>
          <InfoBlock>
            <TitleSection>
              <IconImg src={watchIcon} />
              <InfoTitle>{'Quando'}</InfoTitle>
              <Underline />
            </TitleSection>
            <Description>{'Giugno 21, 2019'}</Description>
            <SubDescription>{'Un venerdì'}</SubDescription>
          </InfoBlock>
          <InfoBlock>
            <TitleSection>
              <IconImg src={mountainIcon} />
              <InfoTitle>{'Dove'}</InfoTitle>
              <Underline />
            </TitleSection>
            <Description>{'Fossano (CN)'}</Description>
            <SubDescription>{'Al castello degli acaja'}</SubDescription>
          </InfoBlock>
        </PaneRow>
      </Pane>
    )
  }
}

export default DetailSection
