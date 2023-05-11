import React, { useState, useEffect } from "react";
import { dateFormatter } from "../../utils/dateFormatter";
import {
  useEditItemMutation,
  useGetSingleItemQuery,
} from "../../store/item/itemSlice";
import { useNavigate, useParams } from "react-router-dom";

function EditItem() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const { data: singleItem, isSuccess: singleItemSuccess } =
    useGetSingleItemQuery(id);
  const [editItem, { isSuccess: itemEdited }] = useEditItemMutation();
  const [data, setData] = useState({
    id: 0,
    name: "",
    createdAt: new Date(),
    createdBy: "",
  });
  useEffect(() => {
    console.log(singleItem?.data[0]);
    setData({
      id: singleItem?.data[0]?.id || 0,
      name: singleItem?.data[0]?.name || "",
      createdAt: singleItem?.data[0]?.createdAt || new Date(),
      createdBy: singleItem?.data[0]?.createdBy || "",
    });
  }, [id, singleItemSuccess]);

  useEffect(() => {
    if (itemEdited) {
      alert("Item edited");
      navigate("/");
    }
    console.log("item unedited");
  }, [itemEdited]);

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
    editItem({ id, data });
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
            value={data?.id}
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
            value={data?.name}
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
            // dateFormat="dd/MM/YYYY"
            value={dateFormatter(new Date(data?.createdAt))}
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
            value={data?.createdBy}
          />
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Edit Item
        </button>
      </form>
    </div>
  );
}

export default EditItem;
