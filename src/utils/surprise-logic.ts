/**
 * Pure helper functions for the Romantic Birthday Surprise Website.
 * Handles configuration serialization, URL parameter decoding for shareable links,
 * days calculation, and coupon definitions.
 */

export interface SurpriseConfig {
  recipientName: string;
  senderName: string;
  greetingTitle: string;
  greetingSubtitle: string;
  birthdayHeadline: string;
  letterGreeting: string;
  letterBody: string;
  letterSignoff: string;
  specialSurpriseMessage: string;
  customMusicUrl?: string;
}

export const DEFAULT_CONFIG: SurpriseConfig = {
  recipientName: "My Princess",
  senderName: "Yours Forever",
  greetingTitle: "Hey Beautiful ❤️",
  greetingSubtitle: "Someone has a special surprise just for you...",
  birthdayHeadline: "Happy Birthday, My Princess! 🎂",
  letterGreeting: "My Dearest Love,",
  letterBody: "From the very moment you walked into my life, every day has felt brighter, warmer, and filled with endless magic. Your smile is my favorite view, your laugh is my favorite melody, and your happiness is my greatest wish. On this special day, I want to remind you of how deeply and truly you are loved. May this year bring you all the wonder, laughter, and beautiful dreams your heart can hold.",
  letterSignoff: "Forever & Always With All My Love,",
  specialSurpriseMessage: "My heart is, and will always be, entirely yours. Today, tomorrow, and through all our tomorrows together.",
  customMusicUrl: ""
};

/**
 * Encodes a configuration into a URL-safe base64 string for shareable links.
 */
export function encodeConfigToUrl(config: Partial<SurpriseConfig>): string {
  try {
    const jsonStr = JSON.stringify(config);
    if (typeof btoa !== 'undefined') {
      return btoa(encodeURIComponent(jsonStr));
    }
    return Buffer.from(encodeURIComponent(jsonStr)).toString('base64');
  } catch (err) {
    return "";
  }
}

/**
 * Decodes a URL-safe base64 string back into a SurpriseConfig object.
 */
export function decodeConfigFromUrl(encoded: string): Partial<SurpriseConfig> | null {
  if (!encoded || encoded.trim() === "") return null;
  try {
    let jsonStr: string;
    if (typeof atob !== 'undefined') {
      jsonStr = decodeURIComponent(atob(encoded));
    } else {
      jsonStr = decodeURIComponent(Buffer.from(encoded, 'base64').toString('utf8'));
    }
    const parsed = JSON.parse(jsonStr);
    if (typeof parsed === 'object' && parsed !== null) {
      return parsed;
    }
    return null;
  } catch (err) {
    return null;
  }
}

/**
 * Merges a custom config with the default fallback config.
 */
export function mergeConfig(custom?: Partial<SurpriseConfig> | null): SurpriseConfig {
  if (!custom) return { ...DEFAULT_CONFIG };
  return {
    recipientName: custom.recipientName?.trim() || DEFAULT_CONFIG.recipientName,
    senderName: custom.senderName?.trim() || DEFAULT_CONFIG.senderName,
    greetingTitle: custom.greetingTitle?.trim() || DEFAULT_CONFIG.greetingTitle,
    greetingSubtitle: custom.greetingSubtitle?.trim() || DEFAULT_CONFIG.greetingSubtitle,
    birthdayHeadline: custom.birthdayHeadline?.trim() || `Happy Birthday, ${custom.recipientName?.trim() || DEFAULT_CONFIG.recipientName}! 🎂`,
    letterGreeting: custom.letterGreeting?.trim() || DEFAULT_CONFIG.letterGreeting,
    letterBody: custom.letterBody?.trim() || DEFAULT_CONFIG.letterBody,
    letterSignoff: custom.letterSignoff?.trim() || DEFAULT_CONFIG.letterSignoff,
    specialSurpriseMessage: custom.specialSurpriseMessage?.trim() || DEFAULT_CONFIG.specialSurpriseMessage,
    customMusicUrl: custom.customMusicUrl?.trim() || ""
  };
}

/**
 * Calculates days between two dates for sweet memory badges.
 */
export function calculateDaysBetween(startDate: Date | string, endDate: Date | string = new Date()): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Generates default romantic coupon cards.
 */
export function getRomanticCoupons() {
  return [
    {
      id: "coupon-1",
      icon: "🫂",
      title: "Infinite Warm Hugs & Cuddles",
      description: "Redeemable anytime, anywhere. Valid for unconditional warmth whenever you need it.",
      tag: "Never Expires"
    },
    {
      id: "coupon-2",
      icon: "🌹",
      title: "Dream Candlelight Date Night",
      description: "Your favorite food, your choice of place, dessert on me, and non-stop pampering.",
      tag: "VIP Access"
    },
    {
      id: "coupon-3",
      icon: "✨",
      title: "Free Pass to Win Any Debate",
      description: "Play this card and I will immediately concede that you were 100% right all along.",
      tag: "Wildcard"
    },
    {
      id: "coupon-4",
      icon: "💆‍♀️",
      title: "Relaxing Spa & Massage Night",
      description: "Soothing massage, scented candles, soft music, and full royalty treatment.",
      tag: "Pure Bliss"
    },
    {
      id: "coupon-5",
      icon: "🚗",
      title: "Late Night Drive & Ice Cream",
      description: "Windows down, playing your favorite playlist, under a sky full of stars.",
      tag: "Adventure"
    },
    {
      id: "coupon-6",
      icon: "💍",
      title: "Forever Love & Loyalty",
      description: "A lifetime commitment to cherish, respect, support, and adore you every single day.",
      tag: "Eternal"
    }
  ];
}
