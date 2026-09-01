interface LogoProps {
  width?: number
  height?: number
  className?: string
}

const Logo = ({ width = 36, height = 36, className = '' }: LogoProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`relative flex items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/40 shadow-sm ${className}`}>
      <span className="font-mono font-black text-sm tracking-wider text-accent select-none">
        KS
      </span>
    </div>
  )
}

export default Logo
