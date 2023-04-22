
# Project Title

Node.js RESTful API for Todo App with JWT Authentication

## Installation

Setup this Api with following Instruction in Windos termainal

```bash
 1) open termainal 
 2) git clone https://github.com/spyhydra/Todo-api-backend
 3) cd Todo-api-backend
 4) Run  command on termainal npm install 
 5) Now You are Ready to Use this Api 
```
## Requirements
```bash
1) Nodejs install on System
2) Download Postman From internet
 ```

 

## API Reference

#### Get all items

```http
  Register user

  POST http://localhost/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name,email,password` | `string` | **Required**. all are Required |

#### Get item
For Creating jwt autentication ('Its Must Required for CRUD Operations')
```http
Creating jwt token
http://localhost/users/createtoken
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email,password`      | `string` | **Required**. All Parameter Required |

your basic function done






## Features

- Api user can perfrom basic CRUD operations
- Api route secure By jwt autentication
- user can filter their task according to complete or pending 
- Optimise code written so api will be running smoothly 


## Demo

Base Url : http://localhost/

http://localhost/users/register
```
![Screenshot (42)](https://user-images.githubusercontent.com/49969478/233797260-c2fc66bf-f6b9-4f11-bda5-4520841c9adf.png)
```





