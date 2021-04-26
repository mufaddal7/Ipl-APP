import Head from 'next/head'
import AppBar1 from './../components/HomePage/AppBar'
import TopPost from './../components/HomePage/TopPost'
import React from 'react'
export default function Home() {
  return (
    <>
      <Head>
        <title>BodyWise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<AppBar1/>
<TopPost/>
    </>
  )
}
