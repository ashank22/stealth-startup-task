import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate back to home after 3 seconds
    setTimeout(() => {
      navigate("/"); // Adjust to route as needed
    }, 2000); // Time before redirect
  }, [navigate]);

  return (
    <div className="">
      <h1 className="text-4xl text-center font-bold text-white animate__animated animate__fadeIn brightness-200 ">
        Form Submitted Successfully
      </h1>
    </div>
  );
};

export default FormSuccess;
