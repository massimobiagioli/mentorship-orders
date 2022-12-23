import style from "./OrderCustomer.module.scss";

const OrderCustomer = ({customer}) => {
    return (
        <div className={style.Block}>
            <h3 className={style.Block_header}>CUSTOMER</h3>
            <div className={style.Block_content}>
                <div>{customer.firstname} {customer.lastname}</div>
                <div><a href={`mailto:${customer.email}`} className={style.Block_email}>{customer.email}</a></div>
            </div>
        </div>
    );
};

export default OrderCustomer
