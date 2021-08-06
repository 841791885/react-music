import React, { useEffect } from 'react'

import request from '@/services/axios.js'

import {} from './style'

export default function TopBanner() {
  useEffect(() => {
    request({
      url: '/banner',
    }).then(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  })
  return <div>TopBanner</div>
}
