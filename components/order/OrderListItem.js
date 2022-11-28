import style from "./OrderListItem.module.scss";
import OrderCustomer from "./OrderCustomer";
import OrderItems from "./OrderItems";

const OrderListItem = ({order}) => {
    return (
        <div className={style.Block}>
            <section className={style.Block_header}>
                <div>
                    <div>ID: {order.code}</div>
                    <div>{order.created_at}</div>
                </div>
                <div>
                    <div>created</div>
                </div>
            </section>
            <li key={order.id} className={style.Block_body}>
                <OrderCustomer customer={order.customer} />
                <OrderItems items={order.orderItems} />
            </li>
        </div>
    );
};

export default OrderListItem;
