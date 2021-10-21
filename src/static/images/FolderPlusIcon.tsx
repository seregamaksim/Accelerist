import * as React from 'react';

function FolderPlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-9a1 1 0 01-.832-.445L8.465 4H4zM1.879 2.879A3 3 0 014 2h5a1 1 0 01.832.445L11.535 5H20a3 3 0 013 3v11a3 3 0 01-3 3H4a3 3 0 01-3-3V5a3 3 0 01.879-2.121z"
        fill="#2BAEE0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z"
        fill="#2BAEE0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
        fill="#2BAEE0"
      />
    </svg>
  );
}

export default FolderPlusIcon;
