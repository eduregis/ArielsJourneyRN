import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/colors";

function WriteText({ text }) {
  const [textArray, setTextArray] = useState([]);
  var [textIndex, setIndexState] = useState(-1);

  useEffect(() => {
    const splitedText = text.split(" ");
    setTextArray(splitedText);

    let interval = setInterval(() => {
      setIndexState((lastTimerCount) => {
        if (lastTimerCount == splitedText.length) {
          clearInterval(interval);
        } else {
          return lastTimerCount + 1;
        }
      });
    }, 100);
  }, [text]);

  return (
    <Text>
      {textArray.map((word, index) => {
        return (
          <Text
            key={index}
            style={[styles.text, textIndex <= index && styles.hidden]}
          >
            {word + " "}
          </Text>
        );
      })}
    </Text>
  );
}

export default WriteText;

const styles = StyleSheet.create({
  text: {
    color: Colors.background500,
    fontSize: 14,
    fontFamily: "macondo-regular",
  },
  hidden: {
    opacity: 0,
  },
});
