
import {BiError} from "react-icons/bi"
// --------------------------

const ProductOut = () => {
    return (
        <>
            <div className="product-out h-[400px] overflow-y-auto w-full rounded-md border">
                <div className="head p-4 flex gap-2 items-center bg-gray-50 text-gray-600 text-base font-medium">
                    <BiError className="text-2xl" />
                    <h3>منتجات نفذت</h3>
                </div>
            </div>
        </>
    );
};

export default ProductOut;