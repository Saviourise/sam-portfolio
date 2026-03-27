const SocialCircle = ({
    href,
    children,
    external,
}: {
    href: string
    children: React.ReactNode
    external?: boolean
}) => {
    return (
        <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="
          shrink-0 w-11 h-11 rounded-full
          flex items-center justify-center
          text-white
          border border-white/20
          hover:border-accent hover:bg-accent/10
          transition-colors duration-200
        "
        >
            {children}
        </a>
    )
}

export default SocialCircle;