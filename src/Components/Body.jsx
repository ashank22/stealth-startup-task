import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../contexts/FormContext";

const initialErrorObject = {
  noOption: false,
  submit: false,
};

const Body = () => {
  //hardcoded API
  const API = {
    1: {
      fields: [
        {
          name: "firstName",
          type: "text",
          label: "First Name",
          required: true,
        },
        { name: "lastName", type: "text", label: "Last Name", required: true },
        { name: "age", type: "number", label: "Age", required: false },
      ],
    },
    2: {
      fields: [
        { name: "street", type: "text", label: "Street", required: true },
        { name: "city", type: "text", label: "City", required: true },
        {
          name: "state",
          type: "dropdown",
          label: "State",
          options: ["California", "Texas", "New York"],
          required: true,
        },
        { name: "zipCode", type: "text", label: "Zip Code", required: false },
      ],
    },
    3: {
      fields: [
        {
          name: "cardNumber",
          type: "text",
          label: "Card Number",
          required: true,
        },
        {
          name: "expiryDate",
          type: "date",
          label: "Expiry Date",
          required: true,
        },
        { name: "cvv", type: "password", label: "CVV", required: true },
        {
          name: "cardholderName",
          type: "text",
          label: "Cardholder Name",
          required: true,
        },
      ],
    },
  };

  const navigate = useNavigate();

  //hooks
  const [option, setOption] = useState(null); //state for selected form
  const { formData, setFormData } = useFormContext(); //state for entry in form
  const [error, setError] = useState(initialErrorObject); //state to handle error
  const [progress, setProgress] = useState(0); // State for progress

  //event handlers
  const onOptionChange = (e) => {
    setError({ ...error, noOption: false });
    setOption(e.target.value);
  };

  const handleFormChange = (event) => {
    const { name, value, type } = event.target;
    setFormData({
      ...formData,
      [name]: [value, type, true],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent reloading
    if (!["1", "2", "3"].includes(option))
      //if none of the option is submitted form doesnot reload and shows error
      return setError({ ...error, noOption: true });
    setError({ ...error, submit: true });
    navigate("/data"); //navigates to different route to display the submitted data
  };

  useEffect(() => {
    if (option) {
      // Ensure 'option' is valid

      const requiredFields = API[option].fields.filter(
        (field) => field.required
      );
      const filledFields = requiredFields.filter(
        (field) => formData[field.name]?.[0]
      ).length;
      const progressPercentage = (filledFields / requiredFields.length) * 100;
      setProgress(progressPercentage);
    }
  }, [formData, option]); // Recalculate progress when formData or option changes

  useEffect(() => {
    //reset form when the page reloads
    setFormData({});
  }, []);

  return (
    <div className="flex justify-center">
      {/* Main container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl h-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Dynamic Form Builder
        </h1>

        {/* Dropdown for Form Type Selection */}
        <div className="mb-6">
          <select
            onChange={onOptionChange}
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-700"
          >
            <option value="">Select Form Type</option>
            <option value="1">User Information</option>
            <option value="2">Address</option>
            <option value="3">Payment Information</option>
          </select>
          {error.noOption && (
            <p className="text-red-500 text-sm mt-2">
              Please choose a form type
            </p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
              className="bg-[#1C4387] h-2.5 rounded-full "
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Dynamic Form */}
        <form onSubmit={handleSubmit}>
          {API[option]?.fields.map((attribute) => {
            const name = attribute.name;
            return (
              <div className="mb-4" key={name}>
                <label
                  htmlFor={name}
                  className="block text-gray-700 font-medium mb-2"
                >
                  {attribute.label}
                  {attribute.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <input
                  id={name}
                  name={name}
                  type={attribute.type}
                  value={formData[name]?.[0] || ""}
                  onChange={handleFormChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={attribute.required}
                />
              </div>
            );
          })}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#1C4387] hover:bg-blue-600 text-white font-medium p-3 rounded-lg transition duration-200"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
