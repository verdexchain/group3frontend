import React, { useState } from 'react'
import './header.css'
import logo from '../../resources/images/logo.png'
import { FaAlignRight, FaTimes } from 'react-icons/fa'
import mobmenuLogo from '../../resources/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/UseAuthContext'
function Header() {
    const [mobmenu,setMobMenu]=useState(false)
    const navigate=useNavigate()
    const {user,dispatch}=useAuthContext()
    const logout = () => {
      dispatch({ type: 'LOGOUT' });
      localStorage.setItem('user', null);
          navigate('/signin');

  };

    
  return (
    <div className='header'>
      <div className="headerlogo">
      <Link to='/'><img src={logo} alt="" /></Link>
      </div>

      <div className="menu">
      <Link to='/' style={{textDecoration:'none', color:'#fff'}}><p>Home</p></Link>
         <Link to='/news' style={{textDecoration:'none', color:'#fff'}}><p>News</p></Link>
         <Link to='/upload' style={{textDecoration:'none', color:'#fff'}}><p>Upload</p></Link>
         <Link to='/dashboard' style={{textDecoration:'none', color:'#fff'}}><p>Dahboard</p></Link>

        <p></p>
      </div>


      <div className="auth">
      {
        !user?(<>
        <button ><Link to='/signin' style={{textDecoration:'none', color:'black'}}>Login Employee</Link></button>
        <button className='login-btn'><Link to='/signup' style={{textDecoration:'none',color:'white'}} >Register as Employee</Link></button>
        
        </>):(
            <button onClick={()=>{
              logout()
            }}>Logout</button>
          )
       }
      </div>

      <div className="mobmenu-icon">
        <FaAlignRight size={30} onClick={()=>{
            setMobMenu(true)
        }}/>
        
      </div>

      {
        mobmenu&&(
     <div className={mobmenu ? 'mobmenu-canvas slide-in-right' : 'mobmenu-canvas slide-out-right'}>
         <div className="mobmenu-logo">
        <img src={mobmenuLogo} alt="logo" />
        <span><FaTimes size={25} onClick={()=>{
            setMobMenu(false)
        }}/></span>
      </div>
        <div className="mobmenu-items">
         <h3>Resources</h3>
         <Link to='/' style={{textDecoration:'none', color:'#fff'}}><p>Home</p></Link>
         <Link to='/news' style={{textDecoration:'none', color:'#fff'}}><p>Recent News</p></Link>
         <Link to='/upload' style={{textDecoration:'none', color:'#fff'}}><p>Upload</p></Link>
         <Link to='/dashboard' style={{textDecoration:'none', color:'#fff'}}><p>Dahboard</p></Link>
        <p></p>
      </div>


      <div className="mobmenu-auth">
      <h3>Authentication</h3>
       {
        !user?(<>
        <button><Link to='/signin' style={{textDecoration:'none', color:'black'}}>Login Employee</Link></button>
        <button><Link to='/signup' style={{textDecoration:'none',color:'white'}} >Register as Employee</Link></button>
        
        </>):(
            <button onClick={()=>{
              logout()
            }}>Logout</button>
          )
       }
      </div>


            </div>

        )

      }
    </div>
  )
}

export default Header
