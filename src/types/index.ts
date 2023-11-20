/** 여행 프로그램 관련 type */
export interface ProgramMainInfoType {
  id: number;
  hashTag: string[];
  photoUrl: string;
  programName: string;
  remainDay: string;
  like: number;
}

export interface PostingType {
  category: string;
  title: string;
  id: number;
  writer: string;
  createdDate: string;
}

export interface ProgramDetailInfoType extends ProgramMainInfoType {
  location: string;
  recruitStartDate: string;
  recruitEndDate: string;
  tripStartDate: string;
  tripEndDate: string;
  contact: string;
  contactNumber: string;
  programLink: string;
}

/** Search 페이지의 Filter 관련 type */
export interface FilterListType {
  title: string;
  enTitle: string;
  buttonSize: 'small' | 'medium' | 'large';
  calendar: boolean;
  items: string[];
}

export interface FilterInputType {
  [key: string]: string | null;
  sort: string | null;
  location: string | null;
  program: string | null;
  category: string | null;
  recruitStartDate: string | null;
  recruitEndDate: string | null;
  tripStartDate: string | null;
  tripEndDate: string | null;
}

/** Search 페이지의 CustomCalendar 관련 type */
export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

/** Component 관련 type */
export interface ButtonStyleType {
  $buttonColor: string;
  $buttonWidth: string;
  $buttonHeight: string;
  $hoverTextColor?: string;
}

/** Register(공고 등록) 관련 타입 */
export interface ProgramRegisterInfoType {
  [index: string]: string;
  programName: string;
  location: string;
  programType: string;
  programDetailType: string;
  recruitStartDate: string;
  recruitEndDate: string;
  activeStartDate: string;
  activeEndDate: string;
  contact: string;
  contactPhone: string;
  link: string;
  hashtag: string;
  body: string;
}

export interface ProgramRegisterFieldType {
  [key: string]: {
    [key: string]: string;
  };
}

export interface InputType {
  [key: string]: string | null;
}

export interface SignUpProps {
  inputData: InputType;
  setInputData: React.Dispatch<React.SetStateAction<InputType>>;
  profile: File | null;
  setProfile: React.Dispatch<React.SetStateAction<File | null>>;
}

/* 포스팅 상세 관련 타입 */
export interface PostingDetailType {
  type: string;
  title: string;
  nickName: string;
  content: string;
  hashTags: string[];
  registeredDate: string;
  attatchment: string;
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PostingDataType {
  type: string;
  title: string;
  nickName: string;
  content: string;
  hashTags: string[];
  registeredDate: string;
  attatchment: string;
}

export interface MileageHistoryType {
  id: number;
  date: string;
  time: string;
  type: string;
  detail: string;
  usage: number;
}

export interface TipDataType {
  title: string;
  content: string[];
}

/** 갈래 소개 관련 타입 */
export interface GallaeIntroduction {
  [key: string]: {
    title: string;
    subTitle: string;
    content: string[];
  };
}

// 사용자 정보 관련 타입
export interface UserInfoType {
  id: number;
  nickName: string;
  email: string;
  name: string;
  phoneNumber: string;
}
