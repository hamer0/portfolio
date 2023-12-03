import { Button } from "./Button"
import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero-section hero-section--responsive">
            <hgroup className="hero-header">
                <h1>Hey there!</h1>
                <p>I'm Lewis, a software developer from the UK. I am passionate about making UI, websites and other coding projects - you can check out some of what I have made down below. I'm always open for a chat so feel free to get in touch.</p>
                <Button onclick={() => location.href = "#contact"}>Get in touch</Button>
            </hgroup>

            <img className="hero-img hero-img--responsive" src="./pfp-highlight.svg" alt="outlined doodle of a smiling person in a cap" />
        </section>
    )
}
