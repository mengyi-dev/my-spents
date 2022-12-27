import type { NextPage } from 'next'
import Head from 'next/head'
import { SpentType } from './enum'
import { StartApp } from './components/StartApp'
import { useEffect, useState } from 'react'
import { Layout } from './components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { spentAction } from './store/spent-slice'
import { ProgressBar } from './components/ProgressBar'
import { SpentList } from './components/SpentList'
import { MenuBar } from './components/MenuBar'

const Home: NextPage = () => {
  const dispatcher = useDispatch()
    let test = 
        {
          id: 1,
          title: 'Go Shopping',
          type: SpentType.SHOPING,
          amount: 100,
          date: new Date().toString()
        }
  const [isStart, setStart] = useState<Boolean>(false)
  const updateStart = (action: boolean): void =>{
    setStart(action)
  }
  useEffect(() => {
    dispatcher(spentAction.refreshData())
  }, [])
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center bg-third font-gilroy">
      <Head>
        <title>My Spent</title>
        <meta name="description" content='My spent app, manage your money' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/myspent.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#911b1e"/>
        <link rel="apple-touch-icon" href="/icon-256x256.png"></link>
      </Head>
      {isStart && <Layout>
        <ProgressBar />
        <SpentList />
        <MenuBar />
      </Layout>}
      
      <StartApp action={updateStart} />
    </div>
  )
}

export default Home

