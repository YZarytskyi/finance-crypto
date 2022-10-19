import style from './Auth.module.scss'
import React, { useState } from 'react';
import Modal from '../Common/Modal';
import Login from './Login';
import SignUp from './SignUp';

interface AuthProps {
  modalAuthShow: boolean, 
  setModalAuthShow: (value: boolean | ((prevValue: boolean) => boolean)) => void,
  toggleLoginSignUp: boolean,
  setToggleLoginSignUp: (value: boolean | ((prevValue: boolean) => boolean)) => void,
}

const Auth: React.FC<AuthProps> = ({modalAuthShow, setModalAuthShow, toggleLoginSignUp, setToggleLoginSignUp }) => {
  
  const handleClickToggleAuth = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const classes = [...(e.target as Element).classList];
    const isCurrent = classes.find(item => item.includes("Current"))
    if (!isCurrent) setToggleLoginSignUp(prev => !prev)
  };

  return(
    <Modal modalShow={modalAuthShow} setModalShow={setModalAuthShow}>
      <div className={style.modalAuthContent}>

        <ul className={style.modalAuthNav}>
          <li className={style.modalAuthNavItem}>
            <a href="" className={style.modalAuthNavLink + " " + (toggleLoginSignUp && style.NavLinkCurrent)} onClick={(e) => handleClickToggleAuth(e)}>
              Login
            </a>
          </li>
          <li className={style.modalAuthNavItem}>
            <a href="" className={style.modalAuthNavLink + " " + (toggleLoginSignUp ? "" : style.NavLinkCurrent)} onClick={(e) => handleClickToggleAuth(e)}>
              Sign Up
            </a>
          </li>
        </ul>
        
        {toggleLoginSignUp ? <Login setModalAuthShow={setModalAuthShow}/> : <SignUp setModalAuthShow={setModalAuthShow}/>}
      </div>
    </Modal>
  );
};

export default Auth;