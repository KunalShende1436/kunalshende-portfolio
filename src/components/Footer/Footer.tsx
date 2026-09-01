import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex flex-col items-center justify-center gap-4 overflow-hidden px-4 py-8 md:px-14 border-t border-border">
      <a href="/" className="flex items-center gap-2">
        <Logo width={30} height={30} />
        <span className="text-neutral hover:text-accent text-lg font-bold transition-colors duration-300">
          KUNAL M SHENDE
        </span>
      </a>

      <p className="text-tertiary-content text-xs text-center">
        Software Developer & IoT Developer • Nagpur, India
      </p>

      <p className="text-tertiary-content text-xs text-center">
        © {new Date().getFullYear()} — All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
