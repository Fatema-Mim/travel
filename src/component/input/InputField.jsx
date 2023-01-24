
const InputField = ({ label, errors, register, type, name, placeholder }) => {
    return (
        <div className='space-y-2 '>
            <label className="text-sm text-color5 block">{label}</label>
            <input type={type} placeholder={placeholder} {...register(`${name}`, { required: true })} className="text-sm text-color9 border rounded-md px-4 py-2 focus:outline-color4 w-full " />
            {errors[name] && <span className="text-sm text-color8">This field is required</span>}
        </div>
    );
};

export default InputField;