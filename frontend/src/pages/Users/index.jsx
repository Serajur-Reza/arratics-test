import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteUserMutation,
  useLazyGetUsersQuery,
} from "../../store/users/userSlice";
import { dateFormatter } from "../../utils/dateFormatter";

export default function Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [trigger, { data: users, isSuccess: userSuccess }] =
    useLazyGetUsersQuery();
  const [deleteUser, { isSuccess: userDeleted }] = useDeleteUserMutation();

  useEffect(() => {
    trigger();
    if (userSuccess) {
      setUserData(users?.data);
    }
    if (userDeleted) {
      alert("user Deleted");
    }
  }, [users?.data?.length, userSuccess, userDeleted]);

  const handleEdit = (id) => {
    console.log("editer:", id);
    navigate(`/users/edit/${id}`);
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      const tempData = users?.data?.filter((el) =>
        el?.name?.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setUserData(tempData);
    } else {
      setUserData(users?.data);
    }
  };

  console.log(users);
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
            <th>Email</th>
            <th>Password</th>
            <th>CreatedAt</th>
            <th>CreatedBy</th>
          </tr>
        </thead>
        {userData && userData.length ? (
          userData?.map((el) => (
            <tbody>
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.password}</td>
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
