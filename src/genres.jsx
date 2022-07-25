import React from "react";

const Genres = props => {
  const { items } = props;

  return (
    <ul>
      {items.map(item =>(<li key={item._id}></li>))}
    </ul>
  )
}

export default Genres;