import { Input } from "@material-tailwind/react";
import { GrSearch } from "react-icons/gr";
import ProdFilt from "./ProdFilt";

export default function ProdSearch() {
  return (
    <div className="w-72 mx-auto mt-8 flex gap-3 items-center">
      <Input
        type="text"
        placeholder="بحث"
        icon={<GrSearch className="text-purple-800" />}
        className="focus:!border-t-purple-500 focus:!border-purple-500 ring-4 ring-transparent focus:ring-purple-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
      <ProdFilt />
    </div>
  );
}
