import React from 'react'
import Link from "next/link"


export default function Custom404() {
    return <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
               <div className="max-w-md">
                  <div className="text-5xl font-dark font-bold text-black">404</div>
                <p
                  className="text-2xl mb-3 text-black md:text-3xl font-light leading-normal"
                >Page not found</p>
             
              
                 <Link href='/'>
                     
                     <a className="hover:no-underline   text-lg underline font-medium leading-5  text-black">back to homepage</a>
                     
              </Link>
              
        </div>
      </div>
    
  }