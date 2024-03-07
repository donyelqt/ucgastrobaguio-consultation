import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MapPinned, Search, SearchCheckIcon } from 'lucide-react'

function CategorySearch() {
  return (
    <div className='mb-10 items-center flex flex-col gap-2 mt-24'>
        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search Now Here!!!" style={{ borderRadius: '20px' }}/>
      <Button type="submit" style={{ borderRadius: '20px' }}>
        <SearchCheckIcon className='h-4 w-4 mr-1'/>
        Search</Button>
    </div>
        <h2 className='font-bold text-4xl tracking-wide mt-5'><span className='text-primary'style={{ fontFamily: '"Lucida Fax Demi", serif' }}>Search Hospitals</span><span style={{ fontFamily: '"Lucida Fax Demi", serif' }}> in Baguio City, Philippines</span></h2>
    </div>
  )
}

export default CategorySearch