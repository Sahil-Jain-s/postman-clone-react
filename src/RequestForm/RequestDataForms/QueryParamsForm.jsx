import React from "react";
import GenericKeyValueFormItem from "../../components/GenericKeyValFormItem";
const QueryParamsForm = () => {
  return (
    <>
      <h3>{"Query Params"}</h3>
      <GenericKeyValueFormItem fieldName={"params"} />
    </>
  );
};
export default QueryParamsForm;
