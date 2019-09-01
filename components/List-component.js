/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Container, Left, Content, Right, Text, List, ListItem, Icon  } from 'native-base';

class ListComponent extends React.Component {
        
  render() {
      return (
        <List dataArray={this.props.data}
        renderItem= {({ item }) => (
            <ListItem>
                <Left>
                    <Text>{ item.employee_name }</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        )}
        >
           
        </List>
      )
  }
};

export default ListComponent;
