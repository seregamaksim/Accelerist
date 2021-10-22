import { FieldInputProps, useField } from 'formik';
import React, { PropsWithoutRef } from 'react';
import Select, { ActionMeta } from 'react-select';

interface SelectS {
  isMulti: boolean;
  props: any;
}
export default function FormikSelect({
  label,
  isMulti = false,
  options,
  ...props
}: any) {
  const [field, meta, { setValue }] = useField(props);
  console.log('field', field);
  console.log('meta', meta);
  const customStyles = {
    option: (state: any) => {
      return {
        fontSize: '16px',
        lineHeight: '25px',
        color: 'var(--black)',
        padding: '10px 16px',
        ':hover': {
          backgroundColor: '#E9F9FF',
        },
      };
    },
    multiValue: () => ({
      backgroundColor: 'transparent',
    }),
    multiValueLabel: () => ({
      fontSize: '16px',
      lineHeight: '25px',
      color: 'var(--black)',
    }),
    // singleValue: (provided: any, state: any) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';

    //   return { ...provided, opacity, transition };
    // },
    menu: (provided: any, state: any) => {
      console.log('provided', provided);
      console.log('state', state);
      return {
        ...provided,
        margin: 0,
        borderRadius: '0px 0px 8px 8px',
        boxShadow: 'none',
        border: '1px solid #E8E8E8',
        borderTop: 0,
      };
    },
    control: (provided: any, state: any) => {
      return {
        ...provided,
        // borderBottom: state.selectProps.
      };
    },
  };
  const onChange = (e: any, meta: ActionMeta<any>) => {
    const values = isMulti ? e.map((item: any) => item.label) : [e.label];
    console.log('values', values);
    console.log('meta', meta);
    if (meta.action !== 'select-option') {
      setValue(values);

      return values;
    }

    setValue(values);
  };
  return (
    <div>
      <Select
        styles={customStyles}
        inputId={props.name}
        defaultValue={field.value}
        options={options}
        onChange={onChange}
        isMulti={isMulti}
        components={{
          MultiValueRemove: () => null,
          IndicatorSeparator: null,
        }}
      />
      {meta.touched && meta.error ? (
        <div className="form-text text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
}
