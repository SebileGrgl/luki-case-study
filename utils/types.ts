import { ImageSourcePropType } from "react-native";

export type User = {
  id: string;
  username: string;
  pp: any;
  hobbies: string;
  nationality: string;
  gender: string;
  sign: string;
  height: string;
  weight: string;
  job: string;
  location: string;
  dob: string;
  followers: number;
  following: number;
  isVerified: boolean;
  diamonds: number;
  membershipLevel: string;
  photos: string[];
};
export type StatisticsContainerProps = {
  user: User;
};

export type statisticProp = {
  param: string;
  count: number;
};

export type badgeProps = {
  icon: number;
  text: string;
  color: string;
};

export type Badge = {
  id: string;
  name: string;
  color: string;
  icon: number;
};

export type UserNameProps = {
  userName: string;
  isVerified: boolean;
};

export type InfoTagsContainerProps = {
  nationality: string;
  sign: string;
};

export type InfoTagProp = {
  text: string;
  icon: number;
};
