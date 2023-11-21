import { UserInfoType } from '@/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'persist-atom-key',
  storage: localStorage,
});

// 사용자 정보를 저장하는 Atom
export const UserAtom = atom<UserInfoType>({
  key: 'UserAtom',
  default: {
    id: -1,
    loginId: '',
    nickName: '',
    email: '',
    name: '',
    imageUrl: '',
    phoneNumber: '',
  },
  effects_UNSTABLE: [persistAtom],
});
