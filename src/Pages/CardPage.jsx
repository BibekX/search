import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import AddCard from "../Components/AddCard";
import Search from "../Components/Search";

export default function CardPage() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.getItem("links")
      ? setList(JSON.parse(localStorage.getItem("links")))
      : localStorage.setItem("links", JSON.stringify([]));
  }, []);

  const upVote = (index) => {
    let newList = [...list];
    newList[index].count++;
    setList(newList);
    localStorage.setItem("links", JSON.stringify(newList));
  };

  const downVote = (index) => {
    let newList = [...list];
    newList[index].count--;
    setList(newList);
    localStorage.setItem("links", JSON.stringify(newList));
  };

  const deleteItem = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    localStorage.setItem("links", JSON.stringify(newList));
  };

  return (
    <div>
      <Search search={(data) => setValue(data)} />
      <CardList
        data={list}
        upVote={upVote}
        downVote={downVote}
        delete={deleteItem}
        search={value}
      />
      <AddCard
        getName={(name) => {
          setList((prevValue) => [...prevValue, { title: name, count: 0 }]);
          localStorage.setItem(
            "links",
            JSON.stringify([...list, { title: name, count: 0 }])
          );
        }}
      />
    </div>
  );
}
