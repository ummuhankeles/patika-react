import React, { useState } from "react";

const initialFormValue = { fullname: "", phone_number: "" };

function Form({contacts, addContact}) {
    const [form, setForm] = useState(initialFormValue);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === '' || form.phone_number === '') {
            return false;
        }

        addContact([...contacts, form]);

        setForm(initialFormValue);
    }

    return (
        <form onSubmit={onSubmit} >
            <div className="form-box" >
                <input 
                    name="fullname" 
                    placeholder="fullname" 
                    value={form.fullname}
                    onChange={onChangeInput}
                />
            </div>

            <div className="form-box" >
                <input 
                    name="phone_number" 
                    placeholder="phone number"
                    value={form.phone_number}
                    onChange={onChangeInput}
                />
            </div>

            <div className="btn" >
                <button>Add</button>
            </div>
        </form>
    );
}
export default Form;
