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
    <div className="flex min-h-screen flex-col items-center justify-center bg-third font-gilroy">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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

