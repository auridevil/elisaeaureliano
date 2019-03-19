import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import ReactPageScroller from 'react-page-scroller'

import Layout from '../components/layout'
import Image from '../components/image'
import Section from '../components/section'
import { GlobalStyle } from '../styles/main-styles'
// import SEO from '../components/seo'

import { orangered, black, white, grey } from '../data/colors.yaml'
import topo from '../images/topo.svg'

import { HeadSection } from '../sections/HeadSection'

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  render () {
    // <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    console.log('topo', topo)

    return (
      <Layout>
        <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
          <HeadSection />
          <Fragment>
            <Section description={'nice section'} content={'auri e eli'} backgroundColor={grey} index={1} />
          </Fragment>
          <Fragment>
            <Section description={'sezioni molto fighe'} content={'auri e eli'} background={topo} index={2} />
          </Fragment>
        </ReactPageScroller>
        <GlobalStyle />
      </Layout>
    )
  }
}

export default IndexPage
