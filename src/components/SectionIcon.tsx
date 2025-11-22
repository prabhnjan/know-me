import { motion } from "motion/react";

interface SectionIconProps {
  type: "about" | "experience" | "projects" | "sideProjects" | "certifications" | "skills" | "contact" | "passions";
}

export function SectionIcon({ type }: SectionIconProps) {
  switch (type) {
    case "about":
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <motion.circle
            cx="40"
            cy="40"
            r="35"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="40"
            cy="30"
            r="10"
            fill="#3b82f6"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M25 55 Q25 45 40 45 Q55 45 55 55 L55 60 L25 60 Z"
            fill="#3b82f6"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
      );

    case "experience":
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <motion.rect
            x="20"
            y="25"
            width="40"
            height="30"
            rx="2"
            stroke="#8b5cf6"
            strokeWidth="2.5"
            fill="none"
            animate={{
              y: [25, 23, 25],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.rect
            x="35"
            y="15"
            width="10"
            height="12"
            stroke="#8b5cf6"
            strokeWidth="2.5"
            fill="none"
            animate={{
              y: [15, 13, 15],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="30"
            y1="35"
            x2="50"
            y2="35"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <motion.line
            x1="30"
            y1="42"
            x2="45"
            y2="42"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.2 }}
          />
        </svg>
      );

    case "projects":
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <motion.path
            d="M40 20 L45 35 L35 35 Z"
            fill="#06b6d4"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.rect
            x="30"
            y="35"
            width="20"
            height="15"
            fill="#06b6d4"
            animate={{
              y: [35, 30, 35],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M25 50 Q20 55 15 65"
            stroke="#06b6d4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{
              opacity: [0, 1, 0],
              pathLength: [0, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.path
            d="M55 50 Q60 55 65 65"
            stroke="#06b6d4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{
              opacity: [0, 1, 0],
              pathLength: [0, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
      );

    case "sideProjects":
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <motion.path
            d="M30 25 L35 40 L25 40 Z"
            stroke="#f59e0b"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
            animate={{
              rotate: [0, 15, -15, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "50%", originY: "50%", transformOrigin: "32.5px 32.5px" }}
          />
          <motion.rect
            x="28"
            y="40"
            width="4"
            height="20"
            fill="#f59e0b"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "50%", originY: "0%", transformOrigin: "30px 40px" }}
          />
          <motion.circle
            cx="50"
            cy="35"
            r="8"
            stroke="#f59e0b"
            strokeWidth="2.5"
            fill="none"
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ originX: "50%", originY: "50%", transformOrigin: "50px 35px" }}
          />
          <motion.circle
            cx="50"
            cy="35"
            r="3"
            fill="#f59e0b"
          />
          <motion.path
            d="M45 50 L55 50 L52 58 L48 58 Z"
            fill="#f59e0b"
            animate={{
              y: [0, 2, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );

    case "certifications":
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <motion.circle
            cx="40"
            cy="35"
            r="15"
            stroke="#10b981"
            strokeWidth="2.5"
            fill="none"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M33 35 L38 40 L47 31"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M35 50 L35 60 L40 57 L45 60 L45 50"
            fill="#10b981"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinejoin="round"
            animate={{
              y: [0, 2, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
      );

    case "skills":
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <motion.circle cx="40" cy="25" r="5" fill="#ec4899" />
          <motion.circle cx="25" cy="40" r="5" fill="#ec4899" />
          <motion.circle cx="55" cy="40" r="5" fill="#ec4899" />
          <motion.circle cx="30" cy="55" r="5" fill="#ec4899" />
          <motion.circle cx="50" cy="55" r="5" fill="#ec4899" />
          
          <motion.line
            x1="40" y1="25" x2="25" y2="40"
            stroke="#ec4899"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="40" y1="25" x2="55" y2="40"
            stroke="#ec4899"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
          />
          <motion.line
            x1="25" y1="40" x2="30" y2="55"
            stroke="#ec4899"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
          />
          <motion.line
            x1="55" y1="40" x2="50" y2="55"
            stroke="#ec4899"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
          />
        </svg>
      );

    case "contact":
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <motion.path
            d="M20 30 L40 45 L60 30 L60 55 L20 55 Z"
            stroke="#6366f1"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M20 30 L40 45 L60 30"
            stroke="#6366f1"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
          />
          <motion.circle
            cx="55"
            cy="35"
            r="3"
            fill="#6366f1"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );

    case "passions":
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <motion.path
            d="M40 60 C40 60, 25 45, 25 35 C25 25, 40 25, 40 35 C40 25, 55 25, 55 35 C55 45, 40 60, 40 60 Z"
            fill="#ef4444"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );

    default:
      return null;
  }
}