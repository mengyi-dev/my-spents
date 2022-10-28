import Image from 'next/image'
import { useState } from 'react';
import startImage from '../../public/assets/savemoney.svg'
export const StartApp = ({action}: any) => {
    const [isClose, setisClose] = useState(false)
    const submit = () => {
        setisClose(true)       
        action(true)       
    }
    return (
        <main className={`'mt-[40%] overflow-x-none bg-third w-full z-[100] sticky flex items-center justify-center' ${isClose && 'slide-out-elliptic-top-bck'}`}>
            <div className='w-full flex justify-center'>
                <Image src={startImage} width={300} className='slide-top' />
            </div>
            <div className='bg-white fixed top-[90%] left-0 min-h-full rounded-t-3xl text-center w-full flex flex-col items-center space-y-4 py-4 overflow-none slide-top'>
                <h1 className='font-gilroyBold text-2xl'>Spending tracker</h1>
                <div className='text-xs font-bold w-6/12'>Save your money with conscius spending</div>
                <div onClick={submit} className='bg-primary text-white min-w-[250px] rounded-3xl p-2 px-7 text-xl font-bold'>Let's start!</div>
            </div>
      </main>
    );
};