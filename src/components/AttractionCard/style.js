import { StyleSheet,Dimensions } from 'react-native';
const { width } =Dimensions.get('window')
const styles = StyleSheet.create({
    card: {
        marginRight:15,
        padding:4,
        borderWidth:1,
        borderColor:'#E2E2E2',
        borderRadius:15,
    },
    image: {
        width:(width - 96) /2,
        height:100,
        borderRadius:15,

    },
    title: {
        color:'#000000',
        fontSize:15,
        fontWeight:'500',
        marginTop:12,
        marginLeft:6

    },
    subtitle: {
        fontSize:15,
        fontWeight:'400',
        color:'rgba(0,0,0,0.5)',
        

    },
    icon:{
        width:15,
        height:15,
        marginRight:6,

    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12,
        marginLeft:6,
        marginTop:4
    }

});

export default styles;