import { StyleSheet, Dimensions } from "react-native";


const window = Dimensions.get('screen');

const styles = StyleSheet.create({
    bonusbg: {
        position: 'absolute'
    },
    back: {
        marginVertical: window.height * 0.02
    },    
    mainContainer: {
        backgroundColor: "#000000",
        paddingHorizontal: window.width * 0.04,
    },
    htext : {
        fontWeight: "600",
        fontSize: 17,
        color: "#FFFFFF",
        marginLeft: 10
    },
    header: {
        marginBottom: window.height * 0.05
    },
    coinsContainer: {
        backgroundColor: "#1E1E1E",
        paddingHorizontal: window.width * 0.04,
        paddingVertical: window.width * 0.05,
        borderRadius: 15,
        height: "auto"
    },
    desctext:{
        color: "#8D8D8D",
        fontSize: 12,
    },
    coinContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: window.height * 0.02
    },
    coinBox: {
        backgroundColor: "#2E3138",
        borderRadius: 16,
        alignItems: 'center',
        padding: window.width * 0.023,
        marginRight: window.width * 0.01
    },
    coinImage: {
        marginTop: window.height * 0.013
    },
    coinText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#878787"
    },
    coinDay: {
        fontSize: 10,
        fontWeight: "400",
        color: "#8D8D8D",
        textAlign: 'center',
        marginTop: 2
    },
    btnCon: {
        width : "95%",
        alignSelf: 'center',
        height: window.height * 0.05,
        marginVertical: window.height * 0.03
    },
    taskCOn: {
        backgroundColor: '#2E3138',
        paddingHorizontal: window.width * 0.03,
        alignItems: 'center',
        height: window.height * 0.08,
        marginBottom: window.height * 0.01,
        borderRadius: 11,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    bonusTitle: {
        fontSize: 13,
        fontWeight: "600",
        color: "#FFFFFF"
    },
    bonus: {
        fontSize: 12,
        color: "#FF6BC5"
    },
    bonusBtn: {
        width: "20%",
        height: 20
    },
    adsBtn: {
        width: "25%",
        height: 20
    },
    ad: {
        fontSize: 15,
        color: "#FF6BC5",
        fontWeight: "600"
    },
    endDesc: {
        fontSize: 13,
        color: "#FFFFFF",
        fontWeight: "600"
    },
})

export default styles