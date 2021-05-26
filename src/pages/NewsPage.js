import axios from "axios";
import React, { useState } from "react";
import Header from "../components/common/Header";
import NewsList from "../components/news/NewsList";
import Search from "../components/news/Search";

const NewsPage = () => {
  const [news, setnews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChangeInput = e => {
    const { value, name } = e.target;
    console.log(value);
    setSearchText(value);
  };
  const handleClickSearchButton = () => {
    //   axios 요청 보내기
    console.debug("test");
    let newsUrl = `https://newsapi.org/v2/everything?from=2021-04-26&sortBy=publishedAt&q=${searchText}&apiKey=f04510568ac84dff9c52853369a2c7fd
&language=ko`;
    axios.get(newsUrl).then(response => {
      let resultNewsList = response.data.articles;
      setnews(resultNewsList);
    });
  };

  return (
    <div>
      <Header title="뉴스검색"></Header>
      {/* Header 컴포넌트 작성 */}
      <Search
        handleChangeSearchInput={handleChangeInput}
        handleClickSearchButton={handleClickSearchButton}
      ></Search>
      {/* Search 컴포넌트 작성 */}
      <NewsList news={news}></NewsList>
      {/* NewsList 컴포넌트 작성 */}
    </div>
  );
};

export default NewsPage;
