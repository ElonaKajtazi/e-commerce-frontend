
interface IButton  {
    className?: string,
    label: string
}

const Button = ({className, label}: IButton) => {
    return (
        <button className={className || ''}>{label}</button>
    )
}

export default Button