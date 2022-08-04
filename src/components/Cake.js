import React, { useState } from "react";
import { connect } from "react-redux";
import {
  buyCake,
  orderCake,
  orderCakeByQty,
} from "../redux/reducers/cakeReducer";

const btnStyle = { marginInline: "0.1rem" };

function Cake({ cakes, cakeDispatch }) {
  const [cakeQuantity, setCakeQuantity] = useState(1);

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
        onClick={() => cakeDispatch(orderCakeByQty(cakeQuantity))}
      >
        Order cake by quantity
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cakes: state.cakeReducer.numOfCakes };
};

const mapDispatchToProps = (dispatch) => {
  return { cakeDispatch: dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
