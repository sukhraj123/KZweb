import Link from 'next/link'
import React from 'react'

function Back() {
  return (
    <div>
        <div className="text-orange-500 text-4xl py-5"><Link href="/api/exit-preview" > Back</Link></div>
    </div>
  )
}

export default Back