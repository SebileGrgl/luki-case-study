import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useForm } from "react-hook-form";
import { Button, Text } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { User } from "@/utils/types";
import { editProfileTags } from "@/constants/editProfileTags";
import { userInformationTags } from "@/constants/userInformationTags";
import EditInfoRow from "./EditInfoRow";
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/userSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function EditContainer({ user }: { user: User }) {
  const [date, setDate] = useState(() =>
    user.dob ? new Date(user.dob) : new Date()
  );
  const [showDatePicker, setShowDatePicker] = useState(false);

  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Bu alan boş bırakılamaz")
      .min(3, "En az 3 karakter giriniz")
      .max(30, "En fazla 30 karakter giriniz")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Sadece harf, rakam ve alt çizgi kullanabilirsiniz"
      ),
    job: yup
      .string()
      .required("Bu alan boş bırakılamaz")
      .min(3, "En az 3 karakter giriniz")
      .max(30, "En fazla 30 karakter giriniz"),
    weight: yup
      .number()
      .typeError("Sadece rakam giriniz")
      .required("Bu alan boş bırakılamaz")
      .min(20, "Ağırlık en az 20 kg olmalıdır")
      .max(300, "Ağırlık en fazla 300 kg olabilir"),
    height: yup
      .number()
      .typeError("Sadece rakam giriniz")
      .required("Bu alan boş bırakılamaz")
      .min(50, "Boy en az 50 cm olmalıdır")
      .max(250, "Boy en fazla 250 cm olabilir"),
  });
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      ...user,
    },
    resolver: yupResolver(validationSchema),
  });
  const filteredUserInfoTags = editProfileTags.filter(
    (item) => item.key !== "dob"
  );
  const editInformations = [...filteredUserInfoTags, ...userInformationTags];

  const onSubmit = (data: any) => {
    dispatch(updateUser(data));
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <View>
        {editInformations.map((item) => (
          <View key={item.key}>
            <EditInfoRow
              icon={item.icon}
              label={item.title}
              control={control}
              name={item.key}
            />
          </View>
        ))}

        <View style={styles.row}>
          <View style={styles.titleContainer}>
            <Image
              source={require("@/assets/images/biography-icons/dob-icon.png")}
            />
            <Text style={styles.label}>Doğum Tarihi</Text>
          </View>
          <Button onPress={() => setShowDatePicker(true)}>
            <Text>{date.toLocaleDateString()}</Text>
          </Button>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
          />
        )}
      </View>
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
        buttonColor="#8474DE"
      >
        Güncelle
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
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
  button: {
    marginTop: 50,
  },
});
