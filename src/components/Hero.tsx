import { Button } from "./Button"
import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero-section">
            <hgroup className="hero-header">
                <h1>Bespoke websites & hand-crafted UI</h1>
                <p>Hi I'm Lewis, a front end developer from the UK. If you're looking to level up your online presence, feel free to get in touch to discuss your needs.</p>
                <Button onclick={() => location.href = "#contact"}>Get in touch</Button>
            </hgroup>

            <img className="hero-img" src="./pfp-highlight.svg" alt="outlined doodle of a smiling person in a cap" />
        </section>
    )
}