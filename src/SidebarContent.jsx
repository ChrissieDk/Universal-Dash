import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { RiIndeterminateCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsSim } from "react-icons/bs";

// Navbar list with icons

export const datas = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: <CiMoneyBill />,
    text: "Billing",
  },
  {
    id: 3,
    icon: <RiIndeterminateCircleLine />,
    text: "Termination request",
  },
  {
    id: 4,
    icon: <BsSim />,
    text: "SimSwop",
  },
  {
    id: 8,
    icon: <FiLogOut />,
    text: "Logout",
  },
];