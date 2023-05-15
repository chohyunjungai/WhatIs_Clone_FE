import React from "react";

const Funding = (props) => {
  return (
    <div>
      {/* <div>{` id : ${props.item.postId}`}</div>
      <div>{` project :  ${props.item.title}`}</div>
      <div>{`deadline ${props.item.deadLine} `}</div> */}
      <img
        src="https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"
        alt=""
      />
      <div>{`name ${props.item.name} `}</div>
      <div>{`달성 ${props.item.targetAmount} %`}</div>
    </div>
  );
};
export default Funding;
