export type UserType = keyof typeof UserTypeMap;
export const UserTypeMap = {
  middle_School: 'middle_School',
  university: 'university',
} as const;
export const userTypeList = [
  {
    userType: UserTypeMap.middle_School,
    label: '中学',
    icon: 'MS',
    title: '中学',
  },
  {
    userType: UserTypeMap.university,
    label: '大学',
    icon: 'UNI',
    title: '大学',
  },
] as const;
