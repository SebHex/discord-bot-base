/**
 * Get the current time in string format.
 */
const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString()
}

export default getCurrentTime
