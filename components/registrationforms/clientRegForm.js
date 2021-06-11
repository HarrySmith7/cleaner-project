import React from "react";
import { View, Button, TextInput } from "react-native";

export const ClientSignupForm = ({ setClientRegisterDetails, onRegister }) => {
	return (
		<View>
			<TextInput
				placeholder="Name"
				onChangeText={(event) =>
					setClientRegisterDetails((currRegisterDetails) => {
						return { ...currRegisterDetails, name: event };
					})
				}
			/>
			<TextInput
				placeholder="City"
				onChangeText={(event) =>
					setClientRegisterDetails((currRegisterDetails) => {
						return { ...currRegisterDetails, city: event };
					})
				}
			/>
			<TextInput
				placeholder="Username"
				onChangeText={(event) =>
					setClientRegisterDetails((currRegisterDetails) => {
						return { ...currRegisterDetails, username: event };
					})
				}
			/>
			<TextInput
				placeholder="Email"
				onChangeText={(event) =>
					setClientRegisterDetails((currRegisterDetails) => {
						return { ...currRegisterDetails, email: event };
					})
				}
			/>
			<TextInput
				placeholder="Password"
				secureTextEntry={true}
				onChangeText={(event) =>
					setClientRegisterDetails((currRegisterDetails) => {
						return { ...currRegisterDetails, password: event };
					})
				}
			/>

			<Button onPress={() => onRegister()} title="Sign Up" />
		</View>
	);
};