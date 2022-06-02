

const Order = (props) => {
    console.log(props)

    const [myState] = props

    return (
        <section>
            <h2>My Order</h2>
            {/* {
                myState.map((order) =>(
                    <article>
                       <h3> 
                           {'${order.name}'} 
                        </h3>
                        <p>{order.size}</p>
                        <p>{order.sauce}</p>
                        <p>{order.topping1}</p>
                        <p>{order.topping2}</p>
                        <p>{order.topping3}</p>
                        <p>{order.topping4}</p>
                        <p>{order.substitute}</p>
                        <p>{order.special}</p>
                    </article>
                ))
            } */}
        </section>
    )
}

export default Order