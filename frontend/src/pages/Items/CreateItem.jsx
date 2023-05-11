import React from "react";
import { useState } from "react";
import { dateFormatter } from "../../utils/dateFormatter";
import { useCreateItemMutation } from "../../store/item/itemSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateItem() {
  const navigate = useNavigate();
  const [createItem, { isSuccess: itemCreated }] = useCreateItemMutation();
  const [data, setData] = useState({
    id: 0,
    name: "",
    createdAt: new Date(),
    createdBy: "",
  });

  useEffect(() => {
    if (itemCreated) {
      navigate("/");
      alert("item created");
    }
  }, [itemCreated]);

  const handleChange = (e) => {
    if (e.target.name === "createdAt") {
      console.log(e.target.value);
      setData({ ...data, [e.target.name]: dateFormatter(e.target.value) });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    createItem(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="text-gray-700">
          <label className="block mb-1" for="forms-labelOverInputCode">
            Id
          </label>
          <input
            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="number"
            placeholder="id"
            id="forms-labelOverInputCode"
            name="id"
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-gray-700">
          <label className="block mb-1" for="forms-labelOverInputCode">
            Name
          </label>
          <input
            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="name"
            id="forms-labelOverInputCode"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-gray-700">
          <label className="block mb-1" for="forms-labelOverInputCode">
            CreatedAt
          </label>
          <input
            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="date"
            placeholder="createdAt"
            id="forms-labelOverInputCode"
            name="createdAt"
            onChange={handleChange}
            required
          />
        </div>

        <div className="text-gray-700">
          <label className="block mb-1" for="forms-labelOverInputCode">
            CreatedBy
          </label>
          <input
            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="createdBy"
            id="forms-labelOverInputCode"
            name="createdBy"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Create Item
        </button>
      </form>
    </div>
  );
}

export default CreateItem;
