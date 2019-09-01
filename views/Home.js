/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Container, Left, Content, Right, Text, List, ListItem, Icon, Spinner, Fab   } from 'native-base';
import { ScrollView } from 'react-native'
import ListComponent from '../components/List-component'
import axios from 'axios'

class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lists: '',
            isLoading: true,
        }
    }
    componentDidMount() {
        const BaseUrl = 'http://dummy.restapiexample.com/api/v1'
        axios.get(`${BaseUrl}/employees`)
        .then(res => {
            const response = res.data
            this.setState({
                lists: response,
                isLoading: false,
            })
        })
    }
    static navigationOptions = {
        title: 'Home Screen',
        };
            
  render() {
      if(this.state.isLoading){
        return ( <Spinner color='green' /> )
      }
      return (
        <Container>
            <Content>
                <ListComponent data={this.state.lists}/>
            </Content>
            <Fab
            style={{ backgroundColor: '#5067FF'}}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('Create')}
            >
            <Icon name="add"/>
          </Fab>
      </Container>
      )
  }
};

export default HomeScreen;
