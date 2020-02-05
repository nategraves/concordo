import React, { useState, FormEvent } from "react";
import { Input, Form, Typography, DatePicker, Button } from "antd";
import moment from "moment";
import { useMutation } from "@apollo/react-hooks";

import { Mutations } from "../../data/Queries";
import { DepartmentPicker } from "../../components";

const { Item } = Form;
const { Title, Text } = Typography;

type CreateProjectInput = {
  name: string;
  departments: string[];
};

const CreateProject = () => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [departments, setDepartments] = useState<string[]>([]);
  const [createProject, { data, loading, error }] = useMutation(
    Mutations.createProject
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProject({
      variables: {
        data: {
          name,
          departments: { connect: departments.map(d => ({ id: d })) }
        }
      }
    });
  };

  const handleDepartmentChange = (depts: string[]) => setDepartments(depts);

  const nameError = nameTouched && !name;

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Title level={3}>Create a new project</Title>
      <Item
        validateStatus={nameError ? "error" : ""}
        help={nameError ? "The project name is required" : ""}
        label={<Text strong>Project Name</Text>}
      >
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          onFocus={() => setNameTouched(false)}
        />
      </Item>
      <Item label={<Text strong>Production Start</Text>}>
        <DatePicker defaultValue={moment()} format={"MMM DD, YYYY"} />
      </Item>
      <DepartmentPicker onChange={handleDepartmentChange} />
      <Item>
        <Button htmlType="submit">Create</Button>
      </Item>
    </form>
  );
};

export default CreateProject;
