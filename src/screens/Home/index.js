import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Title from "../../components/Title";
import styles from "./style";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";
//import jsondata from '../../data/attraction.json';
const Home = () => {
    const [selectedCategory,setSelectedCategories] = useState('All');
    // const [data,setdata]= useState([]);

    // useEffect(()=>{
    //     console.log('jsonData:>>',jsonData);
    // }, []);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text="Where do" style={{ fontWeight: 'normal' }} />
                <Title text="You want to go" />

                <Title text="Explore Attractions" style={styles.subtitle} />

                <Categories  selectedCategory={selectedCategory} 
                onCategoryPress={setSelectedCategories} 
                categories={['All','Popular','Historical','Harsh','Exclusine','Rohit','Vikash','Bharat','Mata']}
                />

                {/* <ScrollView style={styles.row}>
                    {data?.map(item=>())} 
                     </ScrollView>*/}

                <View style={styles.row}>
                <AttractionCard  
                subtitle='India'
                title='Entertainment Park'
                imageSrc='https://images.unsplash.com/photo-1596549839034-b019e058b948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF0dHJhY3Rpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                />
                <AttractionCard  
                subtitle='India'
                title='Entertainment Park'
                imageSrc='https://i.insider.com/5d38b0b336e03c401422cdf8?width=750&format=jpeg&auto=webp'
                />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);