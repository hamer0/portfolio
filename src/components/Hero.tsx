import { Button } from "./Button"
import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero-section">
            <hgroup className="hero-header">
                <h1>Hey there!</h1>
                <p>I'm Lewis, a front end developer from the UK. I am passionate about making bespoke websites and hand-crafted UI. If you're looking to shake up your online presence, feel free to get in touch to discuss your needs.</p>
                <Button onclick={() => location.href = "#contact"}>Get in touch</Button>
            </hgroup>

            <img className="hero-img" src="./pfp-highlight.svg" alt="outlined doodle of a smiling person in a cap" />
        </section>
    )
}