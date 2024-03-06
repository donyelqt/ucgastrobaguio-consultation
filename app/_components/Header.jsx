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
    <div className='flex items-center justify-between p-4 shadow-md'>
        <div className='flex items-center gap-10'>
            <Image src='/uclogonew.png' alt="logo" 
            width={70} height={70}
            />
           <ul className='md:flex gap-8 hidden'>
               {Menu.map((item,index)=>(
                   <Link href={item.path}>
                   <li className='hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out'>{item.name}</li>
                   </Link>
               ))}
           </ul>
        </div>
        <Button>Log In Now Here!</Button>
    </div>
  )
}

export default Header 