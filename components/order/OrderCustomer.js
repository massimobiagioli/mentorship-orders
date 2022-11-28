import style from "./OrderCustomer.module.scss";

const OrderCustomer = ({customer}) => {
    return (
        <div className={style.Block}>
            <h3>CUSTOMER</h3>
            <div>{customer.firstname} {customer.lastname}</div>
            <div>{customer.email}</div>
        </div>
    );
};

export default OrderCustomer;
