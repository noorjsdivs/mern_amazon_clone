import React from 'react'
interface Props {
    title: string;
    listItem: any;
}
export default function FooterMiddleList({title, listItem}:Props) {
  return (
    <div>
      <h3 className='font-semibold text-white text-xl mb-3'>
        {title}
      </h3>
      <ul className='flex flex-col gap-2 text-gray-300'>
        {listItem?.map((item:any)=>
            item.listData.map((data:any)=>(
                <li> {data} </li>
            ))
        )}
      </ul>
    </div>
  )
}
