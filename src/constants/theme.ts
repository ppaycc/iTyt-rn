/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    /* Text */
    text: '#000000',
    textStrong: '#111111',
    textSecondary: '#60646C',
    textTertiary: '#444748',
    textMuted: '#5E5E62',
    onPrimary: '#FFFFFF',
    onPrimaryMuted: '#CCCCCC',
    link: '#3C87F7',
    textConnnection: '#8A5B00',
    dangerous: '#ff0000',

    /* Surfaces */
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    backgroundSubtle: '#EEEEEE',
    backgroundSurface: '#F9F9F9',
    backgroundSheet: '#F5F5F5',
    backgroundFloating: '#5E5E62',
    backgroundConnection: '#FFF4E5',

    /* Controls & accents */
    primary: '#111111',
    border: '#EEEEEE',
    borderStrong: '#111111',
    separator: '#CCCCCC',
    online: '#00FF00',

    /* Splash / app icon */
    splashIcon: '#FFA500',
    splash: '#fff',
    splashGradientStart: '#3C9FFE',
    splashGradientEnd: '#0274DF',
  },
  dark: {
    /* Text */
    text: '#ffffff',
    textStrong: '#F5F5F5',
    textSecondary: '#B0B4BA',
    textTertiary: '#C7CBD1',
    textMuted: '#B4B8BE',
    onPrimary: '#111111',
    onPrimaryMuted: '#55585C',
    link: '#3C87F7',
    textConnnection: '#8A5B00',
    dangerous: '#ff0000',

    /* Surfaces */
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    backgroundSubtle: '#212225',
    backgroundSurface: '#0C0C0D',
    backgroundSheet: '#1A1B1D',
    backgroundFloating: '#8A8F94',
    backgroundConnection: '#FFF4E5',

    /* Controls & accents */
    primary: '#FFFFFF',
    border: '#2E3135',
    borderStrong: '#FFFFFF',
    separator: '#35383C',
    online: '#00FF00',

    /* Splash / app icon */
    splash: '#000',
    splashIcon: '#FFA500',
    splashGradientStart: '#3C9FFE',
    splashGradientEnd: '#0274DF',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;
export type ThemeColors = { [K in ThemeColor]: string };

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
