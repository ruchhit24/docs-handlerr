import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null);
   //things we need
    // desc,filesize,donloadORcross,button?
    const data = [
      {
        "desc" : "Coming back to this a few years later, with newer v ver  ith their icon provider that utilizes the React Context API. This requires React v16.3+",
        "filesize" : "0.4mb",
        "download" : true,
        "button" : {isOpen :true , title : "Download Now" , color : "bg-gradient-to-r from-green-500 to-green-900"}
      },
      {
          "desc" : " er that utilizes the React Context API. This requires React v16.3+",
          "filesize" : "0.8mb",
          "download" : false,
          "button" : {isOpen :false , title : "Download Now" , color : "bg-gradient-to-r from-green-500 to-green-900"}
        }
  ]
  return (
 <>
      <div ref={ref} className='absolute z-[3] w-full h-full p-16 flex gap-10 overflow-hidden'>
          {
            data.map((item,index)=>(
              <Card key={index} data={item} reference={ref}/>
            ))
          }
      </div>
 </>
     
     
  )
}

export default Foreground