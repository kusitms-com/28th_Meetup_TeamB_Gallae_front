import { UserAtom } from '@/recoil/LoginAtom';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const AdminLayout = () => {
  const userInfo = useRecoilValue(UserAtom);
  useEffect(() => {
    if (userInfo.role !== 'MANAGER') {
      window.alert('관리자만 접근 가능한 페이지입니다.');
      window.location.href = '/';
    }
  }, []);
  return <Outlet />;
};

export default AdminLayout;
