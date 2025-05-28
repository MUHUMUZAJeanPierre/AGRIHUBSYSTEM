import React from 'react'
import { PiToggleLeftFill } from "react-icons/pi";
import { IoToggleSharp } from "react-icons/io5";

const Setting = () => {
    return (
        <div className='p-10 flex flex-col gap-5 bg-[#f2f2f2]'>
            <strong className='text-xl'>WEBSITE INFORMATION</strong>
            <div className='flex gap-20'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <strong>Version:</strong>
                        <p>1.0</p>
                    </div>
                    <div>
                        <strong>Base number:</strong>
                        <p>ANFO99E2U7B23IH</p>
                    </div>
                    <div>
                        <strong>Kernel version:</strong>
                        <p>4.12.2088-3221-56sgu782984u04</p>
                        <p>#1 jun 10:45:18 Kigali 2024</p>
                    </div>
                    <div>
                        <strong>Build number:</strong>
                        <p>TP03u3it2r1r3u.3455.aaxdkw</p>
                    </div>
                    <div>
                        <strong>Security version:</strong>
                        <p>OPTP v2.0 Release 387628</p>
                        <p>NEIS v1.2 Release 936872</p>
                        <p>VTH Release 183473</p>
                    </div>
                    <div>
                        <strong>Build number:</strong>
                        <p>TP03u3it2r1r3u.3455.aaxdkw</p>
                    </div>
                    <div>
                        <strong>Build number:</strong>
                        <p>TP03u3it2r1r3u.3455.aaxdkw</p>
                    </div>
                </div>
                <div className='w-[30rem]'>
                    <div className='mb-5'>
                        <strong>Permission</strong>
                    </div>
                    <div className='fle flex-col gap-2'>
                        <p className='text-xl mb-2'>FARMERS</p>
                        <div className='flex items-center justify-between'>
                            <p>Add cooperative member </p>
                            <IoToggleSharp className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Delete cooperative Member </p>
                            <PiToggleLeftFill className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Switch account </p>
                            <PiToggleLeftFill className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Adding crops </p>
                            <IoToggleSharp className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Delete crops </p>
                            <IoToggleSharp className='text-3xl'/>
                        </div>
                    </div>
 
                    {/* BUYERS  */}

                    <div className='fle flex-col gap-2 mt-5'>
                        <p className='text-xl mb-2'>BUYERS</p>
                        <div className='flex items-center justify-between'>
                            <p>Add new account </p>
                            <IoToggleSharp className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Switch account </p>
                            <IoToggleSharp className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Delete cooperative </p>
                            <PiToggleLeftFill className='text-3xl'/>
                        </div>
                        
                    </div>

                    {/* GOVERNMENT  */}

                    <div className='fle flex-col gap-2 mt-5'>
                        <p className='text-xl mb-2'>GOVERNMENT</p>
                        <div className='flex items-center justify-between'>
                            <p>Add cooperative </p>
                            <PiToggleLeftFill className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Delete cooperative </p>
                            <PiToggleLeftFill className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>View cooperative orders </p>
                            <IoToggleSharp className='text-3xl'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>calculate cooperative tax based on sales </p>
                            <IoToggleSharp className='text-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Setting