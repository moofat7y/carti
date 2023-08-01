import React from "react";
import InfoForm from "../components/Profile.jsx/InfoForm";
import ChangePassword from "../components/Profile.jsx/ChangePassword";

const Profile = () => {
  return (
    <div className="container py-4">
      <div className="py-8">
        <InfoForm />
      </div>
      <div className="py-8">
        <ChangePassword />
      </div>
    </div>
  );
};

export default Profile;
