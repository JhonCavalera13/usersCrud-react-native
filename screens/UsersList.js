import React, { useEffect, useState } from 'react';
import { Button, ScrollView } from 'react-native';
import firebase from '../database/firebase';
import { UserItem } from './userItem';

export const UsersList = ({ navigation }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapShot => {
            const usersList = querySnapShot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setUsers(usersList)
        })
    }, [])
    return (
        <>
            <ScrollView>
                <Button title='Create User' onPress={() => navigation.navigate('CreateUser')} />

                {
                    users.map(user =>
                        <UserItem user={user} key={user.id} navigation={navigation} />
                    )
                }
            </ScrollView>
        </>
    )
}
