import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export default function Navbar() {
    return (
      <header className="fixed top-0 w-full bg-primaryG  z-50">
      <div  className="max-w-5xl bg-primaryG  mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">

        <Image
              priority
              src="/images/solana-logo.jpg"
              className='borderCircle'
              height={50}
              width={50}
              alt={'solana-image'}
            />
          <Link href='/' >
          <a className="mx-auto md:ml-2 text-charc text-xl">Solana Balance Checker</a> 
          </Link>
        </div>
      </div>
    </header>
    );
  }