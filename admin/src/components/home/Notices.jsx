
import {RiNotification3Line} from "react-icons/ri"
// --------------------------

const Notices = () => {
    return (
        <>
            <div className="notices h-[400px] overflow-y-auto w-full rounded-md border">
                <div className="head p-4 flex gap-2 items-center bg-gray-50 text-gray-600 text-base font-medium">
                    <RiNotification3Line className="text-xl" />
                    <h3>التنبيهات</h3>
                </div>
            </div>
        </>
    );
};

export default Notices;