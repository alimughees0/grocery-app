import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
	AntDesign,
	EvilIcons,
	Feather,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";

export default function DrawerContent(props: any) {
	const dummyOptions = [
		{ label: "Favourite Brands", icon: "favorite-border" },
		{ label: "Orders & Reordering Brands", icon: "shopping-basket" },
		{ label: "Addresses", icon: "location-pin" },
		{ label: "Challenges & Rewards", icon: "gift" },
		{ label: "Vouchers", icon: "heart" },
		{ label: "Help Center", icon: "user" },
		{ label: "Settings", icon: "settings" },
		{ label: "Terms & Conditions", icon: "money" },
		{ label: "Signout", icon: "logout" },
	];

	const renderDummyOptions = () => {
		return dummyOptions.map((option, index) => (
			<TouchableOpacity
				key={index}
				style={{
					flexDirection: "row",
					alignItems: "center",
					padding: 12,
					borderWidth: 0.6,
					borderColor: "#EDE8DE",
				}}
				onPress={() => {
					// Handle option press here
				}}
			>
				{option.label === "Challenges & Rewards" ? (
					<AntDesign
						name="Trophy"
						size={26}
						color="#656565"
						style={{ marginHorizontal: 10 }}
					/>
				) : option.label === "Vouchers" ? (
					<MaterialCommunityIcons
						name="ticket-confirmation-outline"
						size={26}
						color="#656565"
						style={{ marginHorizontal: 10 }}
					/>
				) : option.label === "Settings" ? (
					<Feather
						name="settings"
						size={26}
						color="#656565"
						style={{ marginHorizontal: 10 }}
					/>
				) : option.label === "Orders & Reordering Brands" ? (
					<AntDesign
						name="shoppingcart"
						size={26}
						color="#656565"
						style={{ marginHorizontal: 10 }}
					/>
				) : option.label === "Addresses" ? (
					<EvilIcons
						name="location"
						size={26}
						color="#656565"
						style={{ marginHorizontal: 10 }}
					/>
				) : option.label === "Help Center" ? (
					<MaterialCommunityIcons
						name="information-outline"
						size={26}
						color="#656565"
						style={{ marginHorizontal: 10 }}
					/>
				) : option.label === "Terms & Conditions" ? (
					<MaterialCommunityIcons
						name="archive-outline"
						size={26}
						color="#656565"
						style={{ marginHorizontal: 10 }}
					/>
				) : (
					<MaterialIcons
						name={`${option.icon}`}
						size={26}
						color="#656565"
						style={{ marginHorizontal: 10 }}
					/>
				)}

				<Text style={{ color: "#83533E", fontSize: 18, fontWeight: "500" }}>
					{option.label}
				</Text>
			</TouchableOpacity>
		));
	};

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: 20,
					marginTop: 40,
				}}
			>
				<TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
					<AntDesign name="closecircleo" size={24} color="#000" />
				</TouchableOpacity>
				<Text style={{ fontSize: 20, fontWeight: "500" }}>Profile</Text>
				<View style={{ width: 24 }} />
			</View>
			<DrawerContentScrollView {...props}>
				<View style={{ paddingHorizontal: 20, alignItems: "center" }}>
					<Image
						resizeMode="contain"
						source={require("../assets/images/image.png")}
					/>
					<Text
						style={{
							marginTop: 10,
							fontSize: 20,
							fontWeight: "500",
							color: "#000",
						}}
					>
						Abdullah Ahsan
					</Text>
				</View>
				<View style={{ marginTop: 10 }}>{renderDummyOptions()}</View>
			</DrawerContentScrollView>
		</View>
	);
}
