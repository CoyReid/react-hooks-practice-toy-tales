import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then(data => setToys(data))
  }, [])

  function handleDeleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    const updatedToys = toys.filter((toy => toy.id !== id))
    setToys(updatedToys)
  }

  function handleLikeToy(id, updatedToy) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedToy)
    })
    const updatedToys = toys.map((toy) => toy.id === id ? updatedToy : toy)
    setToys(updatedToys)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onNewToy(newToy) {
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={onNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>{showForm ? "Close Add Toy Form" : "Add a Toy"}</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDeleteToy} onLike={handleLikeToy}/>
    </>
  );
}

export default App;
