import React, { Component } from 'react';
import {TextInput,FlatList,StyleSheet,} from 'react-native';
import {Button,View,Text} from 'native-base'


class AddTodo extends Component{

    constructor(){
        super()
        this.state = {
            input : '',
            todo : [
                {name : 'work'},
                {name : 'swim'},
                {name : 'study'},
                {name : 'sleep'},
                {name : 'run'}
            ]
        }
    }
    addList=() =>{
        const newlist = [...this.state.todo, {name : this.state.input}]
        this.setState({input : '', todo : newlist})
        alert("Added "+this.state.input + " to To Do List")

    }
    textinputChecker = (input) => {
        {input !== '' ? this.addList() : alert("Please fill the form first")} 
        
    }

    renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.list}>
                <Text>{item.name}</Text>
            </View>
        )
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
                    <Button style = {styles.button}onPress = {() => this.textinputChecker(this.state.input)}><Text>Add</Text></Button>
                </View>
                <FlatList
                    data={this.state.todo}
                    renderItem={this.renderItem}
                    extraData = {this.state}
                />
                

            </View>
        )
    }


}

export default AddTodo;

var styles = StyleSheet.create({
    list : {
        borderBottomWidth : StyleSheet.hairlineWidth,
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    textbox : {
        borderWidth : 1,
        width : '70%',
        height : 50
    },
    header : {
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'space-between'
        
    },
    button : {
        padding : 5,
        height : 50
    }

})
