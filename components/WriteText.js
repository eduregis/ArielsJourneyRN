import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import { forwardRef, useImperativeHandle } from "react";

function WriteText(props, ref) {
  // MARK: - Variables
  const [textArray, setTextArray] = useState([]);
  var [textIndex, setIndexState] = useState(-1);

  // MARK: - Functions
  useEffect(() => {
    const splitedText = props.text.split(" ");
    setTextArray(splitedText);

    let interval = setInterval(() => {
      setIndexState((lastTimerCount) => {
        if (lastTimerCount == splitedText.length) {
          clearInterval(interval);
          props.onPress();
        } else {
          return lastTimerCount + 1;
        }
      });
    }, 100);
  }, [props.text]);

  function flipCardsHandler() {
    setIndexState(textArray.length);
    props.onPress();
  }

  useImperativeHandle(ref, () => ({
    clearTextHandler: () => {
      clearText();
    },
  }));

  function clearText() {
    setTextArray([]);
    setIndexState(-1);
  }

  // MARK: - View
  return (
    <Pressable onPress={flipCardsHandler}>
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
    </Pressable>
  );
}

export default forwardRef(WriteText);

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
