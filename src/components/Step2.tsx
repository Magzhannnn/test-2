import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Modal from '../UI/ModalContent'
import FormCheckbox from './FormCheckbox'
import FormInput from './FormInput'

const Step2 = () => {
    const [text, setText] = useState('')
    const [isActive, setIsActive] = useState(false)
    const email = localStorage.getItem('email') ?? ''
    const history = useHistory()

    const handleClick = () => {
        // Пример перехода на другой путь
        history.push('/login/step-1')
    }

    const sendEmailHandler = () => {
        fetch(`http://localhost:4040/api/endpoint`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(email),
        })
            .then((res) => res.json())
            .then((data) => {
                setText('Success!')
                setIsActive(true)
            })
            .catch((err) => {
                setText('Error!')
                setIsActive(true)
            })
    }

    useEffect(() => {
        console.log(isActive)
    }, [isActive])

    useEffect(() => {
        console.log(text)
    }, [text])

    const exitModalHandler = () => {
        setText('')
        setIsActive(false)
    }

    return (
        <div>
            <FormInput saveEmail={() => console.log('data')} errValidate={false} />
            <div className="p-1"></div>
            <div className="flex gap-2 items-center justify-between absolute bottom-10 w-[90%] left-1/2 -translate-x-1/2">
                <button
                    className="btn btn-primary mt-auto w-[45%] bg-slate-800 border border-slate-800 text-white"
                    onClick={handleClick}
                >
                    Back
                </button>
                <button className="btn btn-primary mt-auto w-[45%]" onClick={sendEmailHandler}>
                    Confirm
                </button>
            </div>
            <Modal isActive={isActive} text={text} exitModal={exitModalHandler} />
        </div>
    )
}

export default Step2
