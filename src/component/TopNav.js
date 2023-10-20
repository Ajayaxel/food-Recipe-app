import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon  from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const TopNav = () => {


     const [sidenav,setsidenav]=useState (false)
     console.log(setsidenav)
     
  return (
     
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4 '>
      <div className='flex items-center'>
      <div onClick={()=>setsidenav(!sidenav)} className='cursor-poniter'>
        <MenuIcon size={25}/>
      </div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-4'>YIPPY
      <span className='font-bold'>Eate</span>
      </h1>
   
      <div className='hidden sm:flex items-center bg-gray-200 rounded-full  p-1  text-[14px]'>
      <p className='bg-orange-700 rounded-full  text-white font-bold  p-2'>free</p>
      <p className='p-2 font-bold  '>delivery</p>
      </div>
      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2  sm:w-[250px] lg:w-[600px] '>
      <SearchIcon size={25}/>
      <input className='bg-transparent p-2 w-full focus:outline-none' 
      type='text'
      placeholder='Search Meals'
      
      />
      </div> 
<button className='bg-orange-700 text-white hidden md:flex  text-center justify-center py-2 rounded-full w-[70px]'>
<ShoppingCartIcon/>
cart</button>

{
     sidenav ? (
          <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={()=>setsidenav(!sidenav)}></div>
     ): ("")
    
}
<div className={
     sidenav ?
     'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-400'
     :'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-400'
}>
   <CloseIcon onClick={()=>setsidenav(!sidenav)} className='absolute right-4 top-4 cursor-pointer'/>
   <h2 className='text-2xl p-4'>YIPPY<span className='text-orange-700 font-bold '>Eate</span></h2>
   <nav>
   <ul className='flex flex-col p-4 text-gray-900'>
   <li className='text-xl py-4 flex'>
   <AccountCircleIcon size={25}
   className='mr-4 text-white bg-black rounded-full'
   />
   MyAccount
   </li>
   <li className='text-xl py-4 flex'>
   <LocalShippingIcon size={25}
   className='mr-4 text-white bg-black rounded-full'
   />
   Delivery
   </li>

   <li className='text-xl py-4 flex'>
   <FavoriteBorderIcon size={25}
   className='mr-4 text-white bg-black rounded-full'
   />
   MyFavorite
   </li>

   <li className='text-xl py-4 flex'>
   <AccountBalanceWalletIcon size={25}
   className='mr-4 text-white bg-black rounded-full'
   />
   My wallet
   </li>

   <li className='text-xl py-4 flex'>
   <HelpOutlineIcon size={25}
   className='mr-4 text-white bg-black rounded-full'
   />
   Help
   </li>

   </ul>
   </nav>
</div>
    </div>
  )
}

export default TopNav
