import React from 'react'
import { useEffect, useRef } from 'react'
import logo from "../../assets/images/01medical-logo.jpg"
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'



const navLink = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },

]




function Header() {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStixkyHeader = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    handleStixkyHeader();

    return ()=> window.removeEventListener('scroll',handleStixkyHeader)
  })


  const toggleMenu =()=> menuRef.current.classList.toggle('show__menu')


  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className=' flex cursor-pointer'>
            <img src={logo} alt="" className=' rounded-[50px] h-24 w-24' /><span className='mt-7 font-bold text-3xl'>Med<span className=' text-red-400'>icare</span></span>
          </div>
          <div className=' navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className=' menu flex items-center gap-[2.7rem]'>
              {
                navLink.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.path}
                      className={navClass => navClass.isActive
                        ? " text-primaryColor text-[16px] leading-7 font-[600]"
                        : " text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      } >{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className=' flex items-center gap-4 '>
            <div className=' hidden '>
              <Link to='/'>
                <figure className=' w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} alt="" className=' w-full rounded-full' />
                </figure>
              </Link>
              </div>
              <Link to='/login'>
                <button className=' bg-primaryColor py-2 px-6 text-white font-[600] h-[40px] flex items-center  justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>

              <span className=' md:hidden' onClick={toggleMenu}>
                    <BiMenu className=' w-6 h-6 cursor-pointer'/>
              </span>
            
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header