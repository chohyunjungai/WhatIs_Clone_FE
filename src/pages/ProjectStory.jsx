import React from "react";
import { useState } from "react";
import axios from "axios";

const ProjectStory = () => {
  const [file, setFile] = useState();
  const fileUpload = async () => {
    // 서버 개발자가 s3의 signed url 을 받아오는 api를 제공한다
    const res = await axios.post("~~~~");
    // res.body.signedUrl
    const fileUploadRes = await axios.put(res.body.signedUrl, file);
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          console.log("e.target.files[0]: ", e.target.files[0]);
          setFile(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default ProjectStory;
