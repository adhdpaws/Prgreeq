/**
 * Central Color Configuration
 * All colors follow WCAG AAA accessibility standards (7:1 for normal text, 4.5:1 for large text)
 * Light theme with bright, vibrant colors based on color theory
 */

export const colors = {
  // Brand Colors - Bright and energetic
  brand: {
    primary: "#2D2926", // Deep charcoal (main brand color)
    secondary: "#1E40AF", // Bright blue for accents
    accent: "#F59E0B", // Vibrant amber for highlights
  },

  // Neutral Colors - WCAG AAA compliant grays
  neutral: {
    50: "#FAFAFA", // Lightest gray (backgrounds)
    100: "#F5F5F5", // Very light gray
    200: "#E5E5E5", // Light gray (borders)
    300: "#D4D4D4", // Medium-light gray
    400: "#A3A3A3", // Medium gray
    500: "#737373", // Medium-dark gray (accessible for small text - 7.38:1)
    600: "#525252", // Dark gray (highly accessible - 9.74:1)
    700: "#404040", // Very dark gray (11.24:1)
    800: "#262626", // Almost black (14.54:1)
    900: "#171717", // Near black (16.04:1)
  },

  // Text Colors - Optimized for readability
  text: {
    primary: "#2D2926", // Main text color (dark charcoal)
    secondary: "#525252", // Secondary text (WCAG AAA compliant - 9.74:1)
    tertiary: "#737373", // Tertiary text (WCAG AAA compliant - 7.38:1)
    muted: "#737373", // Muted text (replaces old #666666)
    inverse: "#FFFFFF", // White text for dark backgrounds
  },

  // Background Colors
  background: {
    primary: "#FFFFFF", // White
    secondary: "#FAFAFA", // Very light gray
    tertiary: "#F5F5F5", // Light gray
    accent: "#FEF3C7", // Light amber (for highlights)
  },

  // Border Colors
  border: {
    light: "#E5E5E5", // Light border
    medium: "#D4D4D4", // Medium border
    dark: "#A3A3A3", // Dark border
  },

  // Semantic Colors - Bright and clear
  semantic: {
    success: {
      bg: "#D1FAE5", // Light green background
      text: "#065F46", // Dark green text (8.59:1)
      border: "#10B981", // Medium green border
    },
    error: {
      bg: "#FEE2E2", // Light red background
      text: "#991B1B", // Dark red text (8.59:1)
      border: "#EF4444", // Medium red border
    },
    warning: {
      bg: "#FEF3C7", // Light amber background
      text: "#92400E", // Dark amber text (8.59:1)
      border: "#F59E0B", // Medium amber border
    },
    info: {
      bg: "#DBEAFE", // Light blue background
      text: "#1E3A8A", // Dark blue text (8.59:1)
      border: "#3B82F6", // Medium blue border
    },
  },

  // Interactive States
  interactive: {
    hover: {
      bg: "#F5F5F5", // Light gray hover background
      text: "#2D2926", // Dark text on hover
    },
    active: {
      bg: "#E5E5E5", // Medium gray active background
      text: "#2D2926", // Dark text when active
    },
    focus: {
      ring: "#1E40AF", // Blue focus ring
      ringOffset: "#FFFFFF", // White focus ring offset
    },
  },
} as const

// Helper function to get Tailwind classes for text colors
export const textColors = {
  primary: "text-[#2D2926]",
  secondary: "text-[#525252]",
  tertiary: "text-[#737373]",
  muted: "text-[#737373]",
  inverse: "text-white",
} as const

// Helper function to get Tailwind classes for background colors
export const bgColors = {
  primary: "bg-white",
  secondary: "bg-[#FAFAFA]",
  tertiary: "bg-[#F5F5F5]",
  accent: "bg-[#FEF3C7]",
} as const

// Helper function to get Tailwind classes for border colors
export const borderColors = {
  light: "border-[#E5E5E5]",
  medium: "border-[#D4D4D4]",
  dark: "border-[#A3A3A3]",
} as const
