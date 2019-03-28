import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import ReactPageScroller from 'react-page-scroller'

import Section from '../components/section'
import { GlobalStyle } from '../styles/main-styles'
// import SEO from '../components/seo'

import { grey } from '../data/colors.yaml'

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
          <Fragment>
            <Section description={'nice section'} content={'auri e eli'} backgroundColor={grey} index={1} />
          </Fragment>
          <Fragment>
            <Section description={'sezioni molto fighe'} content={'auri e eli'} index={2} />
          </Fragment>
        </ReactPageScroller>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default IndexPage
