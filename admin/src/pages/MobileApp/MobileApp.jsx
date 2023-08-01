import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";

// ----------------------

const MobileApp = () => {
  return (
    <div className="container">
      {/* Start Header */}
      <BreadCrumbs links={[{ text: "التطبيقات", href: "/mobile-app" }]} />

      {/* End Header */}
      <div className="soon flex justify-center items-center h-[calc(80vh)]">
        <h1 className="text-7xl font-semibold text-purple-900 select-none">
          انتظــر قـريبــاً...
        </h1>
      </div>
    </div>
  );
};

export default MobileApp;
