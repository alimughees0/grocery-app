import { View, Text, Image } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import DrawerContent from "@/components/DrawerContent";
import { DrawerToggleButton } from "@react-navigation/drawer";
import CustomDrawerHeader from "@/components/CustomDrawerHeader";

export default function _layout() {
	return (
		<Drawer
			screenOptions={{
				drawerLabelStyle: { marginLeft: -20 },
				headerRight: () => <CustomDrawerHeader />,
				headerTitle: "",
				// headerLeft: () => (
				// 	<Image source={require("../assets/images/menu.png")} />
				// ),
			}}
			drawerContent={DrawerContent}
		></Drawer>
	);
}
