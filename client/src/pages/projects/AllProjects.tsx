import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Spin, Result, Card, List, Avatar, Typography, Icon } from "antd";
import styled from "styled-components";

import { Queries } from "../../data/Queries";

const WrappingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;

const StyledCard = styled(Card)`
  width: 15rem;
  margin: 0 1rem 1rem;
`;

const { Text, Title } = Typography;

const AllProjects = () => {
  const { loading, error, data } = useQuery(Queries.projects);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return (
      <Result
        status="error"
        title="Problem loading projects"
        subTitle="Sorry about that. We've been alerted to the problem and have people looking into it."
      />
    );
  }

  interface Department {
    id: string;
    name: string;
  }

  interface ProjectType {
    id: string;
    name: string;
    departments: Department[];
  }

  return (
    <WrappingRow>
      {data.projects.map((project: ProjectType) => (
        <StyledCard
          title={
            <Text strong ellipsis>
              {project.name}
            </Text>
          }
          key={project.id}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />
          ]}
        >
          <List
            itemLayout="horizontal"
            dataSource={project.departments}
            renderItem={department => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar>{project.departments.length}</Avatar>}
                  title={<Text strong>{department.name}</Text>}
                  description={
                    <Text ellipsis style={{ fontSize: "0.5rem" }}>
                      {department.id}
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </StyledCard>
      ))}
    </WrappingRow>
  );
};

export default AllProjects;
