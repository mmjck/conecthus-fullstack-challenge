const Input = ({ type = "text", maxLength = 30, name, placeholder, value, onChange, helperText, }) => {

    console.log(name);

    return <div className="relative">
        <input
            type={type}
            name={name}
            id={name}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            placeholder=" "
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue01 peer"

        />
        {helperText &&
            <p
                id="helper-text-explanation"
                className="text-black text-[9px] text-end"
            >
                {helperText}
            </p>
        }
        <label
            htmlFor={name} className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue01 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
            {placeholder}
        </label>

    </div>
}

export default Input