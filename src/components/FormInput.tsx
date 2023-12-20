import React, { useEffect, useState } from 'react'

interface IFormInput {
    saveEmail?: (data: string) => void
    errValidate?: boolean
}

const FormInput: React.FC<IFormInput> = ({ saveEmail, errValidate }) => {
    const [email, setEmail] = useState(localStorage.getItem("email") ?? "")

    const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    useEffect(() => {
        saveEmail(email)
    }, [email])

    useEffect(() => {
        console.log(errValidate)
    }, [errValidate])

    return (
        <label className="form-control">
            <div className="label">
                <span className={`label-text ${errValidate ? ' text-red-600' : ''}`}>Email</span>
            </div>
            <input
                type="text"
                value={email}
                onChange={inputEmailHandler}
                placeholder="Type here"
                className={`input outline-none ${errValidate ? 'border border-red-600 placeholder:text-red-600' : ''}`}
            />
            {/* <div className="label">
                <span className="label-text-alt">Helper text</span>
            </div> */}
        </label>
    )
}

export default FormInput
