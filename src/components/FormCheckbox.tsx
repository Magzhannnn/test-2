import React from 'react'

interface IFormCheckbox {
    isActive: boolean
    onActive: () => void
    errValidate: boolean
}

const FormCheckbox: React.FC<IFormCheckbox> = ({ isActive, onActive, errValidate }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2" onClick={onActive}>
                <input type="checkbox" checked={isActive} className="checkbox checkbox-primary" />
                <span className={`label-text ${errValidate ? ' text-red-600' : ''}`}>I agree</span>
            </label>
        </div>
    )
}

export default FormCheckbox
