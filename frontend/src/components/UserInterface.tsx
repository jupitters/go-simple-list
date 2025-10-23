import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserInterfaceProps {
    backendName: string; // go
}

const UserInterface: React.FC<UserInterfaceProps> = ({ backendName }) => {
  const apuUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({name: '', email: ''});
  const [updateUser, setUpdateUser] = useState({id: '', name: '', email: ''});

  const backgroundColors: { [key: string]: string} = {
    go: 'bg-cyan-500',
  };
  const buttonColors: { [key: string]: string } = {
    go: 'bg-cyan-700 hover:bg-blue-600',
  };
  
  const bgColor = backgroundColors[backendName as keyof typeof backgroundColors] || 'bg-gray-200';
  const btnColor = buttonColors[backendName as keyof typeof buttonColors] || 'gb-gray-500 hover:bg-gray-600';
  
}

export default UserInterface