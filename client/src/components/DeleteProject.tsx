import React, { FC } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Icon } from "antd";

import { Mutations, Queries } from "../data/Queries";

interface DeleteProjectProps {
  id: string;
}

const DeleteProject: FC<DeleteProjectProps> = ({ id }) => {
  const [deleteProject, { loading, error, data }] = useMutation(
    Mutations.deleteProject,
    {
      variables: { where: { id } },
      refetchQueries: [{ query: Queries.projects }]
    }
  );
  return <Icon type="delete" key="delete" onClick={() => deleteProject()} />;
};

export default DeleteProject;
