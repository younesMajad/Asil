export const cinematicEase = [0.16, 1, 0.3, 1]

export const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 1.2, ease: cinematicEase }
  }
}

export const lineReveal = {
  initial: { scaleX: 0 },
  animate: { 
    scaleX: 1,
    transition: { duration: 1.4, ease: cinematicEase }
  }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleInCenter = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.0, ease: cinematicEase }
  }
}

export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: cinematicEase }
  }
}

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: cinematicEase }
  }
}

export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cinematicEase }
  }
}