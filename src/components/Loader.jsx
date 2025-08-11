import React, { useEffect, useState } from 'react'
import Home from './Home'
import '../index.css'
import loaders from "../assets/loading.svg";
function Loader() {
    const [home, setHome] = useState('')
    const [load, setLoad] = useState(true)
    useEffect(()=> {
        setTimeout(()=> {
            setLoad(false)
            setHome(
                <Home/>
            )
        },2000)
    },[])
    return (
        <>
            <div>
                {
                    load ? ( <div className='xyz h-screen flex justify-center items-center bg-white'>
                        <img className='abc h-[150px] bg-transparent
                        drop-shadow-[0_15px_5px_rgba(0,0,0,0.35)] '  src={loaders} />
                        </div>
                    ): (
                        <div>
                        {home}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Loader
