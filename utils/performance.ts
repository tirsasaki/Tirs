export const detectDevicePerformance = () => {
  if (typeof window === 'undefined') return 'medium'
  
  const memory = (navigator as any).deviceMemory
  const cores = navigator.hardwareConcurrency
  
  if (memory >= 8 || cores >= 8) return 'high'
  if (memory >= 4 || cores >= 4) return 'medium'
  return 'low'
}

export const getOptimalParticleCount = () => {
  const performance = detectDevicePerformance()
  switch (performance) {
    case 'high': return 20
    case 'medium': return 15
    case 'low': return 8
    default: return 10
  }
}
