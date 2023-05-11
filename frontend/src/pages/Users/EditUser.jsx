import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditUserMutation,
  useGetSingleUserQuery,
} from "../../store/users/userSlice";
import { dateFormatter } from "../../utils/dateFormatter";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: singleUser, isSuccess: singleUserSuccess } =
    useGetSingleUserQuery(id);
  const [editUser, { isSuccess: userEdited }] = useEditUserMutation(id);
  const [data, setData] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    createdAt: new Date(),
    createdBy: "",
  });
  useEffect(() => {
    setData({
      id: singleUser?.data[0]?.id || 0,
      name: singleUser?.data[0]?.name || "",
      email: singleUser?.data[0]?.email || "",
      password: singleUser?.data[0]?.password || "",
      createdAt: singleUser?.data[0]?.createdAt || new Date(),
      createdBy: singleUser?.data[0]?.createdBy || "",
    });
  }, [singleUser, id]);

  useEffect(() => {
    if (userEdited) {
      alert("user edited");
      navigate("/users");
    }
    console.log("user unedited");
  }, [userEdited]);

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
    editUser({ id, data });
  };

  console.log(singleUser);
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
            Email
          </label>
          <input
            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="email"
            placeholder="email"
            id="forms-labelOverInputCode"
            name="email"
            onChange={handleChange}
            required
            value={data?.email}
          />
        </div>

        <div className="text-gray-700">
          <label className="block mb-1" for="forms-labelOverInputCode">
            Password
          </label>
          <input
            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="password"
            placeholder="password"
            id="forms-labelOverInputCode"
            name="password"
            onChange={handleChange}
            required
            value={data?.password}
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
          Edit User
        </button>
      </form>
    </div>
  );
}

export default EditUser;
