const { gql } = require("@apollo/client");

export const createTaskList = gql`
  mutation CreateTaskList(
    $name: String!
    $ownerId: ID!
    $foreground: String!
    $background: String!
  ) {
    createTaskList(
      name: $name
      ownerId: $ownerId
      foreground: $foreground
      background: $background
    )
  }
`;

export const taskListsByOwner = gql`
  query TaskListsByOwner($ownerId: ID!) {
  taskListsByOwner(ownerId: $ownerId) {
    id
    name
    ownerId
    foreground
    background
    createdAt
    updatedAt
    completed
    tasks {
      id
      title
      body
      ownerId
      taskListId
      foreground
      createdAt
      updatedAt
      expireAt
      completed
    }
  }
}
`;

export const deleteTaskList = gql`
  mutation DeleteTaskList($id: ID!) {
    deleteTaskList(_id: $id)
  }
`;

export const updateTaskList = gql`
mutation ($name: String, $id: ID!) {
  updateTaskList(name: $name, _id: $id)
}
`