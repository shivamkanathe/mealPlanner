import React, { useState } from 'react';
import Button from '../Button';
import './Nav.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../../utils/config';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { async } from '@firebase/util';

const Nav = () => {
  const [clicked,setClicked] = useState(false);

 const  onSignOut = async() => {
  await signOut(auth);
  setClicked(true);
 }

  return(
  <div className="Nav">
  <div>
  <Button className="Nav__button" link={true} path="/" type="transparent">Home</Button>
  <Button className="Nav__button" link={true} path="/survey" type="transparent">Survey</Button>
  </div>
 <Link to={ clicked ? '/': ""}>
 <p className="Nav__button" style={{cursor:"pointer"}} onClick={onSignOut} type="transparent">Logout</p>
 </Link>
</div>
 );
 };

export default Nav;
