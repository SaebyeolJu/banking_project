import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../list/Card";

const ListPage = () => {
  const [acountList, setAccountList] = useState([]);
  useEffect(() => {
    getAccountList();
  }, []);
  const getAccountList = () => {
    const option = {
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        user_seq_no: localStorage.getItem("userSeqNum"),
      },
    };
    axios(option).then(response => {
      console.log(response.data);
      setAccountList(response.data.res_list);
    });
  };

  const handleQrClick = () => {};

  const handleBalaceClick = () => {};

  //getAccountList useEffect 활용해서 불러오기 불러온다음에 acountList set 해주기

  return (
    <>
      <p>계좌 목록 확인</p>
      {acountList.map(account => {
        return (
          <Card
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
            handleQrClick={handleQrClick}
            handleBalaceClick={handleBalaceClick}
          ></Card>
        );
      })}
    </>
  );
};

export default ListPage;
