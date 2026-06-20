import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";



const socialLinks = [
    { icon: FaInstagram,  href: 'https://instagram.com/younesmajad',   label: 'Instagram' },
    { icon: FaInstagramSquare,    href: 'https://youtube.com/@younesmajad',    label: 'YouTube' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/younesmajad', label: 'LinkedIn' },
];


export default function SocialLinks() {




    return (
        
         <div className="flex items-center gap-3">
                          {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={label}
                              whileHover={{ scale: 1.2, y: -3 }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              className="w-12 h-12 rounded-full border border-white/10 bg-black/50 flex items-center justify-center text-white hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors"
                            >
                              <Icon size={15} />
                            </motion.a>
                          ))}
                        </div>
    );  




}