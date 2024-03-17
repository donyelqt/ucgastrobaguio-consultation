"use client";

import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MapPinned, Search, SearchCheckIcon } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image';

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

function CategorySearch() {

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
    <div className='mb-10 items-center flex flex-col gap-2 mt-24'>
        <h2 className='font-bold text-4xl tracking-wide'><span className='text-primary'style={{ fontFamily: '"Lucida Fax Demi", serif' }}>Search Hospitals</span><span style={{ fontFamily: '"Lucida Fax Demi", serif' }}> in Baguio City, Philippines</span></h2>
        <h2 className='text-gray-500 text-xl'></h2>

        <div className="flex w-full mt-3 max-w-md items-center space-x-2">
      <Input type="text" placeholder="Search Now Here!!!" style={{ borderRadius: '20px' }}/>
      <Button type="submit" style={{ borderRadius: '20px' }} className="hover:bg-black">
        <SearchCheckIcon className='h-4 w-4 mr-1'/>
        Search</Button>
    </div>

        {/* Display List of Category */}
        <div className='grid grid-cols-2'>
        {categoryList1.map((item, index) =>index<2&& (
          <div key={index} className='flex 
          flex-col text-center items-center p-4 bg-green-50 m-2 rounded-xl
          gap-2'>
            <img src={item.imageUrl} alt={item.name} width={40} height={40} />
            <label className=''>{item.name}</label>
          </div>
        ))}
        </div>
    </div>
  )
}

export default CategorySearch