import * as React from 'react';

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.743 1.91a.833.833 0 011.179 0l4.167 4.167a.833.833 0 010 1.179L7.255 18.089a.833.833 0 01-.589.244H2.499a.833.833 0 01-.833-.833v-4.167c0-.22.088-.433.244-.589L12.743 1.911zM3.333 13.68v2.988H6.32l10-10-2.988-2.988-10 10z"
        fill="#2BAEE0"
      />
    </svg>
  );
}

export default EditIcon;
