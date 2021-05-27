import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import AuthButton from "../components/common/AuthButton";

const AuthResultPage = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);

  // proxcy setting

  const getAccessToken = () => {
    const option = {
      method: "POST",
      url: "/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        code: code,
        client_id: "10866f6e-c280-41e3-bcc0-c3df9cddbcca",
        client_secret: "cd76aef5-bb1e-4cb5-8acb-412577f8c714",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
    };
    axios(option).then(response => {
      console.log(response.data);
    });
  };

  return (
    <>
      <div>
        <p>사용자가 발급받은 사용자 코드는 </p>
        <p>{code}</p>
        <button onClick={getAccessToken}></button>
        <AuthButton title={"토큰 받기"} onClick={getAccessToken}>
          토큰 받기
        </AuthButton>
      </div>
    </>
  );
};

export default AuthResultPage;
