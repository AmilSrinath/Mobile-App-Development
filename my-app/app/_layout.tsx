import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
        headerTitleAlign:'center',
        headerTintColor:'#2b2d42',
        headerStyle: {
            backgroundColor: '#00b4d8',
        }
    }}>
      <Stack.Screen name="index" options={{
          headerTitle: "Home",
      }}/>

      <Stack.Screen name="profile" options={{
          headerTitle: "Profile",
      }}/>
    </Stack>
  );
}
