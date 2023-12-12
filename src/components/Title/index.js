<<<<<<< HEAD
import React  from "react";
import {Text} from "react-native";
import styles from "./styles";

const Title = ({ text, style }) => { 
    
    return (
        <Text style={[styles.title, style]}>{text }</Text> 
=======
import React, { useState } from "react";
import {Text} from "react-native";
import styles from "./styles";

const Title = () => { 
    const [stateText, setText] = useState("");

    const onTextpress=()=>{
        setText('Updated Text');
    }
    return (
        <Text onPress={onTextpress} style={styles.styles}>{stateText}</Text> 
>>>>>>> e48d83c2bb45a5a0111de8b56db8e124e0ec72c2
    );
};

Title.defaultProps ={
    text: 'Default Text'
};
export default React.memo(Title);