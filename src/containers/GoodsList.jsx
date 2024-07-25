import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { v4 as uuidv4 } from "uuid";
import Goods from "../components/Goods";
import { increment } from "../store/cartSlice";

/**
 * get data from store
 * list data
 */
function GoodsList() {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    if (!t.classList.contains("add-to-cart")) return true;
    dispatch(increment(t.getAttribute("data-key")));
  };

  return (
    <>
      <div className="goods-field" onClick={clickHandler}>
        {goods.map((item) => (
          <Goods
            title={item.title}
            cost={item.cost}
            image={item.image}
            articul={item.articul}
            key={uuidv4()}
          />
        ))}
      </div>
    </>
  );
}

export default GoodsList;
