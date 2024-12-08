import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TermsConditionsScreen from '../components/auth/TermsConditions';
import PermissionsScreen from '../components/auth/Permissions';
import AuthScreen from '../components/auth/AuthScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
      <Stack.Screen name="Permissions" component={PermissionsScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  );
}
