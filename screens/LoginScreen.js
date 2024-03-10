import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Masuk ke akunmu
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingHorizontal: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons name="email" size={24} color="gray" />
            <TextInput
              value={email}
              onchangeText={(text) => setEmail(text)}
              placeholder="Masukkan emailmu"
              style={{
                color: "gray",
                fontSize: email ? 16 : 16,
                width: 300,
                marginVertical: 10,
              }}
            ></TextInput>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingHorizontal: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign name="lock1" size={24} color="gray" />
            <TextInput
              value={password}
              onchangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Masukkan password"
              style={{
                color: "gray",
                fontSize: password ? 16 : 16,
                width: 300,
                marginVertical: 10,
              }}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text>Ingatkan Saya!</Text>
          </View>
          <Text style={{ fontWeight: "500", color: "#007FFF" }}>
            Lupa Password
          </Text>
        </View>

        <Pressable
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            marginLeft: "auto",
            marginTop: 30,
            marginRight: "auto",
            borderRadius: 6,
            alignItems: "center",
            padding: 15,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 16,
            }}
          >
            Masuk
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
