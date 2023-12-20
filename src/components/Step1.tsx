import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router'
import FormCheckbox from './FormCheckbox'
import FormInput from './FormInput'

const Step1 = () => {
    const [counter, setCounter] = useState(0)
    const [currentEmail, setCurrentEmail] = useState(localStorage.getItem('email') ?? '')
    const [timer, setTimer] = useState(0)
    const [timerRunning, setTimerRunning] = useState(false)
    let timerInterval: NodeJS.Timeout
    const [isActive, setActive] = useState(JSON.parse(localStorage.getItem('isAgree') ?? 'false'))

    const history = useHistory()

    const handleClick = () => {
        // Пример перехода на другой путь
        history.push('/login/step-2')
    }

    const handleMouseDown = () => {
        const res = currentEmail.split('@').filter((i) => i.length > 0)
        console.log(res)
        if (res.length < 2 || !isActive) {
            setCounter((prev) => prev + 1)
            return
        }

        localStorage.setItem('email', currentEmail)
        handleClick()

        setCounter(0)

        const startTime = Date.now()
        setTimerRunning(true)

        timerInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime
            setTimer(elapsedTime)
        }, 100)
    }

    const handleMouseUp = () => {
        clearInterval(timerInterval)
        setTimerRunning(false)

        if (timer < 500) {
            const remainingTime = 500 - timer
            const countdownInterval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 100)
            }, 100)

            setTimeout(() => {
                clearInterval(countdownInterval)
                setTimer(0)
            }, remainingTime)
        }
    }

    useEffect(() => {
        return () => {
            clearInterval(timerInterval)
        }
    }, [timerInterval])

    // useEffect(() => {
    //     console.log(currentEmail)
    // }, [currentEmail])

    const saveEmailHandler = (email: string) => {
        setCurrentEmail(email)
    }

    const onActiveHandler = () => {
        setActive(!isActive)
        localStorage.setItem('isAgree', (!isActive).toString())
    }

    return (
        <div>
            <FormInput
                saveEmail={saveEmailHandler}
                errValidate={currentEmail.length === 0 && counter > 0 && !isActive}
            />
            <div className="p-1"></div>
            <FormCheckbox
                onActive={onActiveHandler}
                isActive={isActive}
                errValidate={currentEmail.length === 0 && counter > 0 && !isActive}
            />
            <button
                className="btn btn-primary mt-auto absolute bottom-10 w-[90%] left-1/2 -translate-x-1/2"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                Hold to proceed
            </button>
        </div>
    )
}

export default Step1
