import React from 'react'

interface IModalContent {
    text: string
    isActive: boolean
    exitModal: () => void
}

const ModalContent: React.FC<IModalContent> = ({ text, isActive, exitModal }) => {
    return isActive ? (
        <>
            <div className=" bg-gray-500 bg-opacity-50 fixed top-0 left-0 w-full h-full z-10"></div>
            <div className="bg-white w-[200px] text-black text-center rounded-xl py-3 px-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                {text}
                <div onClick={exitModal} className="py-1 px-5 bg-slate-800 text-white rounded-md mt-3">Назад</div>
            </div>
        </>
    ) : (
        <></>
    )
}

export default ModalContent
