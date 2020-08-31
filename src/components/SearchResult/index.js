import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';

export default class SearchResult extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20 }}>Browsing Titles</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Share</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.tile}>
                        <Text style={styles.tileText}>All Runtimes</Text>
                    </View>
                    <View style={styles.tile}>
                        <Text style={styles.tileText}>All Titles</Text>
                    </View>
                    <View style={styles.tile}>
                        <Text style={styles.tileText}>All Genres</Text>
                    </View>
                    <View style={styles.tile}>
                        <Text style={styles.tileText}>Year</Text>
                    </View>
                </View>

                <View style={styles.videoSection}>
                    <View style={styles.sectionNew}>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/tomato-2-1.png')} style={{ width: 30, height: 30 }} resizeMode={'contain'} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: '700', fontSize: 20 }}>81%</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/netflix-icon.png')} style={{ width: 30, height: 30 }} resizeMode={'contain'} />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: '700' }}>Joker</Text>
                        <Text style={{ color: '#999' }}>During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</Text>
                    </View>
                    <View style={styles.video}>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, flexDirection: 'row' }}>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <View style={[styles.iconView]}>
                            <Image source={require('../../assets/images/nah.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
                        </View>
                        <Text style={{ alignSelf: 'center', marginTop: 10 }}>Nah</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={[styles.iconView, { alignSelf: 'center'}]}>
                            <Image source={require('../../assets/images/watched.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
                        </View>
                        <Text style={{ alignSelf: 'center', marginTop: 10 }}>Watched</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <View style={[styles.iconView]}>
                            <Image source={require('../../assets/images/yes.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
                        </View>
                        <Text style={{ alignSelf: 'center', marginTop: 10 }}>Yes!</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
