import React from "react";
import "./allTopic.scss";
import { Line } from "react-chartjs-2";
function AllTopic() {
  return (
    <div>
      <Line
        data={{
          labels: [],
          datasets: [
            { label: "", data: [], backgroundColor: "", borderColor: "" },
          ],
        }}
      />
    </div>
  );
}

export default AllTopic;
