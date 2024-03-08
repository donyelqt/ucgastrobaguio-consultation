import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Services',
            path: '/'
        },
        {
            id: 3,
            name: 'Hospitals',
            path: '/'
        },
    ];
    return (
        <div className='flex items-center justify-between p-4 shadow-lg'>
            <div className='flex items-center gap-4 mx-10'>
                <Image src='/uclogonew.png' alt="logo"
                    width={80} height={80} style={{ margin: '0 20px' }}
                />
            </div>
            <div className="flex items-center gap-8">
                <ul className='md:flex gap-4 hidden mx-1'>
                    {Menu.map((item, index) => (
                        <Link href={item.path} key={item.id}>
                            <li className='hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out' style={{ margin: '0 20px' }}>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
                <Button className='mx-10 hover:bg-black' style={{ borderRadius: '20px', marginLeft: '20px' }}>Log In Now Here!</Button>
            </div>
        </div>
    );
}

export default Header;
