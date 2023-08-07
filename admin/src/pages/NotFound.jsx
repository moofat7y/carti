import React from "react";
import Lottie from "lottie-react";
import notfound from "../animations/notfound.json";
const NotFound = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Lottie className="max-w-[500px]" animationData={notfound} />
    </div>
  );
};

export default NotFound;
