import { PortfolioEntry } from "../portfolio/model"
import { Button } from "./Button"
import './PortfolioCard.css'

interface PortfolioCardProps {
    data: PortfolioEntry;
}

export const PortfolioCard = ({data}: PortfolioCardProps) => {
    return <div className="portfolio-card">
        <div className="portfolio-card__image">
        <img  src={data.imgsrc} alt="" />
        </div>
        
        <div className="portfolio-card__content">
            <h3 className="portfolio-card__heading">{data.title}</h3>
            <p>{data.description}</p>
        </div>

        <span className="portfolio-card__buttons">
            {data.code && <Button onclick={() => {window.open(data.code,'_blank')}}>Code</Button>}
            {data.view && <Button onclick={() => window.open(data.view,'_blank')}>See project</Button>}  
        </span>
    </div>
}