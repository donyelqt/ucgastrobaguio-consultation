"use client";

import React, { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MapPinned, Search, SearchCheckIcon } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'

function CategorySearch() {

  useEffect(()=>{
    getCategoryList()
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
    })
  }
  return (
    <div className='mb-10 items-center flex flex-col gap-2 mt-24'>
        <h2 className='font-bold text-4xl tracking-wide'><span className='text-primary'style={{ fontFamily: '"Lucida Fax Demi", serif' }}>Search Hospitals</span><span style={{ fontFamily: '"Lucida Fax Demi", serif' }}> in Baguio City, Philippines</span></h2>
        <h2 className='text-gray-500 text-xl'></h2>

        <div className="flex w-full mt-3 max-w-md items-center space-x-2">
      <Input type="text" placeholder="Search Now Here!!!" style={{ borderRadius: '20px' }}/>
      <Button type="submit" style={{ borderRadius: '20px' }} className="hover:bg-black">
        <SearchCheckIcon className='h-4 w-4 mr-1'/>
        Search</Button>
    </div>
    </div>
  )
}

export default CategorySearch