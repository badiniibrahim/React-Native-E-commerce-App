import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { Colors } from "@/constants/Colors";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>Shoppe</Text>
      <Text style={styles.subtitle}>Everything you love, one click away</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  logo: {
    marginBottom: 30,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 30,
    marginBottom: 15,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "outfit",
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.primary,
    height: 50,
    width: 290,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontFamily: "outfit-bold",
  },
});

export default LoginScreen;
