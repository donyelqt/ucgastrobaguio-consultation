import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/image2.jpeg"
          width={1000}
          height={1000}
          className="absolute inset-0 h-full rounded-3xl w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl"><span className='text-primary'style={{ fontFamily: '"Lucida Fax Demi", serif' }}>UC GastroBaguio</span><span style={{ fontFamily: '"Lucida Fax Demi", serif' }}> - Consultation</span></h2>

        <p className="mt-4 text-gray-600">
           Welcome to the University of the Cordilleras GastroBaguio - Consultation System! You can now schedule your consultation with the hospitals based in Baguio City, Philippines, quickly and efficiently on this online platform!
        </p>

        <Button className='mt-10' style={{ borderRadius: '20px' }}>Back to UC GastroBaguio</Button>
        <Button className='mx-8' style={{ borderRadius: '20px' }}>Log In Now Here!</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero