import { View, StyleSheet, Image } from "react-native";
import { Controller } from "react-hook-form";
import { TextInput, Text } from "react-native-paper";
import { countries } from "@/constants/countries";
import { signs } from "@/constants/signs";
import { SelectList } from "react-native-dropdown-select-list";

const EditInfoRow = ({ icon, label, control, name, rules }: any) => {
  let data: any = [];
  if (["nationality", "location"].includes(name))
    data = countries.map((item) => {
      return { key: item.name, value: item.name };
    });
  if (name === "sign")
    data = signs.map((item) => {
      return { key: item.name, value: item.name };
    });

  return (
    <View style={styles.row}>
      <View style={styles.titleContainer}>
        <Image
          style={{ width: 22, height: 22 }}
          source={icon}
          resizeMode="contain"
        />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.errorContainer}>
            {data.length > 0 ? (
              <SelectList
                setSelected={(val: string) => onChange(val)}
                data={data}
                save="value"
                placeholder={`Seçiniz`}
                boxStyles={styles.dropdown}
                defaultOption={{ key: value, value: value }}
              />
            ) : (
              <TextInput
                value={value}
                onChangeText={onChange}
                mode="flat"
                style={styles.input}
                underlineColor="#ccc"
                activeUnderlineColor="#8474DE"
              />
            )}
            {error && <Text style={styles.errorMessage}>{error.message}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default EditInfoRow;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  titleContainer: {
    maxWidth: 120,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "transparent",
    borderBottomWidth: 0.1,
    paddingHorizontal: 0,
    fontSize: 15,
  },
  errorContainer: {
    flexDirection: "column",
    flex: 2,
    gap: 8,
  },
  errorMessage: {
    color: "#8474DE",
    fontSize: 12,
  },
  dropdown: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRadius: 5,
    borderWidth: 0,
    borderBottomWidth: 0.3,
    borderColor: "#ccc",
  },
});
