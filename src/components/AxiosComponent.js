import React, { useState } from "react";
import axios from "axios";

const AxiosComponent = () => {
  const getData = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Korea&from=2021-04-26&sortBy=publishedAt&apiKey=f04510568ac84dff9c52853369a2c7fd"
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={getData}>데이터 가져오기</button>
    </div>
  );
};

export default AxiosComponent;
