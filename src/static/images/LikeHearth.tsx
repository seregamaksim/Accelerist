import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  liked: number;
}

function LikeHearth(props: Props) {
  return (
    <svg
      width={20}
      height={18}
      fill={props.liked ? '#F05658' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.85 3.073a4.258 4.258 0 00-1.383-.942 4.193 4.193 0 00-3.263 0 4.258 4.258 0 00-1.383.942l-.822.837-.821-.837A4.223 4.223 0 006.163 1.8c-1.13 0-2.215.458-3.015 1.273A4.388 4.388 0 001.9 6.145c0 1.153.45 2.258 1.25 3.073l.82.837L10 16.2l6.03-6.145.821-.837a4.35 4.35 0 00.925-1.41 4.417 4.417 0 000-3.326 4.35 4.35 0 00-.925-1.41z"
        stroke="#F05658"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LikeHearth;
