import React from 'react'
// import { Redirect } from 'react-router-dom'

const Discover = React.lazy((_) => import('@/pages/discover'))
const Mine = React.lazy((_) => import('@/pages/mine'))
const Friend = React.lazy((_) => import('@/pages/friend'))

const router = [
  {
    path: '/',
    exact: true,
    component: Discover,
    // render: () => <Redirect to="/page1" />,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/friend',
    component: Friend,
  },
]

export default router
