
const Input = ({ label, id, isTextArea, onchange, value, clicked, onfocus, onblur }) => {
    return (
        <div className="relative flex flex-col ">
            <label htmlFor={id} className={`${clicked && "bottom-9 "} duration-150 hover:cursor-text text-light-pink absolute bottom-1.5`}>{label}</label>
            {isTextArea ?
                <textarea autoComplete="off" onBlur={onblur} id={id} onFocus={onfocus} className=" hover:cursor-text h-6 resize-none bg-transparent border-b-2 border-b-light-pink focus:outline-none caret-white text-white"  value={value} onChange={onchange} />
                :
                <input autoComplete="off"  onBlur={onblur} id={id} onFocus={onfocus} type="text" className="hover:cursor-text bg-transparent border-b-2 border-b-light-pink focus:outline-none caret-white text-white" value={value} onChange={onchange} />
            }
        </div>
    )
}

export default Input;