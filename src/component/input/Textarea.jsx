import React from 'react'

const Textarea = ({ label, errors, register, name }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm text-color5 block">{label}</label>
            <textarea {...register(`${name}`, { required: true })} className="border rounded-md focus:outline-color4 w-full px-3 py-2" rows="4" />
            {errors[name] && <span className="text-sm text-color8">This field is required</span>}
        </div>
    )
}

export default Textarea