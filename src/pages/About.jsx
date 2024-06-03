import React from 'react'
import { machine_capture1, machine_capture2, machine_dried, machine_seethrough, machine_sittingon, machine_womanwash } from '../assets/images'
import { MdCreditScore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { TiTick } from 'react-icons/ti'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { FaPlayCircle } from 'react-icons/fa'

export default function About() {
  return (
    <main className="bg-white">
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-6">
          <aside className="flex-1 relative">
            <img src={machine_sittingon} alt="machine__sittingon" className="object-cover -scale-x-100 rounded-md h-60 md:h-72 ml-auto w-9/12" />
            <img src={machine_dried} alt="machine__sittingon" className="object-cover object-top absolute left-0 top-1/4 rounded-md h-40 sm:h-52 z-10 border-2 md:border-8 border-white md:h-52  ml-auto w-9/12" />
            <div className="ml-auto mr-4 mt-3 w-5/12 p-6 md:p-6 rounded-md bg-primary text-white">
              <div className="flex gap-4 items-center">
                <div className="rounded-full grid place-items-center h-8 w-8 text-xl md:text-2xl bg-white text-secondary flex-shrink-0"><MdCreditScore /></div>
                <h4 className="text-lg md:text-xl font-bold">Book Now!</h4>
              </div>
              <p className="text-sm md:text-sm pt-3 leading-loose text-justify">It takes as little as 1minute to book as early as tomorrow to deliver</p>
            </div>
          </aside>
          <aside className="flex-1 flex flex-col gap-4">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">About us</p>
            <h3 className="text-2xl md:text4xl font-bold text-dark">Your Trusted Partner In Laundry Care.</h3>
            <p className="text-sm md:text base leading-loose text-justify text-dark/60">Laundromat is your one stop shop for all dry cleaning service lovers out there who loves having the neatest and ironed cothes We strive to provide you the best quality yet affordable laundry services in the country.</p>
            {
              [
                { id: "86360", heading: "passionate Expertise", text: "Laundromat is your one stop shop for all dry cleaning service lovers out there who loves having the neatest and ironed cothes." },
                { id: "86361", heading: "Cutting-edge Technology", text: "Laundromat is your one stop shop for all dry cleaning service lovers out there who loves having the neatest and ironed cothes." },
                { id: "86362", heading: "Customer-centric Approach", text: "Laundromat is your one stop shop for all dry cleaning service lovers out there who loves having the neatest and ironed cothes." },
              ].map(about => (
                <div key={about.id} className="flex gap-3">
                  <span className="text-2xl md:3xl text-secondary flex-shrink-0 mt-1">
                    <IoCheckmarkCircleOutline />
                  </span>
                  <div className=''>
                    <h5 className="text-lg md:text-xl text-dark font-bold">{about.heading}</h5>
                    <p className="text-sm md:base text-dark/60">{about.text}</p>
                  </div>
                </div>
              ))
            }
          </aside>
        </div>
      </section>
      <section className="relative px-4 mb-20 bg-primary">
        <img src={machine_seethrough} alt="" className="absolute w-full h-full left-0 top-0 object-cover opacity-40" />
        <div className="container mx-auto relative flex flex-col md:flex-row gap-6">
          <aside className='flex flex-1 py-20 flex-col gap-2 justify-center relative'>
            <p className="py-2 px-4 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">online booking</p>
            <h5 className='text-xl md:text-3xl font bold text-white'>Discover The Ease Of Online Booking!</h5>
            <p className='text-sm font-bold text-white md:2xl'>Laundromat is your one stop shop for all dry cleaning service lovers out there who loves having the neatest and ironed cothes.</p>
            <div className='flex mt-2 mx-auto ml-0 pt-2 px-2  rounded-md bg-transparent backdrop-blur-md border border-white'>
              <Link to={"/services"} className='flex gap-4 items-center relative bottom-1 '>
                <div className='rounded-full grid place-items-center h-6 w-6 text-xl bg-white text-dark/70 md:2xl flex-shrink-0 '>
                  <FaPlayCircle />
                </div>
                <p className=' text-white text-sm md:text-xl'>Book Now! </p>
              </Link>
            </div>
          </aside>
          <aside className='flex-1 hidden lg:flex relative border border-slate-700'>
            <img src={machine_capture1} alt="" className='absolute rounded-md h-11/12 w-1/2 top-1/2 -translate-y-1/2 object-cover object-center' />
            <img src={machine_capture2} alt="" className='absolute h-[110%] w-[55%] shad rounded-md top-1/2 -translate-y-1/2 right-0 object-cover object-center' />
          </aside>
        </div>
      </section>
      <section className="py-20 px-4 mt-30">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <aside className="flex-1 relative">
            <img src={machine_womanwash} alt="machine womanwash" className="h-full w-11/12 rounded-md object-cover ml-auto block" />
            <figure className="bg-primary p-4 md:p-6 rounded-md w-56 text-white absolute z-10 left-0 bottom-8">
              <div className="flex items-center-gap-2">
                <h4 className="text-3xl md:text-5xl font-bold tracking-tighter">25+</h4>
                <p className='text-lg md:text-xl'>Years of Experience</p>
              </div>
              <p className='text-sm md:text-base text-justify pt-4'>Laundromat is your one stop shop for all dry cleaning services</p>
            </figure>
          </aside>
          <aside className="flex-1 relative flex flex-col gap-4">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">About us</p>
            <h3 className="text-2xl md:text4xl font-bold text-dark">Your Trusted Partner In Laundry Care.</h3>
            <p className="text-sm md:text base leading-loose text-justify text-dark/60">Laundromat is your one stop shop for all dry cleaning service lovers out there who loves having the neatest and ironed cothes We strive to provide you the best quality yet affordable laundry services in the country.</p>
            {
              [
                { id: "1220", title: "Eco-friendly washing", percentage: 92 },
                { id: "1221", title: "meticulous fabric care", percentage: 72 },
                { id: "1222", title: "Non Toxic stain removal", percentage: 86 },
                { id: "1223", title: "Carbon-fast delivery", percentage: 97 },
              ].map(item => (
                <div key={item.id} className="flex flex-col gap-1 text-dark/80">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg md:xl font-bold">{item.title}</h4>
                    <h4 className="text-xs md:base semi-bold">{item.percentage}%</h4>
                  </div>
                  <div className="bg-dark/20 rounded-sm overflow-hidden">
                    <div style={{ width: `${item.percentage}%` }} className="bg-yell p-1"></div>
                  </div>
                </div>
              ))
            }
          </aside>
        </div>
      </section>
    </main>
  )
}
