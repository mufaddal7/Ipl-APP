import Head from 'next/head'
import AppBar1 from './../components/HomePage/AppBar'
import TopPost from './../components/HomePage/TopPost'
import CTA from './../components/HomePage/CTA'
import React from 'react'
export default function Home() {
  return (
    <>
      <Head>
        <title>BodyWise</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
<AppBar1/>
<TopPost/>
<CTA/>
    </>
  )
}
