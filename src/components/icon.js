import React from 'react'
import { IconBlock, Icon } from '../styles/main-styles.js'

import icons from '../data/icons.yaml'

const SectionIcon = ({ link, iconName }) => {
  return (
    <IconBlock className="section-icon">
      <Icon>
        <span
          dangerouslySetInnerHTML={{
            __html: icons ? icons[iconName] : 'noicons',
          }}
        />
      </Icon>
    </IconBlock>
  )
}

export default SectionIcon
