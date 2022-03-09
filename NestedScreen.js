import React from 'react';

import {Text, View, Animated} from 'react-native';
import {Swipeable} from "react-native-gesture-handler";

const NestedScreen = () => {
    const renderRightActions = (
        progress,
        dragX,
    ) => {
        const trans = dragX.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 0, 0],
        });

        const opac = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });

        return (
            <Animated.View
                style={{
                    transform: [{ translateX: trans }],
                    opacity: opac,
                }}>
                <Text> I am a text inside a animated swipe </Text>
            </Animated.View>
        );
    };





    return (
        <View style={{ flex: 1, backgroundColor: 'blue' }}>

            <Swipeable renderRightActions={renderRightActions}>
                <Text style={{ backgroundColor: 'green', height: 50,}}>
                    NESTED SCREEN SWIPEABLE
                </Text>
            </Swipeable>

        </View>
    );
};

export default NestedScreen;
