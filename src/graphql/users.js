const { gql } = require("@apollo/client");

export const users = gql`
    query Users {
    users {
      id
      nit
      name
      email
      password
      phone
    }
  }
`

export const userLogin = gql`
query User($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    id
    name
    nit
    phone
    email
    password
    genderId
    rolId
    sexo {
      id
      name
    }
    rol {
      id
      name
    }
    avatar
    background
  }
}
`
export const createUser = gql`
mutation CreateUser($name: String!, $nit: String!, $phone: String!, $email: String!, $password: String!, $rolId: ID!, $genderId: ID!) {
  createUser(name: $name, nit: $nit, phone: $phone, email: $email, password: $password, rolId: $rolId, genderId: $genderId)
}
`