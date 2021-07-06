import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login'
import Menu from '../pages/Menu'
import SelecionarVideos from '../pages/SelecionarVideos'
import Paciente from '../pages/Paciente'
import EvolucaoNova from '../pages/EvolucaoNova'
import EvolucaoAnte from '../pages/EvolucaoAnte'
import Registro from '../pages/Registro'

const stackRoutes = createStackNavigator();

const AppRoutes : React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
  >
    <stackRoutes.Screen
      name="Login"
      component={Login}
    />
    <stackRoutes.Screen
      name="Menu"
      component={Menu}
    />
    <stackRoutes.Screen
      name="SelecionarVideos"
      component={SelecionarVideos}
    />
    <stackRoutes.Screen
      name="Paciente"
      component={Paciente}
    />
    <stackRoutes.Screen
      name="EvolucaoNova"
      component={EvolucaoNova}
    />
    <stackRoutes.Screen
      name="EvolucaoAnte"
      component={EvolucaoAnte}
    />
    <stackRoutes.Screen
      name="Registro"
      component={Registro}
    />
 
  </stackRoutes.Navigator>
)
 
export default AppRoutes;