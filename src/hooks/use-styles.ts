/**
 * Builds a StyleSheet from the palette of whichever theme is active.
 *
 * `useTheme()` hands back one of two stable module-level objects, so keying the
 * cache on it means each sheet is built at most once per theme, for the whole
 * app lifetime — no `useMemo` needed, and safe under the React Compiler.
 */

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { ThemeColors } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function makeStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  factory: (c: ThemeColors) => T & NamedStyles<any>
) {
  const cache = new WeakMap<ThemeColors, T>();

  return function useStyles(): T {
    const colors = useTheme();

    let styles = cache.get(colors);
    if (!styles) {
      styles = StyleSheet.create(factory(colors));
      cache.set(colors, styles);
    }

    return styles;
  };
}
