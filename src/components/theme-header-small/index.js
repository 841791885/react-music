import React, { memo } from 'react'

import { HeaderWrapper } from './style'
export default (function ThemeHeaderSmall(props) {
  const { title = '测试样式', more = '' } = props
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  )
})
