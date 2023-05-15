import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { allProject } from "../axios/posts";
import Funding from "../components/Funding";
import MenuCategory from "../components/MenuCategory";
import axios from "axios";
import "./FundingLists.scss";

const FundingListsPage = () => {
  const { isLoading, isError, data } = useQuery("allProject", allProject);
  const [fundingList, setFundingList] = useState([]);
  console.log(data);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {Error.message}</div>;

  const URL = "http://43.201.181.250";

  useEffect(() => {
    FundingListsPage();
  }, []);

  function FundingListsPage() {
    axios({
      method: "get",
      params: {
        category: "aaa",
      },
      url: URL + "/posts",
      headers: {
        Access_Token: "Bearer " + "token",
        Refresh_Token: "Bearer " + "token",
      },
    })
      .then(function (response) {
        console.log(response.data);

        const myList = response.data["data"];
        setFundingList(myList);
      })
      .then(function (error) {
        console.log(error);
      });
  }

  // useEffect(() => {
  // 서버에 데이터 요청
  // 현재 컴포넌트에서 필요한 데이터를 요청함

  return (
    <div>
      <h1>FundingListsPage</h1>
      <div>
        <div className="funding-card">
          {fundingList.map((item) => (
            <div>
              <Funding item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundingListsPage;
