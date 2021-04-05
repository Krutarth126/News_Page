import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

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
    await axios.post("http://localhost:8000/post", state);
  };
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Admin;
