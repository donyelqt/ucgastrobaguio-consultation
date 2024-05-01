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
    <div className='h-screen'>
  <Command>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <button className="w-full hover:bg-green-300 bg-slate-50" onClick={() => alert('Calendar clicked!')}>
          <CommandItem>Calendar</CommandItem>
        </button>
        <button className="w-full hover:bg-green-300 bg-slate-50" onClick={() => alert('Search Emoji clicked!')}>
          <CommandItem>Search Emoji</CommandItem>
        </button>
        <button className="w-full hover:bg-green-300 bg-slate-50" onClick={() => alert('Calculator clicked!')}>
          <CommandItem>Calculator</CommandItem>
        </button>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <button className="w-full hover:bg-green-300 bg-slate-50" onClick={() => alert('Profile clicked!')}>
          <CommandItem>Profile</CommandItem>
        </button>
        <button className="w-full hover:bg-green-300 bg-slate-50" onClick={() => alert('Billing clicked!')}>
          <CommandItem>Billing</CommandItem>
        </button>
        <button className="w-full hover:bg-green-300 bg-slate-50" onClick={() => alert('Settings clicked!')}>
          <CommandItem>Settings</CommandItem>
        </button>
      </CommandGroup>
    </CommandList>
  </Command>
</div>
  )
}

export default CategoryList