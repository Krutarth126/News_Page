import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios.get("http://84b48b3f91ac.ngrok.io/readdata");
  const data = res.data;
  const paths = data.map((news) => {
    return {
      params: { id: news._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get("https://28f618d40b33.ngrok.io/readdata/" + id);
  const data = res.data;

  return {
    props: { news: data },
  };
};

const ArticleData = ({ news }) => {
  return (
    <>
      <Navbar />
      <div className="articleData">
        <img src={news.url} alt="" />
        <h1>{news.heading}</h1>
        <h3>{news.subheading}</h3>
        <p>{news.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default ArticleData;
