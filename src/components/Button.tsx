import { ReactNode } from "react"
import './Button.css'

interface ButtonProps {
    children?: ReactNode;
    className?: string;
    onclick?: ()=>void;
}

export const Button = ({
    children,
    onclick,
    className,
}:ButtonProps) => {
    return <button className={'Button ' + className} onClick={onclick}>{children}</button>
}