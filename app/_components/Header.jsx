import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    const Menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:1,
            name:'Services',
            path:'/'
        },
        {
            id:1,
            name:'Hospitals',
            path:'/'
        },
    ]
  return (
    <div className='flex items-center justify-between p-4 shadow-lg'>
        <div className='flex items-center gap-10 mx-8'>
            <Image src='/uclogonew.png' alt="logo" 
            width={80} height={80}
            />
           <ul className='md:flex gap-8 hidden mx-8'>
               {Menu.map((item,index)=>(
                   <Link href={item.path}>
                   <li className='hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out'>{item.name}</li>
                   </Link>
               ))}
           </ul>
        </div>
    </div>
  )
}

export default Header 