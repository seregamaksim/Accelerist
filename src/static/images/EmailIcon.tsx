import * as React from 'react';

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.727 1.818a.914.914 0 00-.909.91v10.908c0 .498.411.91.91.91h14.545c.497 0 .909-.412.909-.91V2.727a.914.914 0 00-.91-.909H2.728zM0 2.728A2.733 2.733 0 012.727 0h14.546A2.733 2.733 0 0120 2.727v10.91a2.733 2.733 0 01-2.727 2.726H2.727A2.733 2.733 0 010 13.636V2.727z"
        fill="#2BAEE0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.164 2.206a.91.91 0 011.266-.224L10 7.981l8.57-5.999a.909.909 0 111.042 1.49l-9.09 6.363a.909.909 0 01-1.043 0L.388 3.472a.91.91 0 01-.224-1.266z"
        fill="#2BAEE0"
      />
    </svg>
  );
}

export default EmailIcon;
