import React from "react";
import styled from "styled-components";
import Header from "../component/common/Header";
var QRCode = require("qrcode.react");
const QRBlock = styled.div`
  margin: 1rem;
`;

const QrCodePage = () => {
  return (
    <>
      <Header title="QR 코드 생성"></Header>
      <QRBlock>
        <QRCode value="http://facebook.github.io/react/" />
        {/* finctech 벊호가 value 입력될 수 있게 만들엊 ㅜ세요 */}
      </QRBlock>
    </>
  );
};

export default QrCodePage;
