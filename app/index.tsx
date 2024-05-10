import { View, Text, Image } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function About() {
	const [searchQuery, setSearchQuery] = React.useState("");

	return (
		<View style={{ flex: 1, paddingVertical: 20 }}>
			<View style={{ paddingHorizontal: 16 }}>
				{/* <View>
					<Ionicons name="camera-outline" size={24} color="black" />
				</View> */}
				<Searchbar
					placeholder="search anything..."
					onChangeText={setSearchQuery}
					value={searchQuery}
					style={{
						backgroundColor: "#fff",
						paddingLeft: 10,
						borderWidth: 1.5,
						fontSize: 18,
					}}
					placeholderTextColor={"#656565"}
					icon={() => (
						<View style={{ flexDirection: "row" }}>
							<Ionicons name="camera-outline" size={28} color="black" />
							<Image
								style={{ marginLeft: 10 }}
								resizeMode="contain"
								source={require("../assets/images/Line.png")}
							/>
						</View>
					)}
					right={() => (
						<View
							style={{
								paddingHorizontal: 20,
								backgroundColor: "#000",
								paddingVertical: 12,
								borderRadius: 30,
								marginRight: 4,
							}}
						>
							<Feather name="search" size={24} color="#fff" />
						</View>
					)}
				/>
			</View>
			<View style={{ marginTop: 20, alignItems: "center" }}>
				<Image
					resizeMode="cover"
					style={{ width: "100%" }}
					source={require("../assets/images/banner.png")}
				/>
			</View>

			<View
				style={{
					flexDirection: "row",
					padding: 10,
					marginTop: 10,
					justifyContent: "center",
				}}
			>
				<View
					style={{
						width: 200,
						height: 260,
						borderRadius: 10,
						elevation: 5,
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#fff",
						marginRight: 10,
					}}
				>
					<Image source={require("../assets/images/groceries.png")} />
					<View>
						<Text
							style={{
								color: "#83533E",
								fontSize: 20,
								fontWeight: "600",
								textAlign: "left",
								marginTop: 10,
							}}
						>
							Groceries
						</Text>
						<Text
							style={{
								color: "#656565",
								fontSize: 17,
								maxWidth: 170,
								marginTop: 5,
								fontWeight: "500",
							}}
						>
							Anything, Anytime Anywhere
						</Text>
					</View>
				</View>
				<View>
					<View
						style={{
							width: 220,
							height: 120,
							borderRadius: 10,
							elevation: 5,
							backgroundColor: "#EDE8DE",
							justifyContent: "center",
							marginBottom: 10,
						}}
					>
						<Text
							style={{
								color: "#83533E",
								fontSize: 20,
								fontWeight: "600",
								marginLeft: 20,
							}}
						>
							Halal Card
						</Text>
						<Text
							style={{
								color: "#656565",
								fontSize: 17,
								maxWidth: 100,
								marginLeft: 20,
								marginTop: 5,
								fontWeight: "500",
							}}
						>
							Shopping with halal card
						</Text>
						<Image
							resizeMode="contain"
							style={{
								right: 20,
								position: "absolute",
								bottom: 20,
								width: 60,
								height: 60,
							}}
							source={require("../assets/images/halalcard.png")}
						/>
					</View>
					<View
						style={{
							width: 220,
							height: 130,
							borderRadius: 10,
							elevation: 5,
							justifyContent: "center",
							backgroundColor: "#fff",
						}}
					>
						<Text
							style={{
								color: "#83533E",
								fontSize: 20,
								fontWeight: "600",
								marginLeft: 20,
							}}
						>
							Food
						</Text>
						<Text
							style={{
								color: "#656565",
								fontSize: 17,
								maxWidth: 120,
								marginLeft: 20,
								fontWeight: "500",
							}}
						>
							Satisfy your cravings
						</Text>
						<Image
							resizeMode="contain"
							style={{
								right: 20,
								position: "absolute",
								bottom: 20,
								width: 100,
								height: 80,
							}}
							source={require("../assets/images/food.png")}
						/>
					</View>
				</View>
			</View>

			<View
				style={{
					flexDirection: "row",
					padding: 10,
					marginTop: 5,
					justifyContent: "center",
				}}
			>
				<View
					style={{
						width: 130,
						height: 140,
						elevation: 5,
						borderRadius: 10,
						backgroundColor: "#fff",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						resizeMode="contain"
						style={{ width: 60, height: 60 }}
						source={require("../assets/images/Group.png")}
					/>
					<Text
						style={{
							color: "#0F0F0F",
							fontSize: 17,
							fontWeight: "500",
							marginTop: 10,
						}}
					>
						Refer To Earn
					</Text>
				</View>
				<View
					style={{
						width: 130,
						height: 140,
						elevation: 5,
						borderRadius: 10,
						backgroundColor: "#fff",
						marginLeft: 10,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						resizeMode="contain"
						style={{ width: 60, height: 60 }}
						source={require("../assets/images/Rewards.png")}
					/>
					<Text
						style={{
							color: "#0F0F0F",
							fontSize: 17,
							fontWeight: "500",
							marginTop: 10,
						}}
					>
						Rewards Shop
					</Text>
				</View>
				<View
					style={{
						width: 130,
						height: 140,
						elevation: 5,
						borderRadius: 10,
						backgroundColor: "#fff",
						marginLeft: 10,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						resizeMode="contain"
						style={{ width: 60, height: 60 }}
						source={require("../assets/images/Points.png")}
					/>

					<Text
						style={{
							color: "#0F0F0F",
							fontSize: 17,
							fontWeight: "500",
							marginTop: 10,
							textAlign: "center",
						}}
					>
						Convert into Makkah Points
					</Text>
				</View>
			</View>
		</View>
	);
}
