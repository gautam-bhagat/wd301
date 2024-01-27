import React from "react";

interface UserData {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  organisation_id: number;
  updatedAt: string;
}
const Dashboard: React.FC = () => {

    const storedData: string | null = localStorage.getItem("userData");
    const userData: UserData = JSON.parse(storedData!) as UserData;


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className=" w-1/2 px-6 py-8 bg-white flex flex-col justify-center rounded-lg shadow-md">
          <p>Name : {userData.name}</p>
          <p>Email : {userData.email}</p>
          <a id="logout-link" href="/" className="w-1/2 bg-gray-700 text-center hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4 mx-auto">Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
