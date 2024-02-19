import React from 'react'
import { FaFile } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"
const Card = ({data,reference}) => {
    
  return (
    <motion.div 
    drag
     dragConstraints={reference} 
     dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
     dragElastic = {0.1}
      className='relative w-[15vw] h-[38vh] bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl overflow-hidden'>
        <div className='p-4'>
        <FaFile size={25} />
        <p className='pt-6 font-semibold leading-none tracking-tight text-md'>
           {data.desc}
         </p>
        </div>
         
        {data.download ? (
            <div className='flex justify-between p-4'>
            <h2 className='font-semibold leading-none tracking-tight'>{data.filesize}</h2>
             <MdDownload size={23}/>             
        </div>
        ): (
            <div className='absolute bottom-0 flex justify-between p-4 w-full'>
            <h2 className='font-semibold leading-none tracking-tight'>{data.filesize}</h2>
              <span>
              <RxCross2 size={23}/> 
              </span>

            </div>
        )}
        {data.button.isOpen ? (
            <div className='absolute w-full py-4 bg-gradient-to-r from-green-500 to-green-900 bottom-0'>
            <h2 className="text-center font-bold tracking-tight leading-none uppercase"> 
             {data.button.title}
             </h2>
        </div>
        ):null}
    </motion.div>
)
        }

export default Card