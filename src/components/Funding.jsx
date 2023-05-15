// import React from "react";
// import { useHistory } from 'react-router-dom';

// const ProjectCard = (props) => {
//   const history = useHistory();

//   const goToDetail = id => {
//     history.push(`/posts/${id}`);
//   };

//   return (

//     <ProjectCardStyled>
//       <CardWrap>
//         <ThumbnailWrap>
//           <img
//             onClick={() => goToDetail(id)}
//             src={thumbnail}
//             alt={name + 'image'}
//           />
//           <LikeButton icon={isLike ? fullHeart : emptyHeart} />
//         </ThumbnailWrap>
//         <ProjectContentWrap>
//           <ProjectName onClick={() => goToDetail(id)}>{name}</ProjectName>
//           <ProjectSubInfo>
//             <span>{category}</span>
//             <span>{author}</span>
//           </ProjectSubInfo>
//           <ProjectSummary>{summary}</ProjectSummary>
//         </ProjectContentWrap>
//         <PercentageBar fundingRate={fundingRate} />
//         <FundingStatus>
//           <span>{currnetAmount.toLocaleString()}원</span>
//           <span>{fundingRate}%</span>
//           <span>{limitDate}일 남음</span>
//         </FundingStatus>
//       </CardWrap>
//     </ProjectCardStyled>
//   );
// }
// const ProjectCardStyled = styled.article`
//   width: 33%;
//   padding: 0 14px;
// `;

// const CardWrap = styled.div`
//   margin: 0px 0px 84px;
// `;

// const ThumbnailWrap = styled.div`
//   position: relative;
//   width: 100%;
//   height: 202px;
//   overflow: hidden;
//   border-radius: 5px;

//   img {
//     width: 100%;
//     height: 100%;
//     transition: transform 0.2s ease 0s;
//     :hover {
//       transform: scale(1.05);
//       cursor: pointer;
//     }
//   }
// `;

// const LikeButton = styled.button`
//   display: block;
//   position: absolute;
//   right: -5px;
//   top: 20px;
//   width: 30px;
//   height: 30px;
//   transform: translate(-50%, -50%);
//   background-image: url(${props => props.icon});
//   background-repeat: no-repeat;
//   background-size: 30px;
//   z-index: 3;
// `;

// const ProjectContentWrap = styled.div`
//   min-height: 178px;
//   padding-top: 16px;
// `;

// const ProjectName = styled.h1`
//   margin-bottom: 16px;
//   font-size: 20px;
//   font-weight: 700;
//   line-height: 29px;
// `;

// const ProjectSubInfo = styled.p`
//   padding-bottom: 10px;
//   color: rgb(158, 158, 158);
//   font-size: 13px;
//   line-height: 20px;

//   span {
//     &:last-child::before {
//       content: '|';
//       margin: 0px 6px;
//       color: rgb(208, 208, 208);
//       font-size: 9px;
//     }
//   }
// `;

// const ProjectSummary = styled.div`
//   margin-bottom: 16px;
//   color: #3d3d3d;
//   font-style: 14px;
//   font-weight: 400;
//   line-height: 24px;
// `;

// const PercentageBar = styled.div`
//   height: 2px;
//   background: rgb(208, 208, 208);
//   overflow: hidden;

//   &::after {
//     display: block;
//     content: '';
//     width: ${props => props.fundingRate}%;
//     height: 100%;
//     background: ${props => props.theme.fontPointColor};
//   }
// `;

// const FundingStatus = styled.div`
//   display: flex;
//   height: 35px;
//   align-items: flex-end;
//   font-size: 14px;
//   line-height: 24px;
//   span {
//     &:nth-child(1) {
//       color: #3d3d3d;
//       font-size: 18px;
//       line-height: 27px;
//     }
//     &:nth-child(2) {
//       margin-left: 6px;
//       color: ${props => props.theme.fontPointColor};
//     }
//     &:nth-child(3) {
//       margin-left: auto;
//       color: #9e9e9e;
//     }
//   }
// `;
//     <div>
//       <div>{` id : ${props.item.postId}`}</div>
//       <div>{` project :  ${props.item.title}`}</div>
//       <div>{`deadline ${props.item.deadLine} `}</div>
//       <img
//         src="https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"
//         alt=""
//       />
//       <div>{`name ${props.item.name} `}</div>
//       <div>{`달성 ${props.item.targetAmount} %`}</div>
//     </div>
//   );
// };
// export default ProjectCard;
