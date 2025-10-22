import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserInterfaceProps {
    backendName: string; // go
}

const UserInterface: React.FC<UserInterfaceProps> = ({ backendName }) => {
  return (
    <div>UserInterface</div>
  )
}

export default UserInterface