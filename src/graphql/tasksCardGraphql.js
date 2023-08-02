import { gql } from "@apollo/client";

export const createTask = gql`
   mutation CreateTask(
    $title: String!
    $body: String!
    $ownerId: ID!
    $taskListId: ID!
    $foreground: String!
    $background: String!
    $completed: Boolean
  ) {
    createTask(
      title: $title
      body: $body
      ownerId: $ownerId
      taskListId: $taskListId
      foreground: $foreground
      background: $background
      completed: $completed
    )
  }
`;

export const tasksByOwner = gql`
  query tasksByOwner($ownerId: ID!, $taskListId: ID!) {
    tasksByOwner(ownerId: $ownerId, taskListId: $taskListId) {
      id
      title
      body
      ownerId
      taskListId
      foreground
      background
      createdAt
      updatedAt
      expireAt
      completed
      taskList {
      name
      foreground
      background
      createdAt
      updatedAt
      completed
    }
    }
  }
`;
export const deleteTask = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(_id: $id)
  }
`;

export const updateTask = gql`
 mutation Mutation($id: ID!, $background: String, $title: String, $body: String, $foreground: String, $completed: Boolean, $expireAt: Date) {
  updateTask(_id: $id, background: $background, title: $title, body: $body, foreground: $foreground, completed: $completed, expireAt: $expireAt)
}
`;
