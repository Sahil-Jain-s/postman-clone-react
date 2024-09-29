import React from "react";
import GenericKeyValueFormItem from "../../components/GenericKeyValFormItem";
const HeadersForm = () => {
  return (
    <>
      <h3>{"Headers"}</h3>
      <GenericKeyValueFormItem fieldName={"headers"} />
    </>
  );
};
export default HeadersForm;
