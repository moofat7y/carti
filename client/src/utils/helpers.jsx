import { HiOutlineHome } from "react-icons/hi";
import { IoCallOutline, IoShirtOutline } from "react-icons/io5";
import {
  BsBoxes,
  BsClockHistory,
  BsFacebook,
  BsHouseExclamation,
  BsInstagram,
  BsRecycle,
  BsTwitter,
} from "react-icons/bs";
import { FiUsers, FiUser } from "react-icons/fi";
import {
  AiOutlineMobile,
  AiOutlinePieChart,
  AiOutlinePoweroff,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiInboxArchiveLine } from "react-icons/ri";
import {
  MdOutlineDone,
  MdOutlineEmail,
  MdPendingActions,
} from "react-icons/md";
import { TbTruckDelivery, TbUserQuestion } from "react-icons/tb";
export const navigations = [
  {
    link: "/admin-panel",
    text: "الرئيسيه",
    icon: <HiOutlineHome className="ml-3" />,
  },
  {
    link: "/admin-panel/products",
    text: "المنتجات",
    icon: <IoShirtOutline className="ml-3" />,
  },
  {
    link: "/admin-panel/orders",
    text: "الطلبات",
    icon: <BsBoxes className="ml-3" />,
  },
  {
    link: "/admin-panel/customers",
    text: "العملاء",
    icon: <FiUsers className="ml-3" />,
  },
  {
    link: "/admin-panel/reports",
    text: "التقارير",
    icon: <AiOutlinePieChart className="ml-3" />,
  },
  {
    link: "/admin-panel/questions",
    text: "الاسئله والتقيمات",
    icon: <TbUserQuestion className="ml-3" />,
  },
];

export const searchFilters = [
  { text: "الطلبات", placeholder: "ابحث برقم الطلب ، اسم العميل ، رقم الشحنة" },
  {
    text: "المنتجات",
    placeholder: "ابحث بإسم المنتج ، اسم التصنيف ، وصف المنتج أو الـSKU",
  },
  { text: "العملاء", placeholder: "ابحث بإسم العميل ، رقم الجوال" },
];

export const profileMenuItems = [
  {
    label: "حسابي",
    icon: <FiUser />,
    href: "/profile",
  },
  {
    label: "سجل الطلبات",
    icon: <BsClockHistory />,
    href: "/orders",
  },
  {
    label: "تسجيل الخروج",
    icon: <AiOutlinePoweroff />,
    href: "/",
  },
];

export const navListItems = [
  {
    label: "الرئيسيه",
    icon: <BsHouseExclamation />,
    link: "/",
  },
  {
    label: "المتجر",
    icon: <BsHouseExclamation />,
    link: "/store",
  },
];

export const footerLinks = [
  {
    title: "من نحن",
    items: [
      {
        text: "واتساب",
        icon: <AiOutlineWhatsApp className="ml-2 text-xl" />,
        href: "/",
      },
      {
        text: "هاتف",
        icon: <AiOutlineMobile className="ml-2 text-xl" />,
        href: "/",
      },
      {
        text: "جوال",
        icon: <IoCallOutline className="ml-2 text-xl" />,
        href: "/",
      },
      {
        text: "ايميل",
        icon: <MdOutlineEmail className="ml-2 text-xl" />,
        href: "/",
      },
    ],
  },
  {
    title: "روابط مهمه",
    items: [
      {
        text: "الاستبدال والاسترجاع",
        icon: <BsRecycle className="ml-2 text-xl" />,
        href: "/",
      },
    ],
  },
  {
    title: "تواصل معنا",
    items: [],
  },
];

export const footeSocialLinks = [
  {
    href: "/",
    icon: <BsFacebook />,
  },
  {
    href: "/",
    icon: <BsInstagram />,
  },
  ,
  {
    href: "/",
    icon: <BsTwitter />,
  },
];

export const categories = [
  "Men",
  "Watches",
  "Screen",
  "Women",
  "Mobile",
  "Elec",
];

export const prodFilters = [
  {
    title: "Categories",
    options: ["Men", "Watches", "Screen", "Women", "Mobile", "Elec"],
  },
  {
    title: "Colors",
    options: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    title: "Sizes",
    options: ["S", "M", "L", "XL", "2XL"],
  },
];

export const orderStatus = [
  {
    icon: <MdPendingActions />,
    status: "pending",
    date: "4/7/23",
  },
  {
    icon: <MdOutlineDone />,
    status: "verified",
    date: "6/7/23",
  },
  {
    icon: <TbTruckDelivery />,
    status: "shipping",
    date: "8/7/23",
  },
  {
    icon: <RiInboxArchiveLine />,
    status: "shipped",
  },
];

export const errHandler = (err) => {
  console.log(err);
  if (Object.values(err.response?.data?.data).length > 0) {
    return Object.values(err.response.data.data).join(",");
  }
  if (err?.response?.data?.message) {
    return err.response.data.message;
  }
  if (Object.values(err.response.data).length > 0) {
    return Object.values(err.response.data).join(",");
  }
};
