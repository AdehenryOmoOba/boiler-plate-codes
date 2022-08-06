import React, { useState } from "react";
import {
  buyWater,
  orderWater,
  orderWaterByQty,
} from "../redux/slices/waterSlice";
import { useDispatch, useSelector } from "react-redux";

const btnStyle = { marginInline: "0.1rem" };

function Water() {
  const [waterQuantity, setWaterQuantity] = useState(1);
  const waterBottles = useSelector((state) => state.waterSlice.waterBottles);
  const waterDispatch = useDispatch();
  return (
    <div>
      <h5>Number of water bottles - {waterBottles}</h5>
      <button style={btnStyle} onClick={() => waterDispatch(buyWater())}>
        Buy water
      </button>
      <button style={btnStyle} onClick={() => waterDispatch(orderWater())}>
        Order water
      </button>
      <input
        style={{ marginInline: "0.1rem" }}
        value={waterQuantity}
        onChange={(e) => setWaterQuantity(e.target.value)}
      />
      <button
        style={btnStyle}
        onClick={() => waterDispatch(orderWaterByQty(waterQuantity))}
      >
        Order water by quantity
      </button>
    </div>
  );
}

export default Water;
