import { useState } from 'react';
import styled from 'styled-components';
import UploadIcon from '../static/images/UploadIcon';
import { useAppDispatch } from '../store/hooks';
import { downloadExcel } from '../store/savedList/thunks';
import { ExcelResponse } from '../store/savedList/types';
import ButtonWithIcon from '../ui/ButtonWithIcon';

interface IExportBtnProps {
  queryParams?: string;
  id: string;
  name: string;
}

export default function ExportBtn({ queryParams, id, name }: IExportBtnProps) {
  const dispatch = useAppDispatch();
  const [dataFile, setDataFile] = useState<ExcelResponse>({} as ExcelResponse);
  function submit() {
    dispatch(downloadExcel(id)).then((res: any) => {
      const url = URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      // the filename you want
      a.download = name;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      a.remove();
    });
  }
  return (
    <Root>
      <ButtonWithIcon
        icon={<UploadIcon />}
        text="Export to Excel"
        handleClick={submit}
      />
    </Root>
  );
}

const Root = styled.div``;
