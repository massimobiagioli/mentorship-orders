import OrderItemList from "./OrderItemList";
import style from "./OrderList.module.scss";

const OrderList = ({orders}) => {
    return (
        <ul className={style.Block}>
            {orders.map(order => (
                <OrderItemList key={order.code} order={order} />
            ))}
        </ul>
    );
};

export default OrderList;
