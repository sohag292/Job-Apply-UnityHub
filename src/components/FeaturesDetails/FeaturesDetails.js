import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

export default function FeaturesDetails() {
  const friend = useLoaderData();
    const {friendId}= useParams();
    let details = {}
    if(friend){
      details = friend.find(data =>data.id === friendId)
    }

    console.log(details);
  return (
    <div><h4>Name: {friend.time}</h4></div>
  )
}
