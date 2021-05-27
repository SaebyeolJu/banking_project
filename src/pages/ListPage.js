import React from "react";

import Header from "../components/common/Header";

const ListPage = accessToken => {
  // get account list using axios from https://testapi.openbaking.or.kr/v.2.0/user/me
  const option = {
    method: "GET",
    url: "/oauth/2.0/token",
    headers: {
      Authorization: { accessToken },
    },
  };

  return (
    <>
      <Header title="계좌 목록 확인" />
      <button></button>
    </>
  );
};

export default ListPage;
