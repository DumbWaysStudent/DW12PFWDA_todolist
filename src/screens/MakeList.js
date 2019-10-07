import React, {Component} from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

class MakeList extends Component {
    
    constructor() {
        super();
        this.state = {
            valueInput: ''
        }
    }

    renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.list}>
                <Text>{item.name}</Text>
            </View>
        )
    }

    render() {
        const todo = [
            {name : 'work'},
            {name : 'swim'},
            {name : 'study'},
            {name : 'sleep'},
            {name : 'run'}
        ]
        return (
            <View>
                <FlatList
                    data={todo}
                    renderItem={this.renderItem}
                />   
            </View>
        )
    }
}

export default MakeList;

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
    }

})