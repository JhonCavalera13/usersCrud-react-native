import React, { useEffect, useState } from 'react';
import { ScrollView, Button, View, StyleSheet, TextInput, ActivityIndicator, Alert } from 'react-native';
import firebase from '../database/firebase';

export const UserDatail = ({ route, navigation }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    });
    const { userId } = route.params;

    useEffect(() => {
        getUserById(userId)
    }, [])

    const getUserById = async id => {
        const dbRef = firebase.db.collection('users').doc(id);
        const doc = await dbRef.get();
        setUser({ ...doc.data(), id: doc.data().id })
        setLoading(false);
    }

    const handleChangeText = (name, value) => {
        setUser({ ...user, [name]: value })
    }

    const updateUser = async () => {
        const dbref = firebase.db.collection('users').doc(userId);
        console.log(dbref)
        await dbref.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        });
        setUser({
            id: '',
            name: '',
            email: '',
            phone: ''
        })
        navigation.navigate('UsersList');
    }

    const deleteUser = async () => {
        const dbref = firebase.db.collection('users').doc(userId);
        await dbref.delete();
        navigation.navigate('UsersList');
    }

    const openConfirmAlertDelete = () => {
        Alert.alert('Remove the User', 'Are you sure', [
            { text: 'Yes', onPress: () => deleteUser() },
            { text: 'No', onPress: () => console.log(false) }
        ])
    }

    return (
        <>
            <ScrollView style={styles.container}>
                {
                    !loading &&
                    <>
                        <View style={styles.inputGroup}>
                            <TextInput
                                placeholder="Name"
                                value={user.name}
                                onChangeText={value => handleChangeText('name', value)}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextInput
                                placeholder="Email"
                                value={user.email}
                                onChangeText={value => handleChangeText('email', value)}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextInput
                                placeholder="Phone"
                                value={user.phone}
                                onChangeText={value => handleChangeText('phone', value)}
                            />
                        </View>

                        <View>
                            <Button
                                // color="#9AC52"
                                title="Update User"
                                onPress={() => updateUser()}
                            />
                        </View>
                        <View>
                            <Button
                                color="#E37399"
                                title="Delete User"
                                onPress={() => openConfirmAlertDelete()}
                            />
                        </View>
                    </>
                }

                {
                    loading &&
                    <View>
                        <ActivityIndicator size='large' color='#9e9e9e' />
                    </View>
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})
