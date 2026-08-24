/**
 * Triggers a subtle haptic feedback vibration on supported devices.
 * 
 * Used primarily for mobile navigation and button clicks to provide
 * a premium, tactile, app-like experience.
 */
export const triggerHaptic = (duration: number = 50) => {
  if (
    typeof window !== "undefined" && 
    window.navigator && 
    window.navigator.vibrate
  ) {
    try {
      window.navigator.vibrate(duration);
    } catch (e) {
      // Silently fail if vibration is not supported or blocked by user settings
    }
  }
};
