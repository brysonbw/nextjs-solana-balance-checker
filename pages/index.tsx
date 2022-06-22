import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import * as Web3 from '@solana/web3.js'
import { useState } from 'react'
import AddressForm from '../components/AddressForm'
import toast from 'react-hot-toast'

const Home: NextPage = () => {
  const [balance, setBalance] = useState(0)
  const [address, setAddress] = useState('')

  const addressSubmittedHandler = (address: string) => {
    try {
      setAddress(address)
      const key = new Web3.PublicKey(address)
      const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
      connection.getBalance(key).then(balance => {
        setBalance(balance / Web3.LAMPORTS_PER_SOL)
      })
    } catch (error: any) {
      setAddress('')
      setBalance(0)
     toast.error(error.toString())
    }
  }

  const clearAddressAndBal = () => {
    setAddress('')
    setBalance(0)
  }

  return (
    <Layout>
      <Head>
        <title>Solana Balance Checker | Home</title>
      </Head>

      <div className="max-w-screen-sm mx-auto p-10 my-24">
      <p className="text-2xl">
          Check your solana balance
        </p>
        <p>*Devnet Network*</p>
        <AddressForm handler={addressSubmittedHandler} clearAddressAndBal={clearAddressAndBal}  />
        <div className='md:my-0 my-7'>
        <p className='mb-3'>{`Address: ${address}`}</p>
        <p>{`Balance: ${balance} SOL`}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
