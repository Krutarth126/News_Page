import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Article from "../components/Article";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [artData, setArt] = useState([]);
  const data = async () => {
    let result = await axios.get("http://84b48b3f91ac.ngrok.io/readdata");
    console.log(result.data);
    setArt(result.data);
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="boddy">
        {artData.map(({ heading, subheading, url, content, _id }, idx) => {
          return (
            <Article
              heading={heading}
              subheading={subheading}
              url={url}
              content={content}
              id={_id}
              idx={idx}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
