// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import FilterBtn from "../components/FilterBtn";
// import { useQuery } from "react-query";
// import { allProject } from "../axios/posts";
// import ProjectCard from "../components/ProjectCard";
// import { FilterBtnData } from "../components/FilterBtnData";
// import { sortData } from "../components/FilterBtnData";
// import { arrowIcon } from "../Styles/config";
// import { mainListAPI } from "../Styles/config";

// export default function FundingListsPage({ history }) {
//   const [menuIdx, setMenuIdx] = useState(-1);
//   // const { isLoading, isError, data } = useQuery("allProject", allProject);
//   const [fundingList, setFundingList] = useState([]);

//   // if (isLoading) return <div>Loading...</div>;
//   // if (isError) return <div>Error: {Error.message}</div>;

//   const [selectedFilter, setSelectedFilter] = useState({
//     totalAmount: "all",
//     deadLine: "all",
//     createdAt: "all",
//     likes: "popular",
//   });
//   const [selectedFilterIdx, setSelectedFilterIdx] = useState({
//     category: 0,
//     likes: 0,
//     percentage: 0,
//     totalAmount: 0,
//     sort: 0,
//   });
//   const [projectData, setProjectData] = useState({ count: 0, results: [] });
//   const [currentItemIdx, setCurrentItemIdx] = useState(0);
//   const [currentLimit, setCurrentLimit] = useState(9);
//   let limit = 9;

//   const makeQueryString = (filterList) => {
//     let makeQuery = "?";
//     for (let i in filterList) {
//       if (filterList[i] !== "all") {
//         if (makeQuery.includes("=")) {
//           makeQuery += `&${i}=${filterList[i]}`;
//         } else {
//           makeQuery += `${i}=${filterList[i]}`;
//         }
//       }
//     }
//     return makeQuery;
//   };

//   const addFilter = (query, data, idx) => {
//     const newFilter = { ...selectedFilter };
//     newFilter[query] = data;
//     setSelectedFilter(newFilter);
//     const newFilterIdx = { ...selectedFilterIdx };
//     newFilterIdx[query] = idx;
//     setSelectedFilterIdx(newFilterIdx);
//   };
//   useEffect(() => {
//     const makeQuery = makeQueryString(selectedFilter);
//     history.push(makeQuery);
//   }, [history, selectedFilter]);
//   const resetFilter = () => {
//     setSelectedFilter({
//       totalAmount: "all",
//       deadLine: "all",
//       createdAt: "all",
//       likes: "popular",
//     });
//     setSelectedFilterIdx({
//       category: 0,
//       likes: 0,
//       percentage: 0,
//       totalAmount: 0,
//       sort: 0,
//     });

//     setCurrentItemIdx(0);
//     setCurrentLimit(9);
//     history.push("/");
//   };

//   const getProjectData = (modifier) => {
//     if (modifier === "last") {
//       alert("더이상 데이터가 없습니다.");
//     } else if (modifier === "inf") {
//       fetch(
//         `${mainListAPI}${window.location.search}&offset=${currentItemIdx}&limit=${limit}`
//       )
//         .then((res) => res.json())
//         .then((res) => {
//           setProjectData((prev) => ({
//             count: res.count,
//             results: [...prev.results, ...res.results],
//           }));
//         });
//     } else if (modifier === "query") {
//       fetch(`${mainListAPI}${window.location.search}&offset=0&limit=${limit}`)
//         .then((res) => res.json())
//         .then((res) => {
//           setProjectData({
//             count: res.count,
//             results: [...res.results],
//           });
//         });
//     } else {
//       fetch(
//         `${mainListAPI}${
//           window.location.search
//         }&offset=${currentItemIdx}&limit=${
//           projectData.count - projectData.results.length
//         }`
//       )
//         .then((res) => res.json())
//         .then((res) => {
//           setProjectData((prev) => ({
//             count: res.count,
//             results: [...prev.results, ...res.results],
//           }));
//         });
//     }
//   };
//   useEffect(() => {
//     getProjectData("query");
//   }, [window.location.search]);

//   useEffect(() => {
//     getProjectData();
//     window.addEventListener("scroll", infiniteScroll);
//     return () => window.removeEventListener("scroll", infiniteScroll);
//   }, []);
//   const infiniteScroll = () => {
//     let scrollHeight = Math.max(
//       document.documentElement.scrollHeight,
//       document.body.scrollHeight
//     );

//     let scrollTop = Math.max(
//       document.documentElement.scrollTop,
//       document.body.scrollTop
//     );
//     let clientHeight = document.documentElement.clientHeight;
//     if (scrollTop + clientHeight > scrollHeight - 0.1) {
//       setIsWindowBottom(true);
//     } else {
//       setIsWindowBottom(false);
//     }
//   };
//   useEffect(() => {
//     if (isWindowBottom) {
//       let itemIdx = currentItemIdx + 9;

//       if (itemIdx + currentLimit === projectData.count) {
//         getProjectData("last");
//       } else if (itemIdx + currentLimit > projectData.count) {
//         getProjectData("lastOffset");
//       } else {
//         setCurrentItemIdx(itemIdx);
//         getProjectData("inf");
//       }
//     }
//   }, [isWindowBottom]);
//   return (
//     <>
//       <Filterbar>
//         <FilterWrap>
//           <FilterLeft>
//             {FilterBtnData.map((data) => {
//               return (
//                 <FilterBtn key={data.id} clicked={() => showMenu(data.id)}>
//                   {selectedFilter[data.query] === "all"
//                     ? data.title
//                     : data.subTab[selectedFilterIdx[data.query]]["title"]}
//                   <img alt="arrow_image" src={arrowIcon} />
//                   {/* {isDropDownView && menuIdx === data.id && (
//                     <FilterDropdown
//                       subTabData={data.subTab}
//                       addFilter={addFilter}
//                     />
//                   )} */}
//                 </FilterBtn>
//               );
//             })}
//           </FilterLeft>
//           <FilterBtn clicked={resetFilter}>필터 초기화</FilterBtn>
//         </FilterWrap>
//       </Filterbar>
//       <div>
//         <h1>FundingListsPage</h1>
//         <div>
//           <ProjectContent>
//             {projectData?.results.map((data, idx) => {
//               return (
//                 <ProjectCard
//                   id={data.postId}
//                   title={data.title}
//                   thumbnail={data.imageUrl}
//                   price={data.price}
//                   totalAmount={data.totalAmount}
//                   targetAmount={data.targetAmount}
//                   deadLine={data.deadLine}
//                   percentage={data.percentage}
//                   name={data.name}
//                   likeStatus={data.likeStatus}
//                   likes={data.likes}
//                 />
//               );
//             })}
//           </ProjectContent>
//         </div>
//       </div>
//     </>
//   );
// }
// const Filterbar = styled.div`
//   margin-top: 66px;
//   height: 54px;
//   background-color: white;
//   border-bottom: 1px solid rgb(230, 230, 230);
// `;

// const FilterWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 1000px;
//   margin: 0 auto;
//   padding-top: 10px;
// `;

// const FilterLeft = styled.div`
//   display: flex;
// `;

// const ProjectWrap = styled.div`
//   width: 1000px;
//   height: 2000px;
//   margin: 0 auto;
// `;

// const ProjectHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   margin: 0px auto;
//   padding: 14px 0px;
//   font-size: 16px;
//   line-height: 27px;

//   span {
//     color: ${(props) => props.theme.fontPointColor};
//   }
// `;

// const ProjectContent = styled.section`
//   display: flex;
//   flex-flow: wrap;
// `;
