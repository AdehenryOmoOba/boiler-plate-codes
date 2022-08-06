import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyCake,
  orderCake,
  orderCakeByAmount,
} from "../redux/slices/cakeSlice";

const btnStyle = { marginInline: "0.1rem" };

function Cake() {
  const [cakeQuantity, setCakeQuantity] = useState(1);
  const cakes = useSelector((state) => state.cakeSlice.numOfCakes);
  const cakeDispatch = useDispatch();

  return (
    <div>
      <h5>Number of cakes - {cakes}</h5>
      <button
        style={{ marginInline: "0.1rem" }}
        onClick={() => cakeDispatch(buyCake())}
      >
        Buy cake
      </button>
      <button
        style={{ marginInline: "0.1rem" }}
        onClick={() => cakeDispatch(orderCake())}
      >
        Order cake
      </button>
      <input
        style={{ marginInline: "0.1rem" }}
        value={cakeQuantity}
        onChange={(e) => setCakeQuantity(e.target.value)}
      />
      <button
        style={btnStyle}
        onClick={() => cakeDispatch(orderCakeByAmount(cakeQuantity))}
      >
        Order cake by quantity
      </button>
    </div>
  );
}

export default Cake;
