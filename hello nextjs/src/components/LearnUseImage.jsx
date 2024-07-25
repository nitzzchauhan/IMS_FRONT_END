import React from 'react'
import Image from 'next/image'
import imagename from '../../' 

export default function LearnUseImage() {
  return (
    // <div>LearnUseImage</div>
    <Image src={imagename} alt='skmkls' width={200}/>
  )
}
