import OrderListItem from "./OrderListItem";
import style from "./OrderList.module.scss";

const OrderList = ({orders}) => {
    return (
        <ul className={style.Block}>
            {orders.map(order => (
                <OrderListItem key={order.code} order={order} />
            ))}
        </ul>
    );
};

export default OrderList;
