# MySecret

![participacao_semanaddev](https://github.com/FelipeRBDantas/semanaddev-mysecret/assets/47251032/4643da4c-0fc1-4d01-863f-9106fb0fc13c)

## Certificado

![certificado-2024-02-20-fscamp-d2ac734d-2f2a-41a1-b7e7-f4b3b46e32b3](https://github.com/FelipeRBDantas/semanaddev-mysecret/assets/47251032/e923f8b5-f990-487b-bfbc-b6f612d20445)

## Requirements

- Route -> Controller -> UseCase -> Access the DB (DAO, Repository)

- [x] The user should create an account with email and password
- - [x] UseCase UseCreate
- [x] The user should update their profile, only their name and picture
- [x] The user should authenticate in the account
- [x] The user should create a question
- [x] The user should list questions created
- [x] The user should remove create a question
- [x] The user should answer questions anonymously
- [x] Optionally, the user can answer the question with your information

## Database

- A User can be the author of multiple Questions
- A User can be the author of multiple Answers
- A Question has a single User as its author
- A Question can have multiple Answers
- An Answer has a single User as its author
- An Answer belongs to a single Question

### Entities


```text
Users
- userId [uuid, PK]
- name [varchar(255), not null]
- email [varchar(255), not null]
- pictureUrl [varchar(255), nullable]
- password [text, not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]

Questions
- questionId [uuid, PK]
- userId [uuid, FK]
- question [varchar(255), not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]

Answers
- answerId [uuid, PK]
- questionId [uuid, FK]
- userId [uuid, FK, null]
- answer [varchar(255), not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]
```

Entity relationships:

```text
User (ID, ...)
|--< Questions (UserID [FK], ...)
    |--< Answers (UserID [FK], QuestionID [FK], ...)
```

## Thunder Client - Tests

### Users - POST (/api/user)

![thunder_client_users_1](https://github.com/FelipeRBDantas/semanaddev-mysecret/assets/47251032/15caf8ca-6e5f-4613-bb67-8df0c64ebfb2)

### Users - GET (/user/:userId/questions)

![thunder_client_users_2](https://github.com/FelipeRBDantas/semanaddev-mysecret/assets/47251032/fb5bce1e-6123-45de-95aa-a211adbaebc5)

### Questions - POST (/api/question)

![thunder_client_question_1](https://github.com/FelipeRBDantas/semanaddev-mysecret/assets/47251032/b56a0796-4fa4-4ab8-a701-9af76134b617)

### Questions - POST (/api/question/:questionId/answers)

![thunder_client_question_2](https://github.com/FelipeRBDantas/semanaddev-mysecret/assets/47251032/afe9a1dd-7838-48ea-a5e0-89569d7e4eb3)

### Questions - GET (/api/question/:questionId/answers)

![thunder_client_question_3](https://github.com/FelipeRBDantas/semanaddev-mysecret/assets/47251032/5b6e298d-621f-4835-9d27-bec9be52b436)
