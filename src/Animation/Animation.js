import { StyleSheet, Text, View, Animated, Button } from 'react-native'
import React, { useRef, useState } from 'react'

const Animation = () => {

    const animated = useRef(new Animated.Value(0)).current
    const [BtnClick, setBtnClick] = useState(false)
    const startAnimation = () => {
        Animated.spring(animated, {
            toValue: BtnClick ? 0 : 1,
            useNativeDriver: true
        }).start()
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'tomato', alignItems: 'center', justifyContent: 'center' }} >
            <Animated.View
                style={[{
                    backgroundColor: 'gold',
                    width: 100,
                    height: 100,
                    margin: 10,
                    borderRadius:15
                }, {
                    transform: [
                        {
                            translateY: animated.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -100]
                            })
                        },
                        {
                            rotate: animated.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '180deg']
                            }),
                        },
                        {
                            translateX: animated.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -60]
                            })
                        },
                        {
                            scale: animated.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0.3]
                            })
                        }
                    ],

                }]}

            >
                {/* <Text style={{ fontSize: 25, color: "white" }} >React Native</Text> */}
            </Animated.View>
            <Button title='Start Animation' onPress={() => {
                setBtnClick(!BtnClick)
                startAnimation()
            }} />
        </View>
    )
}

export default Animation

const styles = StyleSheet.create({})