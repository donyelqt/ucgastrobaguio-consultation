"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link';

const categoryList1 = [
  {
    name: 'Private Medical Institution',
    imageUrl: 'https://res.cloudinary.com/dkukjsbhp/image/upload/v1709806273/hospital_1_85f61c9680.png'
  },
  {
    name: 'Public Medical Institution',
    imageUrl: 'https://res.cloudinary.com/dkukjsbhp/image/upload/v1709806375/hospital_2_96e580e4a4.png'
  }
];


function CategoryList() {
  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList()
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }
  return (
    <div className='h-screen fixed mt-5 flex flex-col'>
      <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      {categoryList1&&categoryList1.map((item,index)=>(
        <CommandItem>
          <Link href={''}
          className='p-2 flex gap-2 text-[12px] text-green-600 rounded-md cursor-pointer w-full'>
            <img src={item.imageUrl} alt={item.name} width={40} height={40} />
            <label>{item.name}</label>
          </Link>
        </CommandItem>
      ))}
    </CommandGroup>
   
  </CommandList>
</Command>
    </div>
  )
}

export default CategoryList