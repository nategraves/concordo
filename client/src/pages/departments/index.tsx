import React, { useState, FormEvent } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Spin, Result, Tag, Input, Form, Typography, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Queries, Mutations } from "../../data/Queries";
import DeletableDepartment from "../../components/DeletableDepartment";

const { Item } = Form;
const { Text } = Typography;

type DepartmentType = {
  id: string;
  name: string;
};

const WrappingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

const Departments = () => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [
    createDepartment,
    { loading: createLoading, error: createError, data: createData }
  ] = useMutation(Mutations.createDepartment, {
    refetchQueries: [{ query: Queries.departments }],
    onCompleted: () => {
      setName("");
      setNameTouched(false);
    }
  });

  const {
    loading: deptsLoading,
    error: deptsError,
    data: deptsData
  } = useQuery(Queries.departments);

  if (createLoading || deptsLoading) {
    return <Spin />;
  }

  if (deptsError || createError) {
    return (
      <Result
        status="error"
        title={
          deptsError
            ? "Problem loading departments"
            : "Problem creating department"
        }
        subTitle="Sorry about that. We've been alerted to the problem and have people looking into it."
      />
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createDepartment({
      variables: { data: { name } },
      refetchQueries: [{ query: Queries.departments }]
    });
  };

  const nameError = nameTouched && !name;

  return (
    <div>
      <WrappingRow>
        {deptsData.departments.length === 0 ? (
          <WrappingRow>
            <Text style={{ width: "100%" }}>
              No departments have been created.
            </Text>
            <Link to="/departments/create">Create one now</Link>
          </WrappingRow>
        ) : (
          deptsData.departments.map((dept: DepartmentType) => (
            <DeletableDepartment department={dept} />
          ))
        )}
      </WrappingRow>
      <form onSubmit={handleSubmit}>
        <Item
          validateStatus={nameError ? "error" : ""}
          help={nameError ? "The department name is required" : ""}
          label={<Text strong>Department Name</Text>}
        >
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            onFocus={() => setNameTouched(false)}
          />
        </Item>
        <Button htmlType="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Departments;
