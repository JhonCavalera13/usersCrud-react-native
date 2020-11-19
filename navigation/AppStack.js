import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateUser } from '../screens/CreateUser';
import { UsersList } from '../screens/UsersList';
import { UserDatail } from '../screens/UserDatail';
const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
    return (
        <>
            <Navigator>
                <Screen name='UsersList' component={UsersList} options={{ title: 'Users List' }} />
                <Screen name='CreateUser' component={CreateUser} options={{ title: 'Create a new user' }} />
                <Screen name='UserDetail' component={UserDatail} options={{ title: 'User Detail' }} />
            </Navigator>
        </>
    )
}
