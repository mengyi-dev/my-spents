// @flow 
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spentAction } from '../store/spent-slice';
import dateFormat from 'dateformat';
import { useLongPress } from 'use-long-press';
export const SpentList = () => {
    let spents = useSelector((state: any) => state.spents)
    const allSpents = spents.spents
    let [isEdit, setIsEdit] = useState(false)
    let num = 0
    const [number, setNumber] = useState(0)
    
    const dispatcher = useDispatch()
    const formateData = (date) => {
        return dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
    }

    const bind = useLongPress(() => {
        setIsEdit(!isEdit)
        console.log('Long pressed!');
    });

    useEffect(() => {
        dispatcher(spentAction.refreshData())
    }, [])
    return (
        <div className='bg-third absolute top-[35%] w-full left-0 z-0 p-4'>
            <h1 className='font-bold mt-[35%]'>Filter</h1>
            <div className='font-bold flex items-center gap-4 mt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
                </svg>
                <div className='text-primary bg-green-100 max-w-[100px] px-3 py-1 rounded-full text-center text-xs'>Expenses</div>
                <div className='text-gray-500 bg-gray-200 max-w-[100px] px-3 py-1 rounded-full text-center text-xs'>Incomes</div>
            </div>
            <div>
                <div className='w-full'>
                    {allSpents ? allSpents.map((spent: any)=>{
                        return (
                            // onClick={() => dispatcher(spentAction.removeData(spent.id))}
                            <div>
                                <div key={spent.id} {...bind()}  className='mt-5 flex-shrink-0 bg-white rounded-xl flex justify-between items-center pr-6 p-1 relative'>
                                    <div className='flex gap-3 items-center'>
                                        <div className='text-primary bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl'>
                                            <i className={`icon-${spent.type} text-4xl`}></i>
                                        </div>
                                        <div className='leading-7'>
                                            <h2 className='font-bold text-sm'>{spent.title}</h2>
                                            <p className='text-[9px]'>{formateData(spent.date)}</p>
                                        </div>
                                    </div>
                                    <span className='font-bold text-xs text-primary'>$ {spent.amount}</span>
                                    {isEdit &&
                                        <div onClick={() => dispatcher(spentAction.removeData(spent.id))} className={`bg-red-500 absolute right-0 w-2/12 h-full rounded-r-xl items-center justify-center text-white flex slide-fwd-center`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
                                                <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                                            </svg>
                                        </div>
                                    }
                                </div>

                            </div>
                        )
                    }): null}
                </div>
            </div>
        </div>
    );
};