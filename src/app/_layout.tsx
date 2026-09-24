import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from 'expo-system-ui';
import { useEffect, useMemo } from 'react';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useTheme } from '@/hooks/use-theme';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  /**
   * The stack paints `colors.background` wherever no screen covers it, which is
   * exactly the gap a pop animation opens up. Left at the react-navigation
   * defaults that is rgb(242, 242, 242) — the flash.
   */
  const navigationTheme = useMemo(() => {
    const base = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return {
      ...base,
      colors: {
        ...base.colors,
        background: theme.background,
        card: theme.background,
        text: theme.text,
        border: theme.separator,
        primary: theme.link,
      },
    };
  }, [colorScheme, theme]);

  // The window behind the whole React tree, white by default on Android.
  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.background);
  }, [theme.background]);

  return (
    <ThemeProvider value={navigationTheme}>
      <AnimatedSplashOverlay />
      {/* <AppTabs /> */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.background },
        }}
      />
    </ThemeProvider>
  );
}
