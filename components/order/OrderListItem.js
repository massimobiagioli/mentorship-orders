import style from "./OrderListItem.module.scss";
import OrderCustomer from "./OrderCustomer";
import OrderItems from "./OrderItems";
import OrderStatus from "./OrderStatus";

const OrderListItem = ({order}) => {
    return (
        <li key={order.id} className={style.Block}>
            <section className={style.Block_header}>
                <div>
                    <div>ID: {order.code}</div>
                    <div>{order.created_at}</div>
                </div>
                <OrderStatus order={order} />
            </section>
            <section className={style.Block_customer}>
                <OrderCustomer customer={order.customer} />
            </section>
            <section className={style.Block_items}>
                <OrderItems items={order.orderItems} />
            </section>
        </li>
    );
};

export default OrderListItem;
