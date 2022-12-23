import style from "./OrderStatus.module.scss";
import classNames from "classnames";

const OrderStatus = ({order}) => {
    const statusClassName = classNames(style.Block, {
        [style.Block___created]: order.status === "created",
        [style.Block___canceled]: order.status === "canceled",
        [style.Block___shipped]: order.status === "shipped",
    });

    return (
        <div className={statusClassName}>{order.status}</div>
    );
};

export default OrderStatus;
