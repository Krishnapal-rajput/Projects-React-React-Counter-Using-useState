import React from "react";

export default function Button({ imageUrl, title, onClick }) {
  return (
    <button onClick={onClick} title={title}>
      <img src={imageUrl} alt="button" />
    </button>
  );
}
