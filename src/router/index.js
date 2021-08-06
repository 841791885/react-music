import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover = React.lazy((_) => import('@/pages/discover'))
const Artist = React.lazy((_) => import('@/pages/discover/c-pages/artist'))
const Recommend = React.lazy((_) =>
  import('@/pages/discover/c-pages/recommend')
)
const Ranking = React.lazy((_) => import('@/pages/discover/c-pages/ranking'))
const Songs = React.lazy((_) => import('@/pages/discover/c-pages/songs'))
const Djradio = React.lazy((_) => import('@/pages/discover/c-pages/djradio'))
const Album = React.lazy((_) => import('@/pages/discover/c-pages/album'))
const Player = React.lazy((_) => import('@/pages/discover/c-pages/player'))

const Mine = React.lazy((_) => import('@/pages/mine'))
const Friend = React.lazy((_) => import('@/pages/friend'))

const router = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to={'/discover/recommend'} />,
      },
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/ranking',
        component: Ranking,
      },
      {
        path: '/discover/songs',
        component: Songs,
      },
      {
        path: '/discover/djradio',
        exact: true,
        component: Djradio,
      },
      {
        path: '/discover/artist',
        component: Artist,
      },
      {
        path: '/discover/album',
        component: Album,
      },
      {
        path: '/discover/player',
        component: Player,
      },
    ],
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
