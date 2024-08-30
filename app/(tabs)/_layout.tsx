import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
export default function Layout() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            backgroundColor: Colors.grey,
            bottom: 40,
            justifyContent: "center",
            alignItems: "center",
            height: 63,
            marginHorizontal: 120,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 30,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#333",
            borderTopColor: "#333",
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <View
                  style={{
                    padding: 12,
                    borderRadius: 30,
                    backgroundColor: focused ? Colors.tintColor : Colors.grey,
                  }}
                >
                  <SimpleLineIcons name="pie-chart" size={18} color={color} />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <View
                  style={{
                    padding: 12,
                    borderRadius: 30,
                    backgroundColor: focused ? Colors.tintColor : Colors.grey,
                  }}
                >
                  <AntDesign name="swap" size={18} color={color} />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <View
                  style={{
                    padding: 12,
                    borderRadius: 30,
                    backgroundColor: focused ? Colors.tintColor : Colors.grey,
                  }}
                >
                  <FontAwesome name="user-o" size={18} color={color} />
                </View>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({});
