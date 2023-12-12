import  { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
    item:{
        fontSize: 15,
        
        color:'rgba(0,0,0,0.5)',
        paddingVertical:2,
    },
    selectedItem:{
        color:'#000000'
    } ,
    itemContainer:{
        marginRight:15,
        marginVertical:14,
        
    },
    selectedItemContainer:{
        borderBottomColor:'',
        borderBottomWidth:4,
    }
});

    export default styles;