import React from 'react';
import {TouchableOpacity,AppState, View, Text} from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import StopWatchButton from '../StopWatchButton/StopWatchButton';
import AsyncStorage from '@react-native-community/async-storage';


class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }
    async handleAppStateChange(nextAppState) {
        console.log('Next AppState',nextAppState);
        const now = new Date().getTime();
        const {time} = this.state;
        const readTime = await AsyncStorage.getItem('@time');
        const readState = await AsyncStorage.getItem('@appStateChangedTimestamp');
        console.log('stored data',readState,readTime);
        await AsyncStorage.setItem('@time', time);
        await AsyncStorage.setItem('@appStateChangedTimestamp', now); 
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    startTimer(){
    setInterval(() => {
        const {time, paused} = this.state;
        if (!paused) {
            this.setState({
                time: time + 1000,
            });
        }
    }, 1000);
}

pauseTimer(){
    const {paused} = this.state; //paused=false
    this.setState({
        paused: !paused, //!paused =!false=true
    });
}
    render() {
        const {time} = this.state;
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flex: 1}}>
                    <Text style={HomeViewStyles.welcomeHeader}>
                        {i18n.HOME.Welcome_Header}
                    </Text>
                </View>
                <View style={{flex: 2}}>
                    <StopWatchButton
                        time={time}
                        startOnPressAction={this.startTimer}
                        timerOnPressAction={this.pauseTimer}

                    />
                </View>
            </View>
        );
    }
}

export default HomeView;
