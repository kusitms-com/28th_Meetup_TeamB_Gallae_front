import { styled } from 'styled-components';

interface PropTypes {
  $fontColor: string;
  $hoverColor?: string;
}

export const B1 = styled.pre<PropTypes>`
  font-family: 'SUIT-Regular';
  font-size: 20px;
  line-height: 150%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const B1Bold = styled.pre<PropTypes>`
  font-family: 'SUIT-Bold';
  font-size: 20px;
  line-height: 150%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const B2 = styled.pre<PropTypes>`
  font-family: 'SUIT-Regular';
  font-size: 18px;
  line-height: 140%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const B2Bold = styled.pre<PropTypes>`
  font-family: 'SUIT-Bold';
  font-size: 18px;
  line-height: 140%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const B3 = styled.pre<PropTypes>`
  font-family: 'SUIT-Regular';
  font-size: 16px;
  line-height: 140%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const B3Bold = styled.pre<PropTypes>`
  font-family: 'SUIT-Bold';
  font-size: 16px;
  line-height: 140%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const B4 = styled.pre<PropTypes>`
  font-family: 'SUIT-Regular';
  font-size: 14px;
  line-height: 140%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const B4Bold = styled.pre<PropTypes>`
  font-family: 'SUIT-Bold';
  font-size: 14px;
  line-height: 140%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const H0 = styled.pre<PropTypes>`
  font-family: 'SUIT-ExtraBold';
  font-size: 44px;
  line-height: 150%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const H1 = styled.pre<PropTypes>`
  font-family: 'SUIT-ExtraBold';
  font-size: 32px;
  line-height: 150%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const H2 = styled.pre<PropTypes>`
  font-family: 'SUIT-ExtraBold';
  font-size: 28px;
  line-height: 150%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export const H3 = styled.pre<PropTypes>`
  font-family: 'SUIT-ExtraBold';
  font-size: 24px;
  line-height: 150%;
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;
