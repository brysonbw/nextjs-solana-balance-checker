import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'


type Props = {
    children?: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <>
    <Head>
    <link rel="icon" href="/solana-logo.ico" />
   
<title>Solana Balance Checker</title>
<meta name="title" content="Solana Balance Checker"/>
<meta name="description" content="Solana Balance Checker"/>


    </Head>
    {/** Navbar */}
    <Navbar />
    {/** Main */}
    <main>
        <Toaster />
        {children}
    </main>
   
    </>
  )
}