import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";

const Home = () => {
  const [tutorial, setTutorial] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  

  const getTutorialS = async () => {
    const veri = await axios.get(BASE_URL);

    // console.log(veri.data);
    setTutorial(veri.data);
  };
  

  useEffect(() => {
    getTutorialS();
  }, []);

  console.log(tutorial);
  
  const postBilgi = async (veri) => {
    await axios.post(BASE_URL, veri);

    getTutorialS();
  };






  return (
    <>
      <AddBilgi postBilgi={postBilgi} />
      <BilgiList tutorial={tutorial}  getTutorialS={getTutorialS} />
    </>
  );
};

export default Home;
