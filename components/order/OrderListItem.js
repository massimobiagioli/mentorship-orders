import style from "./OrderListItem.module.scss";
import OrderCustomer from "./OrderCustomer";
import OrderItems from "./OrderItems";

const OrderListItem = ({order}) => {
    return (
        <li key={order.id} className={style.Block}>
            <section className={style.Block_header}>
                <div>
                    <div>ID: {order.code}</div>
                    <div>{order.created_at}</div>
                </div>
                <div>
                    <div>created</div>
                </div>
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
