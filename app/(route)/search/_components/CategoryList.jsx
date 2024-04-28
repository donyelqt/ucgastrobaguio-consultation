"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'

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
    <div>CategoryList</div>
  )
}

export default CategoryList