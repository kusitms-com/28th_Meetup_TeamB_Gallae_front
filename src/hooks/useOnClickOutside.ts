import { useEffect } from 'react';

export default function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      // 모달 안을 클릭했는지
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      // 모달 밖을 클릭했는지
      handler();
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}
