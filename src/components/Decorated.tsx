import { ReactNode } from "react";
import './Decorated.css'

interface DecoratedProps {
    children: ReactNode;
}

export const Decorated = ({
    children
}:DecoratedProps) => {
    return <span className="decorated__container">
        <div className="decorated__children">{children}</div>
        <div className="decorated__decoration" />
    </span>
}