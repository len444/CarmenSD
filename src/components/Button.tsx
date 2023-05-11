
interface Props {
    children: string;
    color: string;
    onClick: () => void;
}

const Button = ({onClick, children, color}: Props) => {
    return <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
}

export default Button;

