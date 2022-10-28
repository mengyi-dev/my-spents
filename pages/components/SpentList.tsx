// @flow 
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spentAction } from '../store/spent-slice';
import dateFormat from 'dateformat';

import { AddSpent } from './AddSpent';
type Props = {
    
};
export const SpentList = () => {
    let spents = useSelector(state => state.spents)
    const allSpents = spents.spents
    
    const dispatcher = useDispatch()
    const formateData = (date) => {
        return dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
    }

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
                <div className='w-full pb-10'>
                    {allSpents ? allSpents.map((spent: any)=>{
                        return (
                            <div key={spent.id} className='mt-5 flex-shrink-0 bg-white rounded-xl flex justify-between items-center pr-6 p-1'>
                                <div className='flex gap-3 items-center'>
                                    <div className='text-primary bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className='leading-7'>
                                        <h2 className='font-bold text-sm'>{spent.title}</h2>
                                        <p className='text-[9px]'>{formateData(spent.date)}</p>
                                    </div>
                                </div>
                                <span className='font-bold text-xs text-primary'>$ {spent.amount}</span>
                            </div>
                        )
                    }): null}
                </div>
            </div>
        </div>
    );
};