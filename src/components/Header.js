import React from 'react'
import '../components/header.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

function Header() {
  const count=useSelector(state=>state.count)
  return (
    <div className="header">
      <Link to="/">

        <h3>AccioJob</h3>
      </Link>
        
<div className='navbar_nav'>
  <Link to="/">

        <li>Home</li>
  </Link>
  <Link to="/shop">
        <li>Shop</li>
  </Link>
  <Link to="/about">
           <li>About</li>
  </Link>
  <Link to="/blog">
              <li>Blog</li>
  </Link>
  <Link to="/contact">
        <li>Contact</li>
     
  </Link>
  <Link to="/pages">
        <li>Pages</li>
      
  </Link>
           
</div>
<div className="navbar-nav">
      <Link to='/login'>
    <div className='flex'>

< PermIdentityIcon  className="icon" />
<p>Login / Register</p>
</div>
      </Link>
<div className='flex1'>
<SearchIcon  className="icon1"/>
  <Link to="/cart">

<ShoppingCartIcon className="icon2" />
  </Link>
<p className='p1'>{count}</p>
<Link to="/faviourt">

<FavoriteBorderIcon  className="icon3" />
</Link>
<p className='p2'>0</p>
</div>
</div>

 
   
    </div>
  )
}

export default Header
