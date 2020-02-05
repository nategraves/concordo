import React, { FC, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Alert, Spin, Form, Typography, Tag } from "antd";

import { Queries } from "../data/Queries";

const { Item } = Form;
const { Text } = Typography;
const { CheckableTag } = Tag;

interface Department {
  id: string;
  name: string;
}

interface DepartmentTag {
  id: string;
  name: string;
  checked: boolean;
}

interface DepartmentPickerProps {
  onChange: (tags: string[]) => any;
}

const DepartmentPicker: FC<DepartmentPickerProps> = ({ onChange }) => {
  const [departments, setDepartments] = useState<DepartmentTag[]>([]);
  const { loading, error, data } = useQuery(Queries.departments, {
    onCompleted: data =>
      setDepartments(
        data.departments.map(({ id, name }: Department) => ({
          id,
          name,
          checked: false
        }))
      )
  });

  const handleTagClick = (index: number) => {
    departments[index].checked = !departments[index].checked;
    setDepartments([...departments]);
    onChange && onChange(departments.filter(d => d.checked).map(d => d.id));
  };

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return (
      <Alert type="error" message="There was a problem loading departments." />
    );
  }

  return (
    <Item label={<Text strong>Departments</Text>}>
      {departments.map(({ name, id, checked }, i) => (
        <CheckableTag
          key={id}
          checked={checked}
          onChange={() => handleTagClick(i)}
          style={{
            cursor: "pointer",
            border: `1px ${checked ? "solid" : "dashed"} rgba(0, 0, 0, 0.25)`
          }}
        >
          {name}
        </CheckableTag>
      ))}
    </Item>
  );
};

export default DepartmentPicker;
