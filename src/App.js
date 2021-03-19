import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [cases_time, setCases_time] = useState({});
  const [stateWise, setStateWise] = useState([]);
  const [tested, setTested] = useState({});

  useEffect(() => {
    const dataSetter = (data) => {
      setCases_time(data.cases_time_series[data.cases_time_series.length - 1]);
      setStateWise(data.statewise);
      setTested(data.tested[data.tested.length - 1]);
    };
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        dataSetter(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return <div className="App"></div>;
}

export default App;
