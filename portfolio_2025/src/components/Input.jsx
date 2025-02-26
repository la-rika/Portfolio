
const Input = ({ label, id, isTextArea, onchange, value, clicked, onfocus }) => {
    return (
        <div className="relative flex flex-col ">
            <label htmlFor={id} className={`${clicked && "bottom-9 duration-150"} hover:cursor-pointer text-light-pink absolute bottom-1.5`}>{label}</label>
            {isTextArea ?
                <textarea id={id} onFocus={onfocus} className="h-6 max-h-fit resize-none bg-transparent border-b-2 border-b-light-pink focus:outline-none caret-white text-white"  value={value} onChange={onchange} />
                :
                <input id={id} onFocus={onfocus} type="text" className="hover:cursor-pointer bg-transparent border-b-2 border-b-light-pink focus:outline-none caret-white text-white" value={value} onChange={onchange} />
            }
        </div>
    )
}

export default Input;