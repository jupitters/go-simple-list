import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CardComponent from './CardComponent';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserInterfaceProps {
    backendName: string; // go
}

const UserInterface: React.FC<UserInterfaceProps> = ({ backendName }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({name: '', email: ''});
  const [updateUser, setUpdateUser] = useState({id: '', name: '', email: ''});

  

  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await axios.get(`${apiUrl}/api/${backendName}/users`);
            setUsers(response.data.reverse());
        } catch (error) {
            console.log("Error fetching data: ", error);
        }
    };

    fetchData();
  }, [backendName, apiUrl]);

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      const response = await axios.post(`${apiUrl}/api/${backendName}/users`, newUser);
    }
  };

  return (
    <div className={`userInterface ${bgColor} ${backendName} w-full max-w-md p-4 my-4 rounded shadow`}>
        <Image src={`/${backendName}logo.svg`} width={80} height={80} alt={`${backendName} Logo`} className='w-20 h-20 mb-6 mx-auto' />
        <h2 className="text-x1 font-bold text-center text-white mb-6">{`${backendName.charAt(0).toUpperCase() + backendName.slice(1)} Backend`}</h2>

        <div className='space-y-4'>
            {users.map((user) => (
                <div key={user.id} className='flex items-center justify-between bg-white p-4 rounded shadow'>
                    <CardComponent card={user} />
                    {/* <button onClick={() => deleteUser(user.id)} className={`${btnColor } text-white py-2 px-4 rounded`}>
                        Delete User
                    </button> */}
                </div>
            ))}
        </div>
    </div>
  );
}

export default UserInterface