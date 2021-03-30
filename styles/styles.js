import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    containter:{
        padding: 10,
        backgroundColor: "#f5fdff",
        flexDirection: "row"
    },
    img:{
        height: 100,
        width: 110
    },
    info:{
        paddingLeft: 10,
        width: "60%"
    },
    name:{
        fontSize: 20,
        color: "black"
    },
    location:{
        flexDirection:"row",
        alignItems: "center"
    },
    info_inside:{
        flexDirection: "row",
        justifyContent: "space-around"
    },
    rooms:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    prices:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    icon_heart:{
         color:"#f1f1f1",
         backgroundColor: "green",
        // display: "flex",
        // justifyContent: "center",
        padding: 5,
        borderRadius: 20
    },
    text:{
        color: "blue",
        fontSize: 12
    },
    text_price:{
        color: "black",
        fontWeight: "bold"
    },
    icon:{
        color:"black",
        marginRight: 7
    }
});
