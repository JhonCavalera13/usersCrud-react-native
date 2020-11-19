import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from '../database/firebase';

export const CreateUser = ({ navigation }) => {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setInputValues({ ...inputValues, [name]: value })
    }

    const saveNewUser = async () => {
        const { name, email, phone } = inputValues;
        if (name === '' || email === '' || phone === '') {
            alert('Please provide values')
        }
        else {
            try {
                await firebase.db.collection('users').add({ ...inputValues });
                navigation.navigate('UsersList')
            }
            catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Name"
                    onChangeText={value => handleChangeText('name', value)}
                />
            </View>

            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Email"
                    onChangeText={value => handleChangeText('email', value)}
                />
            </View>

            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Phone"
                    onChangeText={value => handleChangeText('phone', value)}
                />
            </View>

            <View>
                <Button
                    title="Save User"
                    onPress={() => saveNewUser()}
                />
            </View>
        </ScrollView>
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
