
interface IInput {
    type: string,
    placeholder: string,
    className?: string
}

const Input = ({type, placeholder, className} : IInput) => {
    let classNameToUse = `w-[350px] h-[60px] p-6 ${className}`

    return (
        <input type={type} placeholder={placeholder} className={classNameToUse}/>
    )
}

export default Input