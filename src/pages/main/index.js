import React, { memo, Suspense } from 'react'

/**
 * BrowserRouter是history模式
 *Hashrouter是hash模式 选一个使用
 */
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

import routes from '@/router'

export default memo(function Main() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </Suspense>
    </BrowserRouter>
  )
})
