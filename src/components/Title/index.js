import React from "react";
import {Text} from "react-native";
import styles from "./styles";

const Title = ({text}) => {
    console.log('text :>>',text);
    return (
        <Text style={styles.styles}>{text}</Text>
    );
};

Title.defaultProps ={
    text: 'Default Text'
}
export default Title;