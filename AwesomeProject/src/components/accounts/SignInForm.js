export default class SignUp extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: "",
            status: "",
            signedIn: false,
            checkedSignIn: false
        };
    }

    componentDidMount = () => {
    }

    onChangeText = (text) => {
        this.state = {
            userName: text
        }
    }
    
    _onSubmit = () => {
        let stateUserName = this.state.userName;
        let statePassWord = this.state.passWord;
        if (stateUserName != "admin" || statePassWord != "admin") {
            Alert.alert('Wrong bruhh, try it again!');
            this.props.status = "false";
        }
        else {
            Alert.alert('Welcome back bruhh')
            this.props.status = "true";
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <View style={{ flex: 2, flexDirection: 'column' }}>
                <View >
                    <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                        style={{ height: 120 }}
                        resizeMode={'cover'}
                    />
                </View>
                <View style={{ height: 50, margin: 20 }}>
                    <TextInput
                        theme={{ colors: { primary: "#4169E1" } }}
                        label='UserName'
                        value={this.state.userName}
                        onChangeText={userName => this.setState({ userName })}
                    />
                </View>
                <View style={{ height: 50, margin: 20 }}>
                    <TextInput
                        theme={{ colors: { primary: "#4169E1" } }}
                        label='PassWord'
                        value={this.state.passWord}
                        onChangeText={passWord => this.setState({ passWord })} />
                </View>
                <View style={{ width: 150, height: 100, margin: 20 }}>
                    <Button
                        theme={{ colors: { primary: "#4169E1" } }}
                        onPress={this._onSubmit} mode="contained" >
                        Log-In
            </Button>
                </View>
            </View>
        );
    }
}
