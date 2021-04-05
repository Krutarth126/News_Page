import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios.get("https://article1229.herokuapp.com/readdata");
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
