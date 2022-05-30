const Form = (props) => {

    const {myState} = props

    return (
        <section>
            <h1>Build Your Own Pizza</h1>
            {
                myState.map((size) => (
                    <article>
                        <h3>
                            
                        </h3>
                    </article>
                ))
            }
        </section>
    )

}

export default Form