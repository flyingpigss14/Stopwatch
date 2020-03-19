import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';
import StopWatchButton from '../StopWatchButton/StopWatchButton';


class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            time:0,
        };
    }

    renderStartButton(){
        return(
            <TouchableOpacity
                style={HomeViewStyles.mainActionButton}
                onPress={() => {
                    function t() {
                        this.setState(  {
                            time: this.state.time + 1000,
                        });
                    }
                    setInterval(  t,1000);
                }}>
                <Text style={HomeViewStyles.mainActionButtonText}>
                    {i18n.HOME.START}
                </Text>
            </TouchableOpacity>
        );
    }
    renderRunningTimer(){
        return(
            <TouchableOpacity
                style={HomeViewStyles.mainActionButton}
                onPress={() => (console.log('sup'))}>
                <Text style={HomeViewStyles.mainActionButtonText}>00:00:00</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flex: 1}}>
                    <Text style={HomeViewStyles.welcomeHeader}>
                        {i18n.HOME.Welcome_Header}
                    </Text>
                </View>
                <View style={{flex: 2}}>
                    <Text>{this.state.time}</Text>
                    {this.renderStartButton()}
                </View>
            </View>
        );
    }
}

export default HomeView;
----------------------------------------------------------------------
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
                //time>0 ? this.renderRunningTimer() : this.renderStartButton()
                <StopWatchButton/>
            </View>
        </View>
    );
}


-------------------------------------------------------------------
    startOnPressAction{() => {
    setInterval(() => {
        const {time, paused} = this.state;
        if (!paused) {
            this.setState({
                time: time + 1000,
            });
        }
    }, 1000);
}}
