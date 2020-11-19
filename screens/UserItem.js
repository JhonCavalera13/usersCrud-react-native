import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';

export const UserItem = ({ user, navigation }) => {

    return (
        <>
            <ListItem
                bottomDivider
                onPress={() => { navigation.navigate('UserDetail', { userId: user.id }) }}
            >
                <ListItem.Chevron />
                <Avatar
                    source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
                    rounded
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </>
    )
}
