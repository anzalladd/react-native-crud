/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';
import { ScrollView } from 'react-native'
import axios from 'axios'

class CreateScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    static navigationOptions = {
        title: 'Create Screen',
        };
            
  render() {
      return (
        <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Name" />
            </Item>
            <Item>
              <Input placeholder="Password"/>
            </Item>
          </Form>
        </Content>
      </Container>
      )
  }
};

export default CreateScreen;
