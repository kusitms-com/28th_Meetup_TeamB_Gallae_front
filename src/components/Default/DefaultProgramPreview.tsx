import styled from 'styled-components';

const DefaultProgramPreview = () => {
  return (
    <Container>
      <div className="text">
        <span>이미지가 없어요!</span>
        <span>클릭하여 상세내용을 확인해보세요!</span>
      </div>
    </Container>
  );
};

export default DefaultProgramPreview;

const Container = styled.div`
  width: 323px;
  height: 400px;
  border-radius: 20px;
  background-color: #d3d3d3;
  position: relative;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    position: absolute;
    top: 254px;
    left: 50%;
    transform: translate(-50%, 0);
    width: max-content;
  }

  span {
    color: var(--grey-600, #666b6f);
    font-family: SUIT-Medium;
    font-size: 16px;
    font-style: normal;
    line-height: 140%; /* 22.4px */
  }
`;
