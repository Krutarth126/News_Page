import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

// export const getStaticPaths = async () => {
//   const res = await axios.get("https://article1229.herokuapp.com/readdata");
//   const data = res.data;
//   const paths = data.map((news) => {
//     return {
//       params: { id: news._id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    "https://article1229.herokuapp.com/readdata/" + id
  );
  const data = res.data;

  return {
    props: { news: data },
  };
};

const ArticleData = ({ news }) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={news.heading} />
        <meta property="og:description" content={news.subheading} />
        <meta property="og:image" content={news.url} />
        <meta
          property="og:url"
          content={`https://news-page11.vercel.app/${news._id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="articleData">
        <img src={news.url} alt="" />
        <h1>{news.heading}</h1>
        <h3>{news.subheading}</h3>
        <p>{news.content}</p>
      </div>
    </>
  );
};

export default ArticleData;
