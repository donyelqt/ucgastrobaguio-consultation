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
    <div className='mb-10 items-center px-5 flex flex-col gap-2 mt-24'>
        <h2 className='font-bold text-3xl tracking-wide'><span className='text-primary'style={{ fontFamily: '"Lucida Fax Demi", serif' }}>Search hospitals</span><span style={{ fontFamily: '"Lucida Fax Demi", serif' }}> in Baguio City, Philippines</span></h2>
        <h2 className='text-gray-500 text-xl'></h2>

        <div className="flex w-full mt-3 max-w-md items-center space-x-2">
      <Button type="submit" style={{ borderRadius: '20px' }} className="hover:bg-black">
        <Search className='h-4 w-4 mr-1'/>
        Search
      </Button>
      <Input type="text" placeholder="Search Here..."  style={{ borderRadius: '20px' }}/>
    </div>
    <br/>
        <h2 className='font-bold text-2xl tracking-wide'><span className='text-primary'style={{ fontFamily: '"Lucida Fax Demi", serif' }}>Categories</span><span style={{ fontFamily: '"Lucida Fax Demi", serif' }}></span></h2>
        {/* Display List of Category */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
        {categoryList1.length>0?categoryList1.map((item, index) =>index<2&& (
          <div key={index} className='flex 
          flex-col text-center items-center p-4 bg-green-50 m-2 rounded-xl cursor-grab
          gap-2 hover:scale-110 transition-all ease-in-out hover:bg-black'>
            <img src={item.imageUrl} alt={item.name} width={40} height={40} />
            <label className='text-green-600 text-sm'>{item.name}</label>
          </div>
        ))
      :
      [1,2].map((item,index)=>(
        <div className='h-[100px] w-[100px] m-3 bg-slate-200 
        animate-pulse rounded-lg'>
  
        </div>
      ))
     
      }
        </div>
    </div>
  )
}

export default CategorySearch