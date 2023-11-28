/* eslint-disable react/no-unescaped-entities */
import AccordionCard from '@/components/cards/accordionCard'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='text-white overflow-hidden text-6xl'>
      <h1 className='text-center  my-12 font-semibold'>
        Unlock My Phone<span className='text-blue-700'>.</span>
      </h1>
      <h2 className='text-center text-blue-500 text-2xl my-5'>
      "Crack the Code Challenge: Guess the Hidden Number!"
      </h2>
      <AccordionCard />
   </div>
  )
}
