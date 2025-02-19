import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        
        
        <Link class="nav-link" to="home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="movies">Movie</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo1">formdemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo2">formdemo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo3">formdemo3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo4">formdemo4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo5">formdemo5</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo6">formdemo6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo7">formdemo7</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo8">formdemo8</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo5c">formdemo5c</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo6c">formdemo6c</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="formdemo9">formdemo9</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="loginpage">loginpage</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="signup">signup</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="apidemo1">apidemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="searchmovie">searchmovie</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="moviedetail">moviedetail</Link>
      </li>
    
    
    </ul>
   
  </div>
</nav>
  )
}

export default NavbarLink
