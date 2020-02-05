import React, { FC } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Tag } from "antd";

import { Mutations, Queries } from "../data/Queries";

interface DeletableDepartmentProps {
  department: {
    id: string;
    name: string;
  };
}

const DeletableDepartment: FC<DeletableDepartmentProps> = ({ department }) => {
  const { name, id } = department;
  const [deleteDepartment, { loading, error, data }] = useMutation(
    Mutations.deleteDepartment,
    {
      variables: { where: { id } },
      refetchQueries: [{ query: Queries.departments }]
    }
  );
  return (
    <Tag key={id} closable onClose={() => deleteDepartment()}>
      {name}
    </Tag>
  );
};

export default DeletableDepartment;
