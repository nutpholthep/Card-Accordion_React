import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Accordion from "./page/Accordion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App() {
  const [data, setData] = useState([]);
  async function fetchdata() {
    let res = await axios.get(import.meta.env.VITE_URL_API);
    setData(res.data);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-6 justify-items-center mx-3 my-5">
      <ul>
        <li><Link to="/Accordion">Accordion</Link></li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/Accordion" element={<Accordion />}>
          Accordion
          </Route>
          <Route path="/" element={<Card />}>
            Card
          </Route>
        </Routes>
      </BrowserRouter>
      {/* {data.map((datas, index) => (
        <Card
          key={index}
          username={datas.username}
          img={datas.img}
          fname={datas.fname}
          lname={datas.lname}
          avatar={datas.avatar}
        />
      ))} */}
      {/* {data.map((datas, index) => (
        <Accordion
          key={index}
          username={datas.username}
          img={datas.img}
          fname={datas.fname}
          lname={datas.lname}
          avatar={datas.avatar}
        />
      ))}
     < Accordion /> */}
    </div>
  );
}
