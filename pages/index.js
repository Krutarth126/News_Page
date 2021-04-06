import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Article from "../components/Article";
import Footer from "../components/Footer";
import axios from "axios";

export const getServerSideProps = async () => {
  // const id = context.params.id;
  const res = await axios.get("https://article1229.herokuapp.com/readdata/");
  const data = res.data;

  return {
    props: { data: data },
  };
};

export default function Home({ data }) {
  // const [artData, setArt] = useState([]);
  // const data = async () => {
  //   let result = await axios.get("https://article1229.herokuapp.com/readdata");
  //   console.log(result.data);
  //   setArt(result.data);
  // };

  // useEffect(() => {
  //   data();
  // }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph */}

        <meta property="og:title" content={data.heading} key="ogtitle" />
        <meta
          property="og:description"
          content={data.subheading}
          key="ogdesc"
        />
      </Head>
      <Navbar />
      <div className="boddy">
        {data.map(({ heading, subheading, url, content, _id }, idx) => {
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
