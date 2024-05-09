import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function _layout() {
	return (
		<Drawer screenOptions={{ drawerLabelStyle: { marginLeft: -20 } }}>
			<Drawer.Screen
				name="home/index"
				options={{
					title: "Home",
					drawerLabel: "Home",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="index"
				options={{
					title: "About",
					drawerLabel: "About",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="information-circle" size={size} color={color} />
					),
				}}
			/>
		</Drawer>
	);
}
