import axios from "axios";
import React, { useEffect, useState } from "react";
import RedCard from "./components/cards/red/RedCard";
import BlueCard from "./components/cards/blue/BlueCard";
import GreenCard from "./components/cards/green/GreenCard";
import GreyCard from "./components/cards/grey/GreyCard";
import "./App.scss";

function App() {
  const [cases_time, setCases_time] = useState({});
  const [stateWise, setStateWise] = useState([]);
  const [tested, setTested] = useState({});

  // useEffect(() => {
  // const dataSetter = (data) => {
  // // setCases_time(data.cases_time_series[data.cases_time_series.length - 1]);
  // setStateWise(data.statewise);
  // setTested(data.tested[data.tested.length - 1]);
  // };
  // axios
  // .get("https://api.covid19india.org/data.json")
  // .then((res) => {
  // dataSetter(res.data);
  // })
  // .catch((e) => console.log(e));
  // }, []);

  return (
    <div className="App">
      <RedCard />
      <BlueCard />
      <GreenCard />
      <GreyCard />
    </div>
  );
}

export default App;
