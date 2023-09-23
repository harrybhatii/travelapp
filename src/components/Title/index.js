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
    );
};

Title.defaultProps ={
    text: 'Default Text'
};
export default React.memo(Title);