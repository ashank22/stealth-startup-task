import React from "react";
import { useFormContext } from "../contexts/FormContext";
import { Link } from "react-router-dom";

const Data = () => {
  const { formData, setFormData } = useFormContext();    //context API to get formdata
  
  //event handlers

  const removeItem = (keyToBeRemoved) => {       
    setFormData(
      Object.fromEntries(
        Object.entries(formData).filter(                 //filter all keys except the key to be removed
          ([key, value]) => key !== keyToBeRemoved
        )
      )
    );
  };

  // Edit the item
  const editItem = (keyToBeEdited) => {           //replace all except edited array for the given key
    const array = formData[keyToBeEdited];
    array[2] = !array[2];
    setFormData({ ...formData, [keyToBeEdited]: array });
  };

  // Handle changes when editing the form
  const handleEditChange = (event, keyToBeEdited) => {
    const array = formData[keyToBeEdited];
    array[0] = event.target.value;
    setFormData({ ...formData, [keyToBeEdited]: array });
  };

  return (
    <>
      <h1 className="text-white text-center text-5xl">Review</h1>
      <div className="flex justify-center">
        <div className="bg-white shadow-lg p-8 w-full max-w-2xl">
          {/* Table Layout */}
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-blue-500 p-4 text-left text-sm font-semibold">Field</th>
                <th className="border-b-2 border-blue-500 p-4 text-left text-sm font-semibold">Value</th>
                <th className="border-b-2 border-blue-500 p-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(formData).map(([key, value]) => (
                <tr key={key}>
                  <td className="border-b border-blue-500 p-4">{key}</td>
                  <td className="border-b border-blue-500 p-4">
                    <input
                      type={value[1]}
                      value={value[0]}
                      onChange={(event) => handleEditChange(event, key)}
                      disabled={formData[key][2]} // Disable inputs unless it's the field being edited
                      className="border p-2 rounded w-full"
                    />
                    {/* Show a message if the field is required and empty */}
                    {value[2] && !value[0] && (
                      <p className="text-red-500 text-sm mt-2">Required field</p>
                    )}
                  </td>
                  <td className="border-b border-blue-500 p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => editItem(key)}
                        className={`${
                          !formData[key][2] ? "bg-red-500" : "bg-green-500"
                        } text-white p-2 rounded hover:bg-opacity-80 transition duration-200`}
                      >
                        {!formData[key][2] ? "Close Edit" : "Edit"}
                      </button>
                      <button
                        onClick={() => removeItem(key)}
                        className="bg-red-600 text-white p-2 rounded hover:bg-opacity-80 transition duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/success">
          <button className="inline-block px-4 py-2 bg-[#1C4387] text-white rounded hover:bg-blue-600 focus:outline-none">
            Submit
          </button>
        </Link>
      </div>
    </>
  );
};

export default Data;
