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
query Query($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    avatar
    background
    email
    genderId
    id
    name
    nit
    password
    phone
    rol {
      id
      name
    }
    sexo {
      id
      name
    }
  }
}
`
export const createUser = gql`
  mutation CreateUser($name: String!, $nit: String, $phone: String, $email: String!, $password: String!, $genderId: ID) {
  createUser(name: $name, nit: $nit, phone: $phone, email: $email, password: $password, genderId: $genderId)
}
`;