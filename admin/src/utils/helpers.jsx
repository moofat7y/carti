import { HiOutlineHome } from "react-icons/hi";
import { IoSettingsOutline, IoShirtOutline } from "react-icons/io5";
import {
  BsBagCheck,
  BsBoxes,
  BsCurrencyDollar,
  BsPlusSquare,
  BsStopwatch,
  BsPalette,
} from "react-icons/bs";
import { FiUsers, FiUser } from "react-icons/fi";
import {
  AiOutlineGift,
  AiOutlinePieChart,
  AiOutlinePoweroff,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { MdOutlineClose, MdOutlinePriceChange } from "react-icons/md";
import { TbUserDollar, TbUserQuestion, TbUsersGroup } from "react-icons/tb";
import { FaStopwatch20 } from "react-icons/fa";
import { GrFormCheckmark } from "react-icons/gr";
import { LuBus, LuShoppingBag } from "react-icons/lu";
import { SlReload } from "react-icons/sl";
import { TfiReload } from "react-icons/tfi";
import { GiLoveLetter } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
export const navigations = [
  {
    link: "/",
    text: "الرئيسيه",
    icon: <HiOutlineHome className="ml-3" />,
  },
  {
    link: "/products",
    text: "المنتجات",
    icon: <IoShirtOutline className="ml-3" />,
  },
  {
    link: "/categories",
    text: "الاصناف",
    icon: <BiCategoryAlt className="ml-3" />,
  },
  {
    link: "/orders",
    text: "الطلبات",
    icon: <BsBoxes className="ml-3" />,
  },
  {
    link: "/customers",
    text: "العملاء",
    icon: <FiUsers className="ml-3" />,
  },
  {
    link: "/invoices",
    text: "التقارير",
    icon: <AiOutlinePieChart className="ml-3" />,
  },
  {
    link: "/mobile-app",
    text: "التطبيقات",
    icon: <AiOutlineAppstoreAdd className="ml-3" />,
  },
  {
    link: "/themes",
    text: "الثيمات",
    icon: <BsPalette className="ml-3" />,
  },
  {
    link: "/settings",
    text: "اعدادات المتجر",
    icon: <IoSettingsOutline className="ml-3" />,
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
    href: "/store/profile",
  },
  {
    label: "تسجيل الخروج",
    icon: <AiOutlinePoweroff />,
    href: "/",
  },
];

export const ordersData = [
  {
    id: 1,
    icon: <FaStopwatch20 className="text-gray-500 text-xl font-bold" />,
    title: "بانتظار الدفع",
    number: "13",
    dotColor: "bg-[#F44336]",
  },
  {
    id: 2,
    icon: <BsStopwatch className="text-gray-500 text-xl font-bold" />,
    title: "بانتظار المراجعة",
    number: "124",
    dotColor: "bg-[#404146]",
  },
  {
    id: 3,
    icon: <AiOutlineGift className="text-gray-500 text-xl font-bold" />,
    title: "قيد التنفيذ",
    number: "42",
    dotColor: "bg-[#37BAF6]",
  },
  {
    id: 4,
    icon: <GrFormCheckmark className="text-gray-500 text-xl font-bold" />,
    title: "تم التنفيذ",
    number: "764",
    dotColor: "bg-[#58C9B9]",
  },
  {
    id: 5,
    icon: <LuBus className="text-gray-500 text-xl font-bold" />,
    title: "جاري التوصيل",
    number: "12",
    dotColor: "bg-[#58C9B9]",
  },
  {
    id: 6,
    icon: <BsBagCheck className="text-gray-500 text-xl font-bold" />,
    title: "تم التوصيل",
    number: "421",
    dotColor: "bg-[#58C9B9]",
  },
  {
    id: 7,
    icon: <LuShoppingBag className="text-gray-500 text-xl font-bold" />,
    title: "تم الشحن",
    number: "12",
    dotColor: "bg-[#58C9B9]",
  },
  {
    id: 8,
    icon: <MdOutlineClose className="text-gray-500 text-xl font-bold" />,
    title: "ملغي",
    number: "112",
    dotColor: "bg-[#CF444D]",
  },
  {
    id: 9,
    icon: <SlReload className="text-gray-500 text-xl font-bold" />,
    title: "مسترجع",
    number: "32",
    dotColor: "bg-[#ED696D]",
  },
  {
    id: 10,
    icon: <TfiReload className="text-gray-500 text-xl font-bold" />,
    title: "قيد الاسترجاع",
    number: "2",
    dotColor: "bg-[#ED696D]",
  },
  {
    id: 11,
    icon: <BsCurrencyDollar className="text-gray-500 text-xl font-bold" />,
    title: "طلب عرض سعر",
    number: "0",
    dotColor: "bg-[#FFB150]",
  },
];

export const clientsFilters = [
  {
    id: 1,
    icon: <TbUsersGroup className="mx-auto text-purple-500 text-3xl" />,
    title: "جميع العملاء",
    number: "4056 عميل",
  },
  {
    id: 2,
    icon: <MdOutlinePriceChange className="mx-auto text-purple-500 text-3xl" />,
    title: "العملاء الاكثر شرائاً",
    number: "47 عميل",
  },
  {
    id: 3,
    icon: <GiLoveLetter className="mx-auto text-purple-500 text-3xl" />,
    title: "عملاء اصحاب ولاء مرتفع",
    number: "لا يوحجد عملاء",
  },
  {
    id: 4,
    icon: <TbUserDollar className="mx-auto text-purple-500 text-3xl" />,
    title: "الفئة الماسية",
    number: "4056 عميل",
  },
  {
    id: 5,
    icon: <BsPlusSquare className="mx-auto text-purple-500 text-3xl" />,
    title: "مجموعة جديدة",
  },
];

export const orderStatusColors = {
  pending: "bg-yellow-400",
  verified: "bg-blue-500",
  shipping: "bg-green-400",
  shipped: "bg-green-900",
  cancel: "bg-red-500",
};

export const reportStatusColors = {
  read: "bg-green-500",
  pending: "bg-yellow-500",
};

export const errHandler = (err) => {
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
