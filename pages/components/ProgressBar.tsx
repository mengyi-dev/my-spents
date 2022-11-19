import { useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
export const ProgressBar = () => {
    const [income, setIncome] = useState<Number>(290)
    let spents = useSelector(state => state.spents)
    function getOnlyNumberFromObj(): number {
        let number: number = 0
        spents.spents.map((spent)=>{
            if(spent.amount){
                number += parseInt(spent.amount)
            }
        })
        return number
      }
      
    function getNumberOfPercentage(){
        return getOnlyNumberFromObj() / parseInt(income) * 100 
    }
    console.log(getNumberOfPercentage());
    
    return (
        <div className='rounded-b-3xl bg-white sticky z-10 px-4 max-w-5xl mx-auto'>
            <div className="relative flex text-primary">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-2 bg-third pl-10 w-full text-sm rounded-lg placeholder-primary outline-none" placeholder="Search " required />
            </div>
            <div className="mt-2 font-bold flex items-center space-x-4">
                <h2>Expenses on</h2>
                <div className="text-primary">
                    <span>&lt; </span>
                    2 aug
                    <span> &gt;</span>
                </div>
            </div>
            
            <div className='w-8/12 mx-auto mt-6 pb-7'>
                <CircularProgressbarWithChildren value={getNumberOfPercentage()} 
                    styles={{
                        path: {
                            stroke: `#51de9a`,
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                        },
                    }}
                    strokeWidth={3}
                >
                    <div className='text-center text-primary font-bold'>
                        <h1 className='text-2xl'>${getOnlyNumberFromObj()}</h1>
                        <p className='text-xs'>Of all incomes ${income}</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
};