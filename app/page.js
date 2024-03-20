"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import HospitalList from "./_components/HospitalList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {

  const [hospitalList,setHospitalList]=useState([]);
  useEffect(()=>{
    getHospitalList();
  },[])
  const getHospitalList=()=>{
    GlobalApi.getHospitalList().then(resp=>{
      console.log(resp.data.data);
      setHospitalList(resp.data.data);
    })
  }
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Search bar + Categories */}
      <CategorySearch />

      {/* Hospital List */}
      <HospitalList hospitalList={hospitalList} />
    </div>
  );
}
