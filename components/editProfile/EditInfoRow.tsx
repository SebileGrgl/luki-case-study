import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Option, User } from "@/utils/types";
import { countries } from "@/constants/countries";
import { signs } from "@/constants/signs";
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/userSlice";

interface EditInfoRowProps {
  icon: number;
  title: string;
  text: string;
  keyValue: keyof User;
}

const EditInfoRow = ({ icon, title, text, keyValue }: EditInfoRowProps) => {
  const [newValue, setNewValue] = useState(text);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();

  const renderDropdown = () => {
    let options: Option[] = [];
    if (keyValue === "nationality" || keyValue === "location") {
      options = countries;
    } else if (keyValue === "sign") {
      options = signs;
    }

    if (options.length > 0) {
      return (
        <View style={styles.dropdown}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.name}
              style={styles.dropdownItem}
              onPress={() => {
                handleInputChange(option.name);
                setShowDropdown(false);
              }}
            >
              <Text>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return null;
  };

  const handleInputChange = (value: string) => {
    setNewValue(value);
    dispatch(updateUser({ [keyValue]: value }));
  };

  return (
    <View style={styles.row}>
      <View style={styles.titleContainer}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.textContainer}>
        <View>
          {["nationality", "sign", "location"].includes(keyValue) ? (
            <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
              <Text style={{ fontSize: 15 }}>{newValue}</Text>
            </TouchableOpacity>
          ) : (
            <TextInput
              style={{ fontSize: 15 }}
              value={newValue}
              onChangeText={handleInputChange}
            />
          )}
          {showDropdown && renderDropdown()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
  textContainer: {
    flex: 3,
  },
  title: {
    fontWeight: 600,
    maxWidth: 80,
    fontSize: 15,
  },

  dropdown: {
    position: "absolute",
    top: 26,
    left: 0,
    backgroundColor: "#E1E1E1",
    borderRadius: 5,
    zIndex: 1,
    gap: 2,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default EditInfoRow;
