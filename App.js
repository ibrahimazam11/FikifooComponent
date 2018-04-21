import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import Card from './Card'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [{
        "title": "Burger",
        "food": [{
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fikifoo-577a5.appspot.com/o/data%2F1513760716749_burger.png?alt=media&token=e4fef624-a2d8-4ea4-ac2f-17468455b5f3",
          "title": "Twister",
          "price": 150
        },
        {
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fikifoo-577a5.appspot.com/o/data%2F1513760716749_burger.png?alt=media&token=e4fef624-a2d8-4ea4-ac2f-17468455b5f3",
          "title": "Mighty Zinger",
          "price": 300
        },
        {
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fikifoo-577a5.appspot.com/o/data%2F1513760716749_burger.png?alt=media&token=e4fef624-a2d8-4ea4-ac2f-17468455b5f3",
          "title": "Value Burger",
          "price": 250
        },
        {
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fikifoo-577a5.appspot.com/o/data%2F1513760716749_burger.png?alt=media&token=e4fef624-a2d8-4ea4-ac2f-17468455b5f3",
          "title": "Krunch Burger",
          "price": 200
        },]
      },
      {
        "title": "Midnight Deals",
        "food": [{
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fikifoo-577a5.appspot.com/o/data%2F1513760716749_burger.png?alt=media&token=e4fef624-a2d8-4ea4-ac2f-17468455b5f3",
          "title": "Zinger",
          "price": 250
        }]
      }
        ,
      {
        "title": "Beverages",
        "food": [{
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fikifoo-577a5.appspot.com/o/data%2F1513942730167_Mineral%20water.png?alt=media&token=266991f2-3672-4b4c-b67c-7250398b3722",
          "title": "Aquafina",
          "price": 250
        }]
      }
        ,
      {
        "title": "Zinger",
        "food": [{
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fikifoo-577a5.appspot.com/o/data%2F1513760716749_burger.png?alt=media&token=e4fef624-a2d8-4ea4-ac2f-17468455b5f3",
          "title": "Zinger",
          "price": 300
        }]
      }
        ,
      {
        "title": "Zinger",
        "food": [{
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fikifoo-577a5.appspot.com/o/data%2F1513760716749_burger.png?alt=media&token=e4fef624-a2d8-4ea4-ac2f-17468455b5f3",
          "title": "Zinger",
          "price": 250
        }]
      }]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Header hasTabs style={{backgroundColor: '#E53935', height: 25}} androidStatusBarColor='#E53935'/>
          <Tabs tabBarUnderlineStyle={{backgroundColor:'#fff'}} renderTabBar={() => <ScrollableTab />}>
            {this.state.categories.map((item, i) => (
              <Tab key={i} heading={item.title} tabStyle={{backgroundColor: '#E53935'}} activeTabStyle={{backgroundColor: '#f45653'}} >
                <FlatList
                  data={item.food}
                  ItemSeparatorComponent={this.FlatListItemSeparator}
                  renderItem={({ item }) => <Card item={item} />}
                  keyExtractor={(item, index) => index.toString()}
                />
              </Tab>)
            )}

          </Tabs>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab: {
    backgroundColor: '#E53935'
  }
});