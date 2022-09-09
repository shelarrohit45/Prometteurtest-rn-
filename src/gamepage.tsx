import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.94);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Gamepage() {
    let [data, setdata] = useState([{
        id: 1
        ,
        name: "A"
    },
    {
        id: 2
        ,
        name: "B"
    },
    {
        id: 3
        ,
        name: "C"
    }, {
        id: 4
        ,
        name: "D"
    },
    {
        id: 5
        ,
        name: "E"
    }, {
        id: 6
        ,
        name: "F"
    },
    {
        id: 7
        ,
        name: "G"
    },
    {
        id: 8
        ,
        name: "H"
    },
    {
        id: 9
        ,
        name: "A"
    },
    {
        id: 10,
        name: "B"
    },
    {
        id: 11,
        name: "C"
    }, {
        id: 12,
        name: "D"
    },
    {
        id: 13,
        name: "E"
    }, {
        id: 14,
        name: "F"
    },
    {
        id: 15,
        name: "G"
    },
    {
        id: 16,
        name: "H"
    },
    ]);
    const [activecard1, setactiveactivecard1] = useState([]);
    const [activecardname, setactiveactivecardname] = useState([]);
    const [matches, setmatches] = useState(0);
    const [turns, setturns] = useState(0);
    const [play, setplay] = useState(false);
    useEffect(() => {
        setactiveactivecard1([]);
        setactiveactivecardname([])
        setturns(0);
        setplay(false);
        setmatches(0);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setactiveactivecard1([]);
            setactiveactivecardname([]);
            if(activecard1.length == 2)
            {
                setturns(turns + 1);
                setdata(data.sort(() => Math.random() - 0.5))
            }
            if(new Set(activecardname).size !== activecardname.length)
            {
                setmatches(matches + 1)
            }
        }, 500);
    //    console.log(new Set(activecardname).size !== activecardname.length)
   
    }, [activecard1.length == 2])

    // data.sort(() => Math.random() - 0.5)

    const renderItem = ({ item }) => {
        return (
            <Pressable
                disabled={play ? false : true}
                onPress={() =>{ setactiveactivecard1([...activecard1, item.id]), setactiveactivecardname([...activecardname, item.name]) }}
                style={{
                    width: SLIDER_WIDTH / 4.7,
                    height: SLIDER_WIDTH / 3,
                    backgroundColor: "red",
                    marginLeft: 2,
                    marginTop: 10,
                    marginRight: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                {
                    activecard1.includes(item.id) ? (
                        <Text style={{ color: "white", fontSize: 20 }}>{item.name}</Text>
                    ) : (<Image
                        source={{
                            uri: `https://png.pngtree.com/background/20210710/original/pngtree-game-volcano-advertising-background-picture-image_979719.jpg`,
                        }}
                        style={{
                            width: SLIDER_WIDTH / 4.7,
                            height: SLIDER_WIDTH / 3,
                            alignSelf: 'center',
                        }}
                    />)
                }


            </Pressable>
        )
    }
    // .sort(() => Math.random() - 0.5)
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginHorizontal:10, justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center' }} ><Text style={{ letterSpacing: 3 }}>MATCHES</Text><Text>{matches}</Text></View>
                <View style={{ alignItems: 'center' }} ><Text style={{ letterSpacing: 3 }}>TURNS</Text><Text>{turns}</Text></View>
            </View>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                numColumns={4}
                data={data}
                renderItem={renderItem}
                contentContainerStyle={{
                    marginHorizontal: 10,
                }}
            />
             <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "green",
            padding: 10,
            marginVertical:30,
            alignSelf:'center',
            borderRadius:20,
            width:"50%"
          }}
        onPress={()=>{setturns(0), setmatches(0),setplay(play ? false : true)}}
      >
        <Text style={{color:'white', fontSize:20}}>{`${play ? 'Stop' : 'Play'}`}</Text>
      </TouchableOpacity>
        </ScrollView>
    );
}

export default Gamepage;
