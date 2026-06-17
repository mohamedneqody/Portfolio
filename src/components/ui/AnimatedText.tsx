'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animate once when entering viewport */
  once?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: delay,
    },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function AnimatedText({
  text,
  as: Tag = 'h2',
  className,
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      custom={delay}
      className={cn('flex flex-wrap', className)}
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={wordVariants} className="mr-[0.3em]">
          <Tag className="inline">{word}</Tag>
        </motion.span>
      ))}
    </motion.div>
  );
}
