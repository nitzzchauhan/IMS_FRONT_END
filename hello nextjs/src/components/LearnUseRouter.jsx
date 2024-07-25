import React from 'react'
import { useRouter } from 'next/navigation'

export default function LearnUseRouter() {
  const router = useRouter()
  console.log("Router", router)
    return (
    <div>
        <h1>User Router</h1>
        <button type="button" onClick={()=>{router.push('/admin/dashboard')}}>Go to Admin Dashboard </button>

    </div>
  )
}
