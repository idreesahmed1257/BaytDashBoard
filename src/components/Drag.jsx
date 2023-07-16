import { Rnd } from "react-rnd";
import PieChart from "./PieChart";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

const Drag = () => {
  return (
    <Rnd
      style={style}
      default={{
        x: 0,
        y: 0,
        width: 420,
        height: 300
      }}
     
    >
      <PieChart />
    </Rnd>
  );
};

export default Drag;
