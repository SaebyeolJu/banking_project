import React from "react";
import Header from "../components/common/Header";
import AuthButton from "../components/common/AuthButton";

const MainPage = () => {
  const openUserAuthPage = () => {
    let tmpWindow = window.open("about:blank");
    let clientId = "10866f6e-c280-41e3-bcc0-c3df9cddbcca";
    let authPageUrl = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
    tmpWindow.location.href = authPageUrl;
  };

  return (
    <div>
      <Header title="사용자 인증"></Header>
      <button onClick={openUserAuthPage}>temp</button>
      <AuthButton title="인증받기" onClick={openUserAuthPage} />
    </div>
  );
};

export default MainPage;
