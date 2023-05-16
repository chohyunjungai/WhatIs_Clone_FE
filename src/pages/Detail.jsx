import React from 'react'
import './Detail.scss'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Detail = () => {
    const [detailFunding, setDetailFunding]=useState([]);

    const getDetailData= async(id)=>{
        const response = await axios.get("http://43.201.181.250/posts/1");
        console.log('상세 get 요청 결과:', response)
        setDetailFunding(response.data.data)

      };

    useEffect(()=>{
        getDetailData();
    },[])

    // const detailFunding = [
    //     {
    //         id: 5,
    //         title: "역대급 함유량",
    //         category: "홈, 리빙",
    //         totalAmount: 100000,
    //         targetAmount: 50000,
    //         deadLine: new Date(),
    //         percentage: 200,
    //         name: "화장품",
    //         projectImage: "프로젝트이미지가 뭘까?",
    //         imageUrl: "어떤 형태가 되어야 하지? 주소 썼더니 에러뜨네",
    //         summary : “아주 좋은 화장품”,
    //         storyBoard : "이 제품은요. 아주 좋아요”,
    //         ikesStaus: false,
    //         likes: 5
    //     }
    // ]
    
  return (
    <div>

       <div className="container">
        <div className="detailimage">
            <img className="imageThumbnail" src={detailFunding.img}/>

        </div>
        <div className="detailsummary">
            {/* 카테고리 */}
            <div>{detailFunding.category}</div>
            <div>펀딩</div>
            {/* 제목 */}
            <div>{detailFunding.title}</div>
            <div>{detailFunding.summary}</div> 
            <div>{detailFunding.percentage}% 달성</div>
            <div>{detailFunding.totalAmount}</div>
            <div>{detailFunding.price} </div>
            {/* title: "역대급 함유량",
    //         category: "홈, 리빙",
    //         totalAmount: 100000,
    //         targetAmount: 50000,
    //         deadLine: new Date(),
    //         percentage: 200,
    //         name: "화장품",
    //         projectImage: "프로젝트이미지가 뭘까?",
    //         imageUrl: "어떤 형태가 되어야 하지? 주소 썼더니 에러뜨네",
    //         summary : “아주 좋은 화장품”,
    //         storyBoard : "이 제품은요. 아주 좋아요”,
    //         ikesStaus: false,
    //         likes: 5   */}
           
            </div>
       </div>
        
        
    </div>

   
  )
}

export default Detail;