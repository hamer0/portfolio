import { ReactNode } from "react"
import './Section.css'

interface SectionProps {
    children: ReactNode;
}

export const Section = ({children}:SectionProps) => {
    return <section className="Section">{children}</section>
}