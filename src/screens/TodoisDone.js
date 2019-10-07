import React, { Component } from 'react';
import {TextInput,FlatList,StyleSheet,} from 'react-native';
import {Text,View,Button,CheckBox,Icon} from 'native-base';



class TodoisDone extends Component{

    constructor(){
        super()
        this.state = {
            input : '',
            todo : [
                {name : 'work', checked : false},
                {name : 'swim',checked : false},
                {name : 'study',checked : false},
                {name : 'sleep',checked : false},
                {name : 'run',checked : false}
            ]
        }
    }

    checkboxPressed = (index)=>{
        const newchecked = [...this.state.todo]
        newchecked[index].checked = !newchecked[index].checked 
        this.setState({todo : newchecked})
    }

    remove = (index) =>{
        const newlist = [...this.state.todo]
        newlist.splice(index,1)
        this.setState({todo : newlist})
        alert("Deleted")
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
                <View style = {{flexDirection : 'row', alignItems : 'center'}} >
                <CheckBox style = {{marginRight : 20}} checked = {item.checked} color = "green" onPress = {() => this.checkboxPressed(index)}/>

                <Text>{item.name}</Text>
                </View>
                <Icon style = {styles.deleteIcon} onPress = {()=>this.remove(index)} name = 'trash' ></Icon>
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
                    <Button style = {styles.button} onPress = {()=>this.textinputChecker(this.state.input,this.state.task)}><Text>Add</Text></Button>
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

export default TodoisDone;

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
        padding : 10,
        height : 50
    },
    deleteIcon : {
        padding : 5,
        color : 'red'
    }

})
