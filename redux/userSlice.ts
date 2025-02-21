import { User } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: "1",
  username: "Joseline_Addams",
  pp: "https://picsum.photos/id/247/300/300",
  hobbies: "Gitar çalmak, dizi izlemek.",
  nationality: "Türkiye",
  gender: "female",
  sign: "Aslan",
  height: "167",
  weight: "54kg",
  job: "Mimar",
  location: "Türkiye",
  dob: "2001-07-12",
  followers: 2415,
  following: 341,
  isVerified: true,
  diamonds: 85,
  membershipLevel: "VIP",
  photos: [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/236/200/300",
    "https://picsum.photos/id/235/200/300",
    "https://picsum.photos/id/234/200/300",
    "https://picsum.photos/id/233/200/300",
    "https://picsum.photos/id/232/200/300",
    "https://picsum.photos/id/231/200/300",
    "https://picsum.photos/id/230/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/241/200/300",
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
