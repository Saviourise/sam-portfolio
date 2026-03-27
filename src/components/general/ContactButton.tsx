import { ArrowUpRight } from "lucide-react";

const ContactBtn = () => {
    return (
        <a href="#contact" className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full whitespace-nowrap cursor-pointer bg-accent text-bg font-body font-semibold uppercase text-[13px] tracking-[0.07em] py-1 pl-6 pr-4">
            <span className="absolute inset-0 rounded-full bg-bg scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
            <span className="relative z-10 text-bg transition-colors duration-300 group-hover:text-accent">
                Contact Me
            </span>
            <span className="relative z-10 w-10 h-10 rounded-full bg-bg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent">
                <ArrowUpRight size={14} strokeWidth={2.5} className="text-accent transition-colors duration-300 group-hover:text-bg" />
            </span>
        </a>
    )
}

export default ContactBtn;