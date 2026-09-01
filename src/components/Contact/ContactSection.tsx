import { GithubIcon, LinkedIn, MsgIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-10 rounded-3xl p-6 md:my-16 md:grid-cols-2 md:gap-8 md:rounded-4xl md:p-8 lg:gap-12 border border-border">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Connect</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">I'd love to collaborate</h4>
          <p className="text-neutral mt-6 leading-relaxed">
            Whether you have a question about IoT embedded systems, cybersecurity audits, full-stack tooling, or potential opportunities, feel free to reach out!
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-neutral text-lg font-bold">Contact & Socials</p>
          <div className="space-y-2">
            <a
              href="mailto:krunalshende1436@gmail.com"
              className="text-neutral hover:text-accent flex items-center gap-2 font-light transition-colors duration-300">
              <MsgIcon className="size-5 text-accent" /> krunalshende1436@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-shende04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral hover:text-accent flex items-center gap-2 font-light transition-colors duration-300">
              <LinkedIn className="size-5 text-accent" /> linkedin.com/in/kunal-shende04
            </a>
            <a
              href="https://github.com/KunalShende1436"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral hover:text-accent flex items-center gap-2 font-light transition-colors duration-300">
              <GithubIcon className="size-5 text-accent" /> github.com/KunalShende1436
            </a>
          </div>

          <div className="pt-2 text-xs text-tertiary-content">
            📍 Location: Nagpur, Maharashtra, India
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
