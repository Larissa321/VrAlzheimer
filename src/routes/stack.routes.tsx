import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
    headerMode='none'
    >
    </stackRoutes.Navigator>
)

export default AppRoutes;