import React from 'react'
import Link from 'next/link'

const Navigations = () => {
   return (
      <>
         <ul>
            <li>
               <Link href="/">Index</Link>
            </li>
            <li>
               <Link href="/services">Services</Link>
            </li>
            <li>
               <Link href="/about">About</Link>
            </li>
         </ul>
      </>
   )
}

export default Navigations