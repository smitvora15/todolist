import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions ,TextInput} from 'react-native';



const { height, width } = Dimensions.get('window');

class TodoList extends Component {
    //adding local state
    state = {
        isEditing: false,
        isCompleted: false,
        todoValue: '',
    };

    toggleItem = () => {
        this.setState({isCompleted:!this.state.isCompleted})
        // this.setState(prevState => {
    //         return {
    //             isCompleted: !prevState.isCompleted
    //         }
    //     })
     }

    startEditing = () => {
        const { textValue } = this.props;
        this.setState({
            isEditing: true,
            todoValue: textValue
        });
    };
    finishEditing = () => {
        this.setState({
            isEditing: false
        });
    }
    controlInput = (textValue) => {
        console.log("something",textValue);
        this.setState({ todoValue: textValue });
    }
    render() {
        console.log(this.props);
        const { isEditing, isCompleted, todoValue } = this.state;
        return (



            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    {/*adding circle */}
                    <TouchableOpacity onPress={this.toggleItem}>
                        <View style={[styles.circle, isCompleted ? styles.completeCircle : styles.incompleteCircle]}>


                        </View>
                    </TouchableOpacity>

                    {
                        isEditing ? (
                            <TextInput
                                value={todoValue}
                                style={[
                                    styles.text,
                                    styles.input,
                                    isCompleted ? styles.strikeText : styles.unstrikeText
                                ]}
                                multiline={true}
                                returnKeyType={'done'}
                                onBlur={this.finishEditing}
                                onChangeText={this.controlInput}
                            />
                        ) : (
                            <Text
                                style={[
                                    styles.text,
                                    isCompleted ? styles.strikeText : styles.unstrikeText
                                ]}
                            >
                            </Text>
                        )
                            }
                </View>

                {/*adding edit and deleting task*/}
                {
                    (isEditing ? (
                        <View style={styles.buttons}>
                            <TouchableOpacity onPressOut={this.finishEditing}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonText1}>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.buttons}>
                            <TouchableOpacity onPressOut={this.startEditing}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonText1}>✎</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonText1}>❌</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )


                    )}

            </View>


        )
    }
};

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowContainer: {
        flexDirection: 'row',
        width: width / 2,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        //   borderColor: 'red',
        borderWidth: 3,
        marginRight: 10,
        marginLeft: 10,
    },
    completeCircle: {
        borderColor: '#bbb'
    },
    incompleteCircle: {
        borderColor: '#DA4453',
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttons: {
        flexDirection: 'row',

    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    buttonText1: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    input: {
        marginVertical: 15,
        width: width / 2,
        paddingBottom: 5
      },
});


export default TodoList;