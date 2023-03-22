import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    RobotoRegular: require("../assets/fonts/roboto/Roboto-Regular.ttf"),
    RobotoBold: require("../assets/fonts/roboto/Roboto-Bold.ttf"),
    SlabRegular: require("../assets/fonts/roboto_slab/RobotoSlab-Regular.ttf"),
    SlabBold: require("../assets/fonts/roboto_slab/RobotoSlab-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
