import Image from 'next/image'
import React from 'react'

const hospitalList1 = [
    {
      name: 'Baguio General Hospital and Medical Center',
      imageUrl: 'https://res.cloudinary.com/dkukjsbhp/image/upload/v1709794722/bgh_6b8bbae4e7.jpg',
      category: 'Public Medical Institution',
      year: '1902',
      address: 'BGHMC Cmpd., Baguio City'
    },
    {
      name: 'Saint Louis University - Hospital Of The Sacred Heart',
      imageUrl: 'https://res.cloudinary.com/dkukjsbhp/image/upload/v1709794903/slu_6c1bc78fab.jpg',
      category: 'Private Medical Institution',
      year: '1931',
      address: 'Assumption Rd., Baguio City'
    },
    {
      name: 'Notre Dame De Chartres Hospital',
      imageUrl: 'https://res.cloudinary.com/dkukjsbhp/image/upload/v1709794922/notre_bc15e2443c.jpg',
      category: 'Private Medical Institution',
      year: '1965',
      address: '25 Main Building, General Luna Rd., Baguio City'
    },
    {
      name: 'Pines City Doctors Hospital',
      imageUrl: 'https://res.cloudinary.com/dkukjsbhp/image/upload/v1709794936/pines1_a35e30aa27.jpg',
      category: 'Private Medical Institution',
      year: '1977',
      address: 'Magsaysay Avenue, Baguio City'
    }
  ];

function HospitalList({hospitalList}) {
  return (
    <div className='mb-10 px-8'>
        <h2 className='font-bold text-xl'>
           
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 lg:grid-cols-4'>
            {hospitalList1&&hospitalList1.map((hospital,index)=>(
                <div className='border-[1px] rounded-3xl p-8 bg-white-50 cursor-pointer hover:border-primary 
                hover:shadow-xl transition-all ease-in-out hover:scale-95' key={index} >
                    <Image src={hospital.imageUrl} 
                    alt='hospital'
                    width={500}
                    height={200}
                    className='h-[200px] w-full object-cover rounded-3xl'
                    />
                    <div className='mt-3 items-baseline flex flex-col gap-1'>
                        <h2 className='text-[10px] bg-green-100 p-1 rounded-lg px-2 text-primary'>{hospital.category}</h2>
                        <h2 className='font-bold'>{hospital.name}</h2>
                        <h2 className='text-primary text-sm'>{hospital.year}</h2>
                        <h2 className='text-gray-500 text-sm'>{hospital.address}</h2>

                        <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-lg w-full text-center text-[13px] mt-2 cursor-pointer
                         hover:bg-primary hover:text-white '>Consultation</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HospitalList