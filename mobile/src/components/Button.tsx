import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface IButtonProps {
  title: string;
}

export function Button(props: IButtonProps) {
  return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.button}>
          { props.title }
        </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#551',
    fontSize: 24,
    fontWeight: 'bold',

  }
});