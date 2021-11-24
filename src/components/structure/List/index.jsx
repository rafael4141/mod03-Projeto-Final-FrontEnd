import React, { useState, useEffect } from 'react'
import Card from '../Card';
import Api from "../../../api/api"

const List = () => {
  const list = new Api();
  const [lists, setList] = useState([]);

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    const request = await list.findAll();
    const data = await request.json();
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