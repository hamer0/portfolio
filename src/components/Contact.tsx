import { Section } from "./Section"
import './Contact.css'
import { Button } from "./Button"
import { Decorated } from "./Decorated"

export const Contact = () => {
    return (
        <Section>
            <Decorated><h2 id="contact">Get in touch</h2></Decorated>
            <p>I'm currently open for work so, if you're interested, shoot me an email at <a href="mailto:lewis@lewishamer.co.uk" className="contact__email">lewis@lewishamer.co.uk</a> and we can get talking. You can also reach out to me on other platforms too!</p>

            <span className="contact__buttons">
                <Button onclick={() => window.open('https://www.linkedin.com/in/lewis-hamer/','_blank')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.619 0H2.38095C1.06667 0 0 1.06667 0 2.38095V17.619C0 18.9333 1.06667 20 2.38095 20H17.619C18.9333 20 20 18.9333 20 17.619V2.38095C20 1.06667 18.9333 0 17.619 0ZM6.19048 7.61905V16.6667H3.33333V7.61905H6.19048ZM3.33333 4.98571C3.33333 4.31905 3.90476 3.80952 4.7619 3.80952C5.61905 3.80952 6.15714 4.31905 6.19048 4.98571C6.19048 5.65238 5.65714 6.19048 4.7619 6.19048C3.90476 6.19048 3.33333 5.65238 3.33333 4.98571ZM16.6667 16.6667H13.8095C13.8095 16.6667 13.8095 12.2571 13.8095 11.9048C13.8095 10.9524 13.3333 10 12.1429 9.98095H12.1048C10.9524 9.98095 10.4762 10.9619 10.4762 11.9048C10.4762 12.3381 10.4762 16.6667 10.4762 16.6667H7.61905V7.61905H10.4762V8.83809C10.4762 8.83809 11.3952 7.61905 13.2429 7.61905C15.1333 7.61905 16.6667 8.91905 16.6667 11.5524V16.6667Z" fill="#2C2C34"/>
                </svg>
                    LinkedIn
                </Button>
                <Button onclick={() => window.open('https://github.com/hamer0','_blank')}>
                    <svg width="20" height="20" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    GitHub
                </Button>
            </span>

        </Section>
    )
}