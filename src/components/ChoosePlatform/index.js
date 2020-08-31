import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const status = {
    available: 1,
    unavailable: 2
}
export default class ChoosePlatform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platforms: [
                { Id: 1, Image: 'http://demo4sites.com/html-design/react/v3/img/netflix.png', status: status.available, Selected: false },
                { Id: 2, Image: 'http://demo4sites.com/html-design/react/v3/img/prime-video.png', status: status.available, Selected: false },
                { Id: 3, Image: 'http://demo4sites.com/html-design/react/v3/img/hulu.png', status: status.available, Selected: false },
                { Id: 4, Image: 'http://demo4sites.com/html-design/react/v3/img/disnep.png', status: status.unavailable, Selected: false }
            ]
        }
    }
    choose(item) {
        var index = this.state.platforms.findIndex((row) => { return row.Id == item.Id });
        var data = this.state.platforms;
        data[index].Selected = !data[index].Selected;
        this.setState({ platforms: data });
    }

    isAnySelected() {
        var data = this.state.platforms.filter((row) => { return row.Selected == true });
        return data.length > 0 ? true : false;
    }

    navigate() {
        var data = this.state.platforms.filter((row) => { return row.Selected == true });
        this.props.navigation.navigate('personalDetails', { selectedPlatforms: data });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Select Platform you have access to.</Text>
                <View>
                    {
                        this.state.platforms.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={[styles.widget, item.status == status.unavailable ? { backgroundColor: '#e5e5e5' } : {}, item.Selected ? styles.selected : {}]}
                                    onPress={this.choose.bind(this, item)}
                                    disabled={item.status == status.unavailable}>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Image source={{ uri: item.Image }} resizeMode={'contain'} style={{ width: 100, height: 70 }} />
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <View style={item.Selected ? styles.selectedCircle : styles.unselectedCircle}></View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <TouchableOpacity style={[styles.button, this.isAnySelected() ? {} : styles.buttonDisabled]}
                    disabled={!this.isAnySelected()}
                    onPress={() => { this.navigate() }}>
                    <Text style={styles.buttonText}>Start Searching for all shows/movies</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
