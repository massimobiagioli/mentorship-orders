import style from "./OrderItems.module.scss";

function calculateTotal(items) {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
}

const OrderItems = ({items}) => {
    return (
        <div className={style.Block}>
            <h3>ITEMS</h3>
            {items.map(item => (
                <div key={item.code} className={style.Block_item}>
                    <div>
                        <div>{item.code}</div>
                        <div>{item.description}</div>
                    </div>
                    <div>
                        <div>{item.price.toFixed(2)}€</div>
                        <div>X{item.quantity}</div>
                    </div>
                </div>
            ))}
            <div className={style.Block_total}>
                <div>TOT</div>
                <div>{calculateTotal(items)}€</div>
            </div>
        </div>
    );
};

export default OrderItems;
