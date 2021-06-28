import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Cadastro} from '../pages/Cadastro'

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
    headerMode='none'
    >

    <stackRoutes.Screen
        name="Cadastro"
        component={Cadastro}
    />
    </stackRoutes.Navigator>
)

export default AppRoutes;