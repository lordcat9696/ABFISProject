import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, AppRegistry, Image, Alert, Navigator, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'react-native-image-picker';
// thu vien chuyen img base 64 thanh file blob
import RNFetchBlob from 'react-native-fetch-blob'
import pick from './picker.js';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class ImagePickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            data: null
        }
    }

    show() {
        pick((source, data) => this.setState({ avatarSource: source, data: data }));
    }

    upload() {
        RNFetchBlob.fetch('POST', 'http://localhost:27017/', {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        }, [
                {
                    name: 'info',
                    data: 'Pham Dat'
                }
            ]).then((resp) => { console.log(res) })
            .catch((err) => { console.log(err) })
    }

    render() {
        let img = this.state.avatarSource == null ? null :
            <Image
                source={this.state.avatarSource}
                style={{ height: 500, width: 200 }}
            />
        return (
            <View>
                <Text>Hello React Native</Text>
                <TouchableOpacity onPress={this.show.bind(this)}>
                    <Text>Show Image Picker</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.upload.bind(this)}>
                    <Text>Upload Image</Text>
                </TouchableOpacity>
                {img}
            </View>
        )
    }
}