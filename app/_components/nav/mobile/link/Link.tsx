import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

interface LinkProps {
  title: string;
  href: string;
  index: number;
}

interface LinksProps {
  data: LinkProps;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const Links = ({ data, isActive, setSelectedIndicator }: LinksProps) => {
  const { title, href, index } = data;
  
    return (
      <motion.div className={styles.link} onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
  }

export default Links;