import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
	EvilIcons,
	Ionicons,
	MaterialCommunityIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const CustomDrawerHeader = () => {
	const navigation = useNavigation();
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				paddingHorizontal: 20,
			}}
		>
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
					<Ionicons
						name="wallet-outline"
						size={24}
						color="#656565"
						style={{ marginRight: 10 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<SimpleLineIcons
						name="location-pin"
						size={24}
						color="#656565"
						style={{ marginRight: 10 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Ionicons
						name="notifications-outline"
						size={24}
						color="#656565"
						style={{ marginRight: 10 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<MaterialCommunityIcons
						name="message-processing-outline"
						size={24}
						color="#656565"
						style={{ marginRight: 10 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CustomDrawerHeader;
