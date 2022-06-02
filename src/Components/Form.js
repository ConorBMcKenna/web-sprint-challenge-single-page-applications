import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import * as yup from 'yup'


const initialFormValues = {
name: "",
size: "",
sauce: "",
topping1: false,
topping2: false,
topping3: false,
topping4: false,

}


const Form = (props) => {

    const formSchema = yup.object().shape({
        name: yup.string().min(2, "name must be at least 2 characters"),
        size: yup.string,
        sauce: yup.string().min(2, "Please Choose a Sauce"),
        topping1: yup.boolean().oneOf([true], "Please Choose an Option"),
        topping2: yup.boolean().oneOf([true], "Please Choose an Option"),
        topping3: yup.boolean().oneOf([true], "Please Choose an Option"),
        topping4: yup.boolean().oneOf([true], "Please Choose an Option"),
    
    })


    const history = useHistory ()
    

    const [form, setForm] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState({
        name: "",
        size: "",
        sauce: "",
        topping1: "",
        topping2: "",
        topping3: "",
        topping4: "",
    })

    const validateChange = (key, value) => {
        yup.reach(formSchema, key)
        .validate(value)
        .then(()=> {
            setErrors({...errors, [key]: ""})
        })
        .catch((error)=> {
            setErrors({...errors, [key]: error.errors[0]})
        })
    }

    function changeHandler(e) {
        // console.log(e)
        const { name, type, checked } = e.target;
        const value = type === "checkbox" ? checked : e.target.value;
        // console.log(name,value, type)
        validateChange(name, value);

        setForm({ ...form, [name]: value });
    }

    const submitHandler = (e) => {
        axios.post('https://reqres.in/api/orders', form)
            .then(res => {
                console.log(e)
            })
        

    }

    useEffect(()=> {
        formSchema.isValid(form)
        .then((enabled)=>{
            setDisabled(!enabled)
        })
    }, [form])

    return (
        <section>
            <h2>Build Your Own Pizza</h2>
                <form data-style="form" id='pizza-form' onSubmit={submitHandler} >
                    <label>
                        Name {errors.name}
                        <input onChange={changeHandler} 
                        id= "name-input"
                        name="name" 
                        value={form.name}type = "text" />
                    </label>
                    <div>{errors.name}</div>
                    <label>
                        Size 
                        <select value={form.size} name="size"  onChange={changeHandler}/>
                       
                        <option value="" >--Select One--</option>
                        <option value="1">--Small--</option>
                        <option value="2">--Medium--</option>
                        <option value="3">--Large--</option>
                    </label>
                    <label>
                        Sauce 
                        <input onChange={changeHandler} 
                        name="sauce"
                        type = "text" />
                    </label>
                    <label>
                        Pepperoni
                        <input onChange={changeHandler} 
                        name="topping1" 
                        type = "checkbox" checked={form.terms} />
                    </label>
                    <label>
                        Ham
                        <input onChange={changeHandler} 
                        name="topping2" 
                        type = "checkbox" checked={form.terms}/>
                    </label>
                    <label>
                        Chicken
                        <input onChange={changeHandler} 
                        name="topping3" 
                        type = "checkbox" checked={form.terms}/>
                    </label>
                    <label>
                        Cheese
                        <input onChange={changeHandler} 
                        name="topping4" 
                        type = "checkbox" checked={form.terms}/>
                    </label>
                    <label>
                        Substitute
                        <input onChange={changeHandler} 
                        name="substitute" 
                        type = "text" />
                    </label>
                    <label>
                        Special
                        <input onChange={changeHandler} 
                        id="special-text"
                        name="special" 
                        type = "text" />
                    </label>
                    <button type='submit' disabled={disabled}>Place Your Order!</button>
            </form>
                
        </section>
    )


}

export default Form