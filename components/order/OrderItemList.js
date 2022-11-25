const OrderItemList = ({order}) => {
    return (
        <li key={order.id}>{order.description}</li>
    );
};

export default OrderItemList;
