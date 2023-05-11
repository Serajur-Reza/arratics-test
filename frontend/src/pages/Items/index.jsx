import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteItemMutation,
  useLazyGetItemsQuery,
} from "../../store/item/itemSlice";
import { dateFormatter } from "../../utils/dateFormatter";

export default function Items() {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState([]);
  const [trigger, { data: items, isSuccess: getItemsSuccess }] =
    useLazyGetItemsQuery();
  const [deleteItem, { isSuccess: itemDeleted }] = useDeleteItemMutation();

  const handleEdit = (id) => {
    console.log("editer:", id);
    navigate(`/items/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
    deleteItem(id);
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      const tempData = items?.data?.filter((el) =>
        el?.name?.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setItemData(tempData);
    } else {
      setItemData(items?.data);
    }
  };

  useEffect(() => {
    trigger();
    if (getItemsSuccess) {
      setItemData(items?.data);
    }
    if (itemDeleted) {
      alert("item Deleted");
    }
  }, [items?.data?.length, getItemsSuccess, itemDeleted]);

  return (
    <div>
      <div className="text-gray-700">
        <label className="block mb-1" for="forms-labelOverInputCode">
          Search
        </label>
        <input
          className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          placeholder="search by name"
          id="forms-labelOverInputCode"
          name="name"
          onChange={handleSearch}
          // required
        />
      </div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>CreatedAt</th>
            <th>CreatedBy</th>
          </tr>
        </thead>

        {itemData && itemData?.length ? (
          itemData?.map((el) => (
            <tbody>
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{dateFormatter(el.createdAt)}</td>
                <td>{el.createdBy}</td>
                <td>
                  <button
                    className="h-8 px-4 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                    onClick={() => handleEdit(el._id)}
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    className="h-8 px-4 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                    onClick={() => handleDelete(el._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </table>
    </div>
  );
}
