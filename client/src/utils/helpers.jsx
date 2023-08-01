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

export const product = {
  name: "Product Name",
  description:
    "The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.",
  price: 49.99,
  images: [
    {
      src: "data:image/jpeg;base64,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",
      alt: "Product image 1",
    },
    {
      src: "data:image/jpeg;base64,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",
      alt: "Product image 2",
    },
    {
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAuwMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIHBAUGAwj/xAA1EAABAwMCBAMFCAIDAAAAAAABAAIDBAUREiEGMUFRBxNhFCIycZEjQlKBobHB8BVyM9Lh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABgRAQEBAQEAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIRAxEAPwDcqKphVkCqgVQEREEUWSiAiK4QRFUQRVEQFFUQRFUQRFUQEREBERAREQEREBERBEQogITspleNu3iLa7fXGkZTVNTh+jzYsaHHs3vvgdOfbdE17QIuBZ7xQXmlbUW+oZK3HvN1DVGezh0K7DCKiIiAiIgIiICIiAiIgKqIgIiICqgVQFFVCUERQuCmsIPPeIT5G8I17Ymv99ha57DjQOeT6bY/Nfn19VUUcQdTamR51aRqc1vfGDn1W+PFKudScEV8sfxOdEzfkQXtBWg2TGQh1PN5UgGNEm7XIObaa2g/x0j6mWe31EGlshiZqYWk7bDfJwCfVeu4d8Qa20Uc9LRsdcYgAIpKqX3g/fJA393BGxO+OYXh7nb4poDKwRCYHfcjYb57H/xdW9lRR1T4pWPgqIjhzXbOb80MbAsXFnEhvVdcprg2EeUfsqpxPmbgDDRsMem+Ae65dg8UbpQ3aKK81jbhSzP0u+xawsB+8wjp6Hn0Xg3XColt07Toc5jQ4EtByNQB+mV1tto6q51vl0zdb+biTy5/vug/XccjJY2SRvD2PAc1w5EHkVlla14H4zorfZqKz3J7hJRMED6g4a3AOGnBwdhgHmtj5QZqrDUqCgyRREFREQEREBERAVUVQFg5ZKFB8JDhcZ0hBXLeMrjyM6oPJ+JwNRwRXsxu0xu+j2r8+UhfNK4MYXHngBfoHxBulvprDV2+okc+pqI8Nihbqc0Z+I9ht1WkPaoqSI09LTxadWXGaNr3OPqSEHFc2tna+nbFpjPWRwwfkuay7zR0whvsUdexrhtOwiXTnfRKDnOO/fquS27W+rZ5ddCKeXBJmiBdrPQY6fr0+a6GofJUkxwvMjQMgfeH9/uOSK5NbLSQTBlD7RJBU0nOUAEPIO2QSMZA+uFjSXKGiliNDrp5YZw/Ooe+3ljP8HZcurZZNFL7N7RC98GnJ+FkvQkjmDuDt2PQ56yOsmZE2GangqaZjifJewBzc8w1w3H8IOyqrw+tmqYTAY5J3gQvji04BdkuO++x6LbHg5XVoiqrdW1LpY2DXA55wCNRGWtO4GMf3OdRwCHMZpYpGxkkxtlILgM8iVtvg2llpuK6eOKojewU8rpSwYJa33QMfMtOfQozWzQ5fRpXHB7r6NOUH2BVWDVmiqEREBERAREQFVEKBlYkqOK+T3IK52F43jDjCKgZNQ2t75rhyeYmB/k/UgavrhenqZXCKTR8YadPzwvzU24Tv8mLzXxGqqn+0ysdhxweWf7uUGN0kuktXLVee+oy7Mjnhwkz1O/P8iuTXRPoqSGsrY47naagaPaoHYlhP4cndrh+F2QfRe5reGIa6gZV0tzbSQQsDA18LnNa4DGt8mTjPUlpHda2vVJdbLWV1BNGafzAPOiacxyt5hw57dj05clmdS0nvrpq6IQz/YymeA7xS6dOoeo6HuFyKaqqqh1PTQta+VryYwGgOcTzBPUbdVx4JQIn078GOXcH8DuhH7H0PorQwv8AOD8EBp36H5LSuxtmayadkkWpro3aQWn/AJOg23G+c/quCCQ/Dgc4GrPdetcYbRJT1MEYMLGsmOn8IOc/t9V5ZhFVLPNK53nOy8Y31OJG3L1Jz6Y6ojm025bvlbQ8JGA32sLQBppcH195uP2Wr6U+80FbV8IoxJdrnKWbxQRtB/2J/wCqJW0AvsxSOMlfdrEBqzQBEUREQEREAIUCqCIURB83Ljy8tlyiMr5uYg62TUDvlaC47sRtN9rqKKPDZ5DcKJ4+/n44x3IO/wCXqv0RJEDzGV5bjXhaHiK1+zue6Gohd5tLO34opByPqO4/kBB4Dw/4s8oRueQ5p9yVh3Hrt2K7DxEtVC/h50lLI0Nge11F3ZFI7S6L1a1+nHYPHZa+uVuuFpujozGKW5ZOqLlHOPxRk7dPhXaDiKurrebLPappJnubpa7Ia13c532/hYsZ55yvHUtuc4a5wW62uc1vfScOH6hehFBLcbpT09HHqnqmRkNA+8WjJ9BnJK7GOzVNyrHU9BGJpfPkaHA+6BgAknoORW0uGbBS2GnwwCWse1rZagjBIA2aOzfRdGrX0tfC1DQ00gmDZppWCN7iNgwcmj0/vQLzd08KKCrL5bVVvopjvjBcw+mM7fktgQxOecnK58UWByUZaRpvCjiMVrY3PohT53m84nA/1xklbh4a4dorBQNpaRuTzkkPOR3crtWtX0aEVm3A5KqKoqqIiAiIgIiICqiqAoqogKEKogwc1fGSLVthchQhB5viThK2cRUnkXKmbJjdjxs5h7grx0HhN5Upb/nLgafGPLL98ds/mVtQrFEedtnD0drpGUtI0NY3r1ce5XYQ0Aacu5rscIAhj5RwhvJfUNVwssIYgCoCoCqKKrFVBUREBERAREQFVFUBREQEREEQqoUGJCmFnhMIMNKYWSuEGGFQFUQEREDCBMogqKZVCAiIgIiIP//Z",
      alt: "Product image 3",
    },
  ],
  colors: [
    {
      name: "Red",
      value: "#590808",
      images: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkhqpgprIqtQ0cK8UNJLC7FIJ2oPrld6YfizY1v2L1Qc5WToQ4dfWO_7CyY1dgXD3dXA&usqp=CAU",
          alt: "Red product image 1",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfs-PpgQt1jSWvs0wGq8NT5mt3GpZeFQn43R-KgwXsRHrmrpGnKCYU2rN7ME-c6TTJy5Q&usqp=CAU",
          alt: "Red productimage 2",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5ozxhwMDQKExdC7qQyi_lH-QNwFte17zfSgLnaGIb6fghNxhStuuje3Nef4sangwK5s&usqp=CAU",
          alt: "Red product image 3",
        },
      ],
    },
    {
      name: "Blue",
      value: "#0000ff",
      images: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5ozxhwMDQKExdC7qQyi_lH-QNwFte17zfSgLnaGIb6fghNxhStuuje3Nef4sangwK5s&usqp=CAU",
          alt: "Blue product image 1",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5ozxhwMDQKExdC7qQyi_lH-QNwFte17zfSgLnaGIb6fghNxhStuuje3Nef4sangwK5s&usqp=CAU",
          alt: "Blue product image 2",
        },
        {
          src: "https://example.com/blue-image3.jpg",
          alt: "Blue product image 3",
        },
      ],
    },
  ],
  sizes: ["Small", "Medium", "Large"],
  quantity: 4,
};

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
