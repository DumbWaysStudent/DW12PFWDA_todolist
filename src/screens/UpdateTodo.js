import React, { Component } from 'react';
import {TextInput,FlatList,StyleSheet,} from 'react-native';
import {Button,CheckBox,View,Text,Icon} from 'native-base';

class UpdateTodo extends Component{
    constructor(){
        super();
        this.state = {
            input : '',
            task : 'add',
            index : 0,
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
    textinputChecker = (input,task) => {
        {input !== '' && task =='add'? this.addList(): input !=='' && task =='update' ? this.updateList() :alert("Please fill the form first")} 
        
    }

    updateList = ()=> {
        const newlist = [...this.state.todo]
        newlist[this.state.index].name = this.state.input
        this.setState({todo : newlist,task : 'add',input : ''})
        alert("Updated")
    }

    updateForm = (index)=>{
        this.setState({task : 'update', index : index, input : this.state.todo[index].name})
    }

    renderItem = ({item,index}) =>{
        return(
            <View key = {index} style = {styles.list}>
                <View style = {{flexDirection : 'row', alignItems : 'center'}} >
                <CheckBox style = {{marginRight : 20}} checked = {item.checked} color = "green" onPress = {() => this.checkboxPressed(index)}/>

                <Text>{item.name}</Text>
                </View>
                <View style = {{flexDirection : "row", alignItems : 'center'}}>
                <Icon style = {styles.updateIcon} onPress = {()=>this.updateForm(index)} name = 'create' ></Icon>
                <Icon style = {styles.deleteIcon} onPress = {()=>this.remove(index)} name = 'trash' ></Icon>
                </View>
            </View>
        )
    }
    render(){
        return(
            <View>
                <View style = {styles.header}>
                    <TextInput style = {styles.textbox}value = {this.state.input} placeholder = {this.state.task == 'add'? "New Todo": "Update Todo"} onChangeText = {(text) =>{
                        this.setState({
                            input : text
                        })
                    }}/>
                    
                    {this.state.task == 'add'? 
                    <Button style = {styles.button} onPress = {()=>this.textinputChecker(this.state.input,this.state.task)}><Text>Add</Text></Button>
                    :
                    <Button style = {styles.button} success onPress = {()=>this.textinputChecker(this.state.input,this.state.task)}><Text>Update</Text></Button>
                    }
                </View>
                <FlatList
                data = {this.state.todo}
                renderItem = {this.renderItem}
                extraData = {this.state}
                />
            </View>
        )
    }
}

export default UpdateTodo;
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
    },
    deleteIcon : {
        padding : 5,
        color : 'red'
    },
    updateIcon : {
        padding : 5,
        color : 'green'
    }
})