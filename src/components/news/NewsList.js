import React from "react";

function NewsList({ news }) {
  return (
    <div>
      {news.map(data => {
        return <p>{data.title}</p>;
      })}
    </div>
  );
}

export default NewsList;
