import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { RiIndeterminateCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsSim } from "react-icons/bs";
import { BiSupport } from 'react-icons/bi'
import { MdAccountCircle } from 'react-icons/md'
import logoDark from './assets/logo_dark2.png'

// Navbar list with icons

export const datas = [
  {
    id: 10,
    img: <img className="flex justify-center" src={logoDark} alt="Logo" />,
    
  },
  {
    id: 1,
    icon: <Link to='/myAccount'><MdAccountCircle /></Link>,
    text: <Link to='/myAccount'>My Account</Link>,
  },
  {
    id: 2,
    icon: <Link to='/dashboard'><RxDashboard /></Link>,
    text: <Link to='/dashboard'>Dashboard</Link>,
  },
  {
    id: 3,
    icon: <Link to='/Billing'><CiMoneyBill /></Link>,
    text: <Link to='/Billing'>Billing</Link>,
  },
  {
    id: 4,
    icon: <Link to='/terminationRequest'><RiIndeterminateCircleLine /></Link>,
    text: <Link to='/terminationRequest'>Termination Request</Link>,
  },
  {
    id: 5,
    icon: <Link to='/simSwop'><BsSim /></Link>,
    text: <Link to='/simSwop'>Sim Swop</Link>,
  },
  {
    id: 6,
    icon: <a href='https://simpal.freshdesk.com/support/home'><BiSupport /></a>,
    text: "Support",

  },
  {
    id: 7,
    icon: <Link to='/Login'><FiLogOut /></Link>,
    text: <Link to='/Login'>Logout</Link>,
  },
];
