import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/BonusScreenStyles'
import { coins } from '../constants/coins'
import CustomButton from '../components/CustomButton'
import { bonus } from '../constants/bonus'
import { ads } from '../constants/ads'
import OrderedList from '../components/OrderedList'
import { descriptions } from '../constants/descriptions'
import LinearGradient from 'react-native-linear-gradient'

const BonusScreen = () => {
    const [getBonus, setGetBonus] = useState('Get Daily Bonus');
    const [get, setGet] = useState('Get');
    const [watch, setWatch] = useState('Watch');
    const colors = getBonus != 'Get Daily Bonus' ? ['#4D55B3', '#A95093'] : ["#2E3138", "#2E3138"];
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Image source={require('../assets/bonus.png')} style={styles.bonusbg} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={require('../assets/back-arrow.png')} style={styles.back} />
                    </TouchableOpacity>
                    <Text style={styles.htext}>Your Bonus</Text>
                    <Text style={styles.htext}>20</Text>
                </View>
                <View style={styles.coinsContainer}>
                    <Text style={[styles.htext, { marginLeft: 0 }]}>Daily Base Check-in</Text>
                    <Text style={styles.desctext}>Earn reward for check in</Text>
                    <View style={styles.coinContainer}>
                        {
                            coins.map((coin, index) => (
                                <View
                                >
                                    <LinearGradient
                                        key={index}
                                        colors={index == 0 ? colors : ['#2E3138', '#2E3138']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={styles.coinBox}>
                                        <Text style={styles.coinText}>{coin.coin}</Text>
                                        <Image source={require('../assets/coin.png')} style={styles.coinImage} />
                                    </LinearGradient>
                                    <Text style={styles.coinDay}>{coin.day}</Text>
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.btnCon}>
                        <CustomButton title={getBonus} onPress={() => {
                            setGetBonus("23:59:59")
                        }} disabled={getBonus != 'Get Daily Bonus'} />
                    </View>
                    <Text style={[styles.htext, { marginLeft: 0 }]}>Task For Beginners</Text>
                    <Text style={styles.desctext}>Only one chance</Text>
                    <View style={{ marginTop: 12 }}>
                        {
                            bonus.map((sbonus, index) => (
                                <View
                                    key={index}
                                    style={styles.taskCOn}
                                >
                                    <Image source={require('../assets/reward.png')} />
                                    <View style={{ width: '60%' }}>
                                        <Text style={styles.bonusTitle}>{sbonus.title}</Text>
                                        <Text style={styles.bonus}>{sbonus.bonus} bonus</Text>
                                    </View>
                                    <View style={styles.bonusBtn}>
                                        <CustomButton title={get} onPress={() => {
                                            setGet("Claim")
                                        }} />
                                    </View>

                                </View>
                            ))
                        }
                    </View>
                    <Text style={[styles.htext, { marginLeft: 0, marginTop: 10 }]}>Watch Ads and Earn Bonus</Text>
                    <Text style={styles.desctext}>Watch All Ads and get extra rewards <Text style={styles.bonus}>+20 Bonus</Text></Text>
                    <View style={{ marginTop: 12 }}>
                        {
                            ads.map((ad, index) => (
                                <View key={index} style={styles.taskCOn}>
                                    <Image source={require('../assets/reward.png')} />
                                    <View style={{ width: '60%' }}>
                                        <Text style={styles.ad}>{ad.bonus} bonus</Text>
                                    </View>
                                    <View style={styles.adsBtn}>
                                        <CustomButton title={watch} onPress={() => {
                                            setWatch("Claim")
                                        }} disabled={index != 0} />
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.endDesc}>Description</Text>
                    <OrderedList items={descriptions} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BonusScreen