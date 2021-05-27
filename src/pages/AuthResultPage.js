import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Header from "../components/common/Header";
import AuthButton from "../components/common/AuthButton";
import axios from "axios";
import qs from "qs";

import ListPage from "./ListPage";

const AuthResultPage = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);
  const [accessToken, setaccessToken] = useState("토큰 받아오기 전 데이터");

  const getAccessToken = () => {
    const sendData = qs.stringify({
      code: code,
      client_id: "10866f6e-c280-41e3-bcc0-c3df9cddbcca",
      client_secret: "cd76aef5-bb1e-4cb5-8acb-412577f8c714",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    });

    console.log(sendData);

    const option = {
      method: "POST",
      url: "/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: sendData,
    };
    //#homework : 해당 코드가 동작하게 변경해주세요 ! hint : proxy, json serialization on axios
    axios(option).then(response => {
      console.log(response.data);
      setaccessToken(response.data.access_token);
    });
  };

  return (
    <>
      <Header title={"사용자 발급 토큰 확인"}></Header>
      <p>사용자가 발급받은 사용자 코드는</p>
      <p>{code}</p>
      <p>사용자의 토큰은?</p>
      <p>{accessToken}</p>
      <button onClick={getAccessToken}>토큰 받기</button>
      <AuthButton title={"토큰받기"} handleClick={getAccessToken}></AuthButton>
      <ListPage token={accessToken} />
    </>
  );
};

export default AuthResultPage;
