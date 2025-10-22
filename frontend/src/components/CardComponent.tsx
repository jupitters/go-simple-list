import React from 'react'

interface Card {
    id: number;
    name: string;
    email: string;
}

const CardComponent: React.FC<{ card: Card}> = ({ card }) => {
  return (
    <div>CardComponent</div>
  )
}

export default CardComponent