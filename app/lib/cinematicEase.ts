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