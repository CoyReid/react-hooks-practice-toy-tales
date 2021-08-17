import React from "react";

function ToyCard({toy, onDelete, onLike}) {
  
  function handleDeleteClick() {
    onDelete(toy.id)
  }

  function handleLikeClick() {
    const updatedToy = {
      ...toy,
      likes: toy.likes + 1,
    }
    onLike(toy.id, updatedToy)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.alt}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
