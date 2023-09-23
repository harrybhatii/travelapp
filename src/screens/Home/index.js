import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Title from "../../components/Title";
import TitleClass from "../../components/Title";

const Home=()=>{
    return(
        <SafeAreaView>
        <View>
           <Title  text='My first components'/>
           <Title />

           <TitleClass text="Class Component"/>
        </View>
        </SafeAreaView>
    );
};

export default Home;