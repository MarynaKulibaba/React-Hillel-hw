import PropTypes from "prop-types";

function Goods(props) {
  return (
    <div className="goods-block">
      <img src={props.image} alt="" />
      <p>{props.title}</p>
      <p>{props.cost}</p>
      <button className="add-to-cart" data-key={props.articul}>
        Add to cart
      </button>
    </div>
  );
}

Goods.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  articul: PropTypes.string.isRequired,
};

export default Goods;
