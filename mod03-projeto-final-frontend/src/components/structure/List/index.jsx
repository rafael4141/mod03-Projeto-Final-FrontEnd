import React, { useState, useEffect } from 'react'
import Card from '../Card';

const List = () => {
  const [lists, setList] = useState([]);

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    const request = await fetch('http://localhost:3001/list')
    const data = await request.json();
    console.log(data.list)
    setList(data.list);
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
      {lists.map((list) => (
        <Card data={list} key={list._id}/>
      ))}
    </div>
  )
}

export default List