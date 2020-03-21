import gql from "graphql-tag";

const Fragments = {};

const Queries = {
  departments: gql`
    {
      departments {
        id
        name
      }
    }
  `,
  projects: gql`
    {
      projects {
        id
        name
        createdAt
        departments {
          id
          name
        }
        createdBy {
          id
          name
          email
          createdAt
        }
      }
    }
  `
};

const Mutations = {
  createProject: gql`
    mutation createProject($data: ProjectCreateInput!) {
      createProject(data: $data) {
        id
        name
        createdAt
        departments {
          id
          name
        }
        createdBy {
          id
          name
          email
          createdAt
        }
      }
    }
  `,
  createDepartment: gql`
    mutation createDepartment($data: DepartmentCreateInput!) {
      createDepartment(data: $data) {
        id
        name
      }
    }
  `,
  deleteDepartment: gql`
    mutation deleteDepartment($where: DepartmentWhereUniqueInput!) {
      deleteDepartment(where: $where) {
        id
      }
    }
  `,
  deleteProject: gql`
    mutation deleteProject($where: ProjectWhereUniqueInput!) {
      deleteProject(where: $where) {
        id
      }
    }
  `,
  login: gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `,
  register: gql`
    mutation register($email: String!, $password: String!) {
      register(email: $email, password: $password) {
        id
        name
        email
      }
    }
  `
};

export { Fragments, Queries, Mutations };
