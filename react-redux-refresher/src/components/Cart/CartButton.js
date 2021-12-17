import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/slices/uiSlice";
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch()
    const cartQuantity = useSelector(state => state.cart.totalQuantity)

    const toggleCartHandler = (e) => {
        e.preventDefault()
        dispatch(uiActions.toggle())
    }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;