import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import { forwardRef, useImperativeHandle } from "react";

function WriteText({ text, onPress }, ref) {
  // MARK: - Variables
  const [textArray, setTextArray] = useState([]);
  var [textIndex, setIndexState] = useState(-1);

  // MARK: - Functions
  useEffect(() => {
    const splitedText = text.split(" ");
    setTextArray(splitedText);
    typingText(splitedText);
  }, [text]);

  function typingText(splitedText) {
    let interval = setInterval(() => {
      setIndexState((lastTimerCount) => {
        if (lastTimerCount == splitedText.length) {
          flipCardsHandler();
          clearInterval(interval);
        } else if (lastTimerCount < splitedText.length) {
          return lastTimerCount + 1;
        } else {
          clearInterval(interval);
        }
      });
    }, 100);
  }

  function onPressHandler() {
    setIndexState(textArray.length + 1);
    onPress();
  }

  function flipCardsHandler() {
    setTimeout(function () {
      onPress();
    }, 100);
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
    <Pressable onPress={onPressHandler}>
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
