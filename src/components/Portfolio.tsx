import { PortfolioCard } from "./PortfolioCard";
import './Portfolio.css';
import { Section } from "./Section";
import { PortfolioEntry } from "../portfolio/model";
import { useEffect, useState } from "react";
import { Decorated } from "./Decorated";

export const Portfolio = () => {

    const [entries, setEntries] = useState<PortfolioEntry[] | undefined>();

    useEffect(() => {
        fetch('./portfolio.json')
        .then(res => {
            if (!res.ok) throw new Error("Unable to fetch portfolio");
            return res.json();
        })
        .then(json => setEntries((json as PortfolioEntry[]).reverse()))
        .catch(err => console.error(err));
    },[])

    return (
        <Section>
            <Decorated><h2>Portfolio</h2></Decorated>
            <div className="portfolio-cards portfolio-cards--responsive">
                {entries?.map(entry => <PortfolioCard key={entry.title} data={entry}/>)}
            </div>
        </Section>
    )
}