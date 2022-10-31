import { useState } from "react";
import { AddSpent } from "./AddSpent";

export const MenuBar = () => {
    const [isAdd, setIsAdd] = useState(false)
    const action = (e: boolean) => {
        setIsAdd(e)
    }
    return (
        <>
            {isAdd && 
                <div onClick={()=> setIsAdd(false)} className="w-full min-h-screen  fixed z-[100] top-0 backdrop-blur-sm"></div>
            }
            <div className="bg-white w-full h-11 fixed bottom-0 border-t flex">
                <div onClick={() =>action(true)} className="w-16 h-16 rounded-full bg-primary shadow text-white flex items-center justify-center mx-auto -mt-7 border-4 border-third">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                    {/* <i className='icon-access_alarms'></i> */}
                    {/* <i className="icon-access_time"></i> */}
                </div>
            </div>
            <div className="z-[101] fixed">
                {isAdd && <AddSpent action={action} />}

            </div>
        </>
    );
};