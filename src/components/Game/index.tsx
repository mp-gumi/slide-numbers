import React from "react";
import { View, Text } from "react-native";
import { Row } from "react-native-table-component";

function Game() {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, ""],
  ];

  const arrayItem = array.map((item) =>
    item.map((value) => <Row data={value} />)
  );
  return (
    <View>
      {arrayItem}
      <Text>test</Text>
    </View>
  );
}

export default Game;
