import React, { useState, useEffect } from "react";
import { dateFormatter } from "../../utils/dateFormatter";
import { useCreateUserMutation } from "../../store/users/userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const [createUser, { isSuccess: userCreated }] = useCreateUserMutation();
  const [data, setData] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    createdAt: new Date(),
    createdBy: "",
  });
  const handleChange = (e) => {
    if (e.target.name === "createdAt") {
      console.log(e.target.value);
      setData({ ...data, [e.target.name]: dateFormatter(e.target.value) });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (userCreated) {
      alert("user created");
      navigate("/users");
    }
  }, [userCreated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    createUser(data);
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
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
