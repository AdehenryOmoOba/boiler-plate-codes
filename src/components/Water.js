import React, { useState } from "react";
import {
  buyWater,
  orderWater,
  orderWaterByQty,
} from "../redux/reducers/waterReducer";
import { connect } from "react-redux";

const btnStyle = { marginInline: "0.1rem" };

function Water({ waterBottles, waterDispatch }) {
  const [waterQuantity, setWaterQuantity] = useState(1);
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

const mapStateToProps = (state) => {
  return { waterBottles: state.waterReducer.waterBottles };
};

const mapDispatchToProps = (dispatch) => {
  return { waterDispatch: dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Water);
