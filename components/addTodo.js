import { useState } from "react"
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native"

export default function addTodo({ submitHandler }) {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Añadir Tarea..."
                onChangeText={changeHandler}
                value={text}
            />

            <Button
                color='orange'
                title="Añadir"
                onPress={() => { Keyboard.dismiss(), submitHandler(text)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})