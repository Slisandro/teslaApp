import { StyleSheet, View, FlatList } from 'react-native';
import CarsList from './Component/CarsList/index.js';
import Header from './Component/Header/index.js';
import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import CarDetails from "./Component/CarDetails/index.js";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route path="/" component={Header}/>
          <Switch>
            <Route exact path="/" component={CarsList} />
            <Route exact path="/products/:id" render={({match}) => <CarDetails id={match.params} />} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});