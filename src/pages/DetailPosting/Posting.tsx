import React from 'react';
import styled from 'styled-components';

import UserIcon from '@/assets/icons/user-icon.svg';
import LikeButton from '@/components/Button/LikeButton';

import './styles/posting.module.css';
import { B1Bold, B3, B3Bold, H2 } from '@/style/fonts/StyledFonts';
import { PostingDetailType } from '@/types';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/recoil/LoginAtom';
import EditDelete from './components/EditDelete';

const Posting: React.FC<PostingDetailType> = ({
  id,
  category,
  title,
  writer,
  body,
  hashtag,
  createdDate,
  isLike,
  setIsLike,
}) => {
  const userInfo = useRecoilValue(UserAtom);
  const currentPath = window.location.pathname;
  const writeType = currentPath.includes('review') ? 'review' : 'archive';

  return (
    <TextContainer>
      <PostingInfoContainer>
        <LeftBox>
          <B3Bold $fontColor="#FF7D2C">{category}</B3Bold>
          <H2 $fontColor="#100f0f">{title}</H2>
          <UserInfo>
            <img src={UserIcon} />
            <B3 $fontColor="#15191D">{writer}</B3>
          </UserInfo>
        </LeftBox>
        <RightBox>
          {userInfo.nickName === writer && (
            <EditDelete writeType={writeType} id={id} />
          )}
          <LikeButtonWrapper>
            <LikeButton
              isLike={isLike}
              setIsLike={setIsLike}
              type={writeType}
              id={id}
            />
          </LikeButtonWrapper>
        </RightBox>
      </PostingInfoContainer>
      <Seperator />
      <MainContent>
        <div
          className=".ql-body"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
        <TagContainer>
          {hashtag
            ?.split(',')
            ?.map(tag => <B1Bold $fontColor="#AEB3B8">{`${tag}`}</B1Bold>)}
        </TagContainer>
        <RegisterData>
          <B3Bold $fontColor="#15191D">{`등록일 : ${createdDate}`}</B3Bold>
        </RegisterData>
      </MainContent>
    </TextContainer>
  );
};

export default Posting;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 44px 40px 36px;
  margin-top: 80px;

  border-radius: 20px;
  border: 1px solid var(--grey-200, #e3e7ed);
  background: rgba(217, 217, 217, 0);
`;

const PostingInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LikeButtonWrapper = styled.div`
  width: 48px;
  height: 48px;

  position: absolute;
  bottom: 0;
  align-self: flex-end;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 8px;
  gap: 8px;

  img {
    width: 28px;
    height: 28px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: #e3e7ed;
  margin: 32px 0;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 48px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2px;
`;

const RegisterData = styled.div`
  align-self: flex-end;
  margin-top: 132px;
`;
