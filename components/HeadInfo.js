import Head from "next/head";
import React from "react";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta content={contents} />
    </Head>
  );
};

// props 의 초기값을 설정
HeadInfo.defaultProps = {
  title: "떼껄룩 저장소",
  keyword: "cat, 고양이, 야옹이, 떼껄룩, 껄룩이",
  contents: "Take a look!",
};

export default HeadInfo;
