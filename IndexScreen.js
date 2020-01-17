import React,{ useContext } from 'react';
import {Text, View, StyleSheet, Button, FlatList,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = ({ }) => {

    const {data, addBlogPosts, deleteBlogPosts} = useContext(BlogContext);
    return (
        <View>
            <Button title='addBlog' onPress={()=> addBlogPosts()}/>
            <FlatList 
                data={data}
                keyExtractor={(blogPosts)=> blogPosts.title }
                renderItem={({ item }) => {
                return (
                    <View style={Styles.post}>
                        <Text style={Styles.title}>{item.title } - {item.id }</Text>
                        <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                            <Ionicons name='md-trash' style={Styles.icon}/>
                        </TouchableOpacity>
                    </View>
                );
                }}
            />
        </View>
    );
};


const Styles = StyleSheet.create({
    post:{
        paddingVertical:10,
        borderBottomWidth:2
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24,
        paddingRight:5
    }
});


export default IndexScreen;