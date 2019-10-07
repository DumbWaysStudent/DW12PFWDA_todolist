import React, { Component } from 'react';
import {View,Text,Button,TextInput,FlatList,StyleSheet, TouchableOpacity    } from 'react-native';


class MakeList extends Component{

    constructor(){
        super()
        this.state = {
            input : '',
            todo : [
                {id : 1,name : 'work'},
                {id : 2,name : 'swim'},
                {id : 3,name : 'study'},
                {id : 4,name : 'sleep'},
                {id : 5,name : 'work'}
            ]
        }
    }

    renderItem = ({item, index}) => {
        return (
            <View key={index} style={{marginBottom: 10}}>
                <Text>{item.todo}</Text>
            </View>
        )
    }

    addlist = () => {
        const {todo } = this.state
        const aa = {"id" : this.state.todo.length+1,"name" : this.state.input}
        todo.push(aa)
       this.setState([...todo])
        this.setState({input : ''})
    }

    render(){
        return(
            <View>
                <View style = {styles.header}>
                    <TextInput style = {styles.textbox} placeholder = 'New Todo' value={this.state.input} onChangeText= {(text) =>{
                        
                        this.setState({
                            input : text
                        })
                        }
                    }

                    
                    />
                    <Button style = {styles.button} title = "Add" onPress = {() => this.addlist()}
                    />
                </View>
                {this.state.todo.map(item => {
                    return (<View key={item.id}>
                        <Text>{item.name}</Text>
                    </View>)
                })}

            </View>
        )
    }


}

export default MakeList;

var styles = StyleSheet.create({
    list : {
        marginBottom : 10,
        borderBottomWidth : StyleSheet.hairlineWidth,
        padding : 10
    },
    header : {
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'space-between'
        
    },
    textbox : {
        borderWidth : 2,
        flex : 1

    },
    button : {
        padding : 40
    }
})
