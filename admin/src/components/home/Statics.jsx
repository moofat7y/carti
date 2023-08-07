import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// ------Icons--------
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { BsBorderAll, BsBoxes } from "react-icons/bs";
import { GoGoal } from "react-icons/go";

// -------------------

// Material
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Statics = () => {
  const [open, setOpen] = React.useState(false);
  const { isLoading, stat } = useSelector((state) => state.statistic);
  const handleOpen = () => setOpen(!open);
  // ---------------

  console.log(stat);
  return (
    <div className="report w-full p-4">
      <div className="head flex justify-between items-center gap-2 border-b pb-3 text-gray-500 font-medium">
        <h4 className="">الاحصائيات</h4>
      </div>
      {/* ------BOXES----- */}
      <div className="boxes flex flex-wrap gap-5 justify-between py-6">
        {/* BOX */}
        <div className="box flex gap-3 items-center mb-5">
          <div className="icon min-h-[50px] min-w-[50px] rounded-full flex items-center justify-center text-xl bg-purple-100 text-purple-800">
            <BsBoxes />
          </div>
          <div className="info text-purple-800 flex flex-col  gap-2 text-sm font-medium">
            <span className="count">{stat?.product_count}</span>
            <p>عدد المنتجات</p>
          </div>
        </div>
        {/* BOX */}
        <div className="box flex gap-3 items-center mb-5">
          <div className="icon min-h-[50px] min-w-[50px] rounded-full flex items-center justify-center text-xl bg-purple-100 text-purple-800">
            <GiTakeMyMoney />
          </div>
          <div className="info text-purple-800 flex flex-col  gap-2 text-sm font-medium">
            <span className="count">{stat?.products_total_price}</span>
            <p>اجمالي سعر المنتجات</p>
          </div>
        </div>
        {/* BOX */}
        <div className="box flex gap-3 items-center mb-5">
          <div className="icon min-h-[50px] min-w-[50px] rounded-full flex items-center justify-center text-xl bg-purple-100 text-purple-800">
            <BsBorderAll />
          </div>
          <div className="info text-purple-800 flex flex-col  gap-2 text-sm font-medium">
            <span className="count">{stat?.orders_count}</span>
            <p>الطلبات</p>
          </div>
        </div>
        {/* BOX */}
        <div className="box flex gap-3 items-center mb-5">
          <div className="icon min-h-[50px] min-w-[50px] rounded-full flex items-center justify-center text-xl bg-transparent border-[3px] border-purple-500 text-purple-800">
            <GiReceiveMoney className="text-purple-700" />
          </div>
          <div className="info text-purple-800 flex flex-col  gap-2 text-sm font-medium text-right">
            <span className="count">{stat?.orders_total_price}</span>
            <p>اجمالي الدخل</p>
          </div>
          <Dialog open={open} handler={handleOpen} className="overflow-hidden">
            <DialogHeader className="bg-purple-100 text-xl">
              حدد الهدف الذي تطمح لتحقيقه في المبيعات
            </DialogHeader>
            <DialogBody>
              <input
                type="number"
                name="goal-number"
                id="goal-number"
                placeholder="12000"
                className="outline-none border rounded-md w-full p-1 text-xl font-normal"
              />
            </DialogBody>
            <DialogFooter className="flex justify-between bg-gray-100">
              <Button
                variant="text"
                onClick={handleOpen}
                className="bg-purple-200 text-purple-800 text-sm hover:bg-purple-300 py-2"
              >
                <span>حفظ</span>
              </Button>
              <Button
                variant="text"
                onClick={handleOpen}
                className="bg-gray-600 text-gray-100 text-sm hover:bg-gray-700 py-2"
              >
                <span>تراجع</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
      {/* ------BTN----- */}
      <div className="btn text-purple-800 mx-auto w-fit">
        <Link to="/invoices">
          المزيد من التقارير
          <MdKeyboardArrowLeft className="mr-2 inline-block" />
        </Link>
      </div>
    </div>
  );
};

export default Statics;
