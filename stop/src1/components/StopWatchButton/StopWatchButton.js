import {Text, TouchableOpacity} from 'react-native';
import StopWatchButtonStyles from './StopWatchButtonStyles';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import React from 'react';

const StopWatchButton= ({time,startOnPressAction,timerOnPressAction}) => {
    if(time>0){
        return(

            <TouchableOpacity
                style={StopWatchButtonStyles.mainActionButton}
                onPress={timerOnPressAction}>
                <Text style={StopWatchButtonStyles.mainActionButtonText}>
                    {moment.utc(time).format(i18n.TIME_FORMAT)}
                </Text>
                <Text style={[StopWatchButtonStyles.mainActionButtonText,StopWatchButtonStyles.PauseButton]}>
                    {i18n.SW.PAUSE}
                </Text>
            </TouchableOpacity>

        );
    }
    return(
        <TouchableOpacity
            style={StopWatchButtonStyles.mainActionButton}
            onPress={startOnPressAction}>
            <Text style={StopWatchButtonStyles.mainActionButtonText}>
                {i18n.SW.START}
            </Text>
        </TouchableOpacity>
    );

};

export default StopWatchButton;
