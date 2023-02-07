import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { RiIndeterminateCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsSim } from "react-icons/bs";

// Navbar list with icons

export const datas = [
  {
    id: 1,
    icon: <Link to='/'><RxDashboard /></Link>,
    text: <Link to='/'>Dashboard</Link>,
  },
  {
    id: 2,
    icon: <Link to='/Billing'><CiMoneyBill /></Link>,
    text: <Link to='/Billing'>Billing</Link>,
  },
  {
    id: 3,
    icon: <Link to='/terminationRequest'><RiIndeterminateCircleLine /></Link>,
    text: <Link to='/terminationRequest'>Termination Request</Link>,
  },
  {
    id: 4,
    icon: <Link to='/simSwop'><BsSim /></Link>,
    text: <Link to='/simSwop'>Sim Swop</Link>,
  },
  {
    id: 8,
    icon: <FiLogOut />,
    text: "Logout",
  },
];
