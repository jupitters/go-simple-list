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
}

export default UserInterface