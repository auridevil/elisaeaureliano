import React, { Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'

import { GlobalStyle } from '../styles/main-styles'

import { DetailSection } from '../sections/DetailSection'
import { DinnerSection } from '../sections/DinnerSection'
import { FootSection } from '../sections/FootSection'
import { HeadSection } from '../sections/HeadSection'

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stickyNav: false
    }
  }

  render () {
    // <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    return (
      <Fragment>
        <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
          <HeadSection />
          <DetailSection />
          <DinnerSection />
          <FootSection />
        </ReactPageScroller>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default IndexPage
