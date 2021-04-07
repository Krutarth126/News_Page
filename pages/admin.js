import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";

const Admin = () => {
  const [state, setState] = useState({
    heading: "",
    subheading: "",
    url: "",
    content: "",
  });

  const { heading, subheading, url, content } = state;

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(state);
    await axios.post("https://article1229.herokuapp.com/post", state);
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />

        <meta property="og:title" content="Indian Express" />
        <meta
          property="og:description"
          content="Get the latest news of whole country."
        />
        <meta
          property="og:image"
          content="https://timesofindia.indiatimes.com/thumb/msid-81923706,width-1200,height-900,resizemode-4/81923706.jpg"
        />
        <meta property="og:url" content="https://news-page.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="admin">
        <form onSubmit={submitHandler}>
          <div>
            <label>Heading:</label>
            <input
              type="text"
              name="heading"
              value={heading}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>SubHeading:</label>
            <input
              type="text"
              name="subheading"
              value={subheading}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="url"
              value={url}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label id="content">Content:</label>
            <textarea
              name="content"
              rows="20"
              cols="150"
              value={content}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin;
