import React from 'react'

function Nav() {
  return (
    <div className='w-full bg-zinc-800 relative sm:h-20 h-14 flex items-center justify-between px-5'>
     <div className="logo text-3xl tracking-tighter font-medium sm:text-4xl sm:w-16 sm:break-words sm:leading-5">Gaama</div>
     <div className='sm:hidden'><i className="ri-menu-4-line cursor-pointer text-2xl"></i></div>
     <div className='absolute px-4 sm:px-0 gap-2 min-h-10 w-full right-0 top-full sm:relative sm:top-0 sm:flex sm:items-center flex-wrap'>
      <div className="location hover:border hover:border-white border border-transparent w-fit px-4 cursor-pointer flex gap-2 items-center">
      <i class="ri-map-pin-line text-2xl"></i>
        <span>
        <p className='leading-none tracking-tighter'>Deliver to Abhay</p>
        <span className='font-semibold text-lg text-nowrap'>Khalilabad 27***5</span>
        </span>
      </div>
      <div className='w-full h-9 mt-4 sm:mt-0 bg-white sm:w-1/2 flex items-center text-zinc-700 active:border active:border-yellow-400 border border-transparent'>
        <div className='w-20 bg-red-300 h-full flex items-center justify-center gap-1 cursor-pointer hover:border hover:border-white border border-transparent'>
          <span className='font-medium'>All</span>
          <i class="ri-arrow-down-s-fill text-xl"></i>
        </div>
        <input type="search" name="search" id="item_search" placeholder='Find your item' className='w-full px-2 h-full outline-none' />
        <div className='w-14 bg-yellow-500 h-full hover:border hover:border-white flex items-center justify-center border border-transparent'>
        <i class="ri-search-line text-xl font-medium"></i>
        </div>
      </div>
      <div className="location sm:mt-0 py-1 mt-3 hover:border hover:border-white border border-transparent w-fit px-3 sm:p-2 cursor-pointer flex gap-2 items-center">
        <span className='cursor-pointer'><span>🏳️‍🌈</span> En <i class="ri-arrow-down-s-fill"></i></span>
      </div>
      <div className="location hover:border hover:border-white border border-transparent w-fit px-4 cursor-pointer flex gap-2 items-center">
        <span className=''>
        <p className='leading-none tracking-tighter'>Hello, Abhay</p>
        <span className='font-semibold text-lg text-nowrap'>Account & Lists</span>
        </span>
        <i class="ri-arrow-down-s-fill"></i>
      </div>
     </div>
    </div>
  )
}

export default Nav