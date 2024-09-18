import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import { forwardRef, useImperativeHandle } from "react";

function WriteText({ text, coloredStrings, onPress }, ref) {
  // MARK: - Variables
  const [textArray, setTextArray] = useState([]);
  var [textIndex, setIndexState] = useState(-1);

  // MARK: - Functions
  useEffect(() => {
    setTimeout(function () {
      const splitedText = text.split(" ");
      setTextArray(splitedText);
      typingText(splitedText);
    }, 500);
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

  const coloringString = (index) => {
    const element = coloredStrings.find(
      (element) => element.stringId === index
    );

    return {
      color: element ? element.color : Colors.background500,
    };
  };

  // MARK: - View
  return (
    <Pressable onPress={onPressHandler}>
      <Text>
        {textArray.map((word, index) => {
          return (
            <Text
              key={index}
              style={[
                styles.text,
                coloringString(index),
                textIndex <= index && styles.hidden,
              ]}
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
    fontSize: 14,
    fontFamily: "macondo-regular",
  },

  hidden: {
    opacity: 0,
  },
});
