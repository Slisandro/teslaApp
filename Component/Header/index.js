import React from "react";
import { View, Image, Pressable } from "react-native";
import styles from './styles.js';
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const Header = ({ history }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={() => history.push("/")}
      >
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
      </Pressable>

      <Menu
        menuButton={
          <MenuButton
            styles={{
              position: 'absolute',
              right: 20,
              width: 30,
              height: 30,
              backgroundColor: 'transparent',
              border: 'none'
            }}
          >
            <Image style={styles.image} source={require('../../assets/images/menu.png')} />
          </MenuButton>}
      >
        <MenuItem
          styles={{
            height: 40,
            fontSize: 14,
            fontWeight: 600
          }}
          onClick={() => history.push("/products/0")}
        >
          Model S
        </MenuItem>
        <MenuItem styles={{
          height: 40,
          fontSize: 14,
          fontWeight: 600
        }}
          onClick={() => history.push("/products/1")}
        >
          Model 3
          </MenuItem>
        <MenuItem
          styles={{
            height: 40,
            fontSize: 14,
            fontWeight: 600
          }}
          onClick={() => history.push("/products/2")}
        >
          Model X
          </MenuItem>
        <MenuItem
          styles={{
            height: 40,
            fontSize: 14,
            fontWeight: 600
          }}
          onClick={() => history.push("/products/3")}
        >
          Model Y
          </MenuItem>
      </Menu>
    </View>
  );
}

export default Header;