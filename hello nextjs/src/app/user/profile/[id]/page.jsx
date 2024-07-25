import React from 'react'

export default function profileid({ params }) {
    console.log(params)
    const id = params.id
  return (
    <div>params {params.id}</div>
  )
}
