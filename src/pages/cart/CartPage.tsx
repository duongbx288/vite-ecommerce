import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { decrementItem, incrementItem } from "../../store/cartSlice";

const CartPage = () => {
  // Get list item from cart state
  const itemList = useAppSelector((state) => state.cart.itemList);

  const dispatch = useAppDispatch();

  const onIncrement = (item: any) => {
    if (item && item.id && typeof item.id === "string") {
      dispatch(incrementItem(item));
    } else {
      console.log("Failed");
    }
  };

  const onDecrement = (item: any) => {
    if (item && item.id && typeof item.id === "string") {
      dispatch(decrementItem(item));
    } else {
      console.log("Failed");
    }
  };

  const onIncrementClicked = () => {};

  const renderList = itemList.map((item) => {
    return (
      <div key={item.id}>
        <div>
          <h5>
            <Link to={`/vite-ecommerce/product/` + item.id}>Name:{item.name}</Link>
          </h5>
          <p>Description: {item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
        <button onClick={() => onIncrement(item)}>+</button>
        <button onClick={() => onDecrement(item)}>-</button>
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default CartPage;
