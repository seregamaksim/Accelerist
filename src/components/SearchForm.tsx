import { Form, Formik, FormikProps } from 'formik';
import { CSSProperties, useState } from 'react';
import Select, {
  ClearIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
  DropdownIndicatorProps,
} from 'react-select';

import styled from 'styled-components';
import EditIcon from '../static/images/EditIcon';
import EmailIcon from '../static/images/EmailIcon';
import FormikSelect from '../ui/FormikSelect';
import LabelInput from '../ui/LabelInput';

interface Values {
  test: string;
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
export default function SearchForm() {
  const [selectedOption, setSelectedOption] = useState<any>();
  // const ClearIndicator = ({ ...innerProps }: any) => {
  //   console.log('innerProps', innerProps);

  //   return (
  //     <div {...innerProps}>
  //       <EditIcon />
  //     </div>
  //   );
  // };

  return (
    <Root>
      <Wrapper>
        <Formik
          initialValues={{
            test: '',
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props: FormikProps<Values>) => (
            <Form>
              <LabelInput htmlFor="test" text="Label" />
              <FormikSelect
                name="test"
                label="text"
                options={options}
                isMulti={false}
              ></FormikSelect>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Root>
  );
}

const Root = styled.div`
  background-color: var(--white);
  border-radius: 6px;
  max-width: 1096px;
`;
const Wrapper = styled.div`
  padding: 40px;
`;
