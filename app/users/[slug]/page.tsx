"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Page() {
    const search = useSearchParams(); 
    const userName = search.get('name');
    console.log(userName);
    
  return (
    <div>
      trang chi tiết user
    </div>
  )
}
