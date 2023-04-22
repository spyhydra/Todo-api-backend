
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
```
##Youtube Tutorial Link :

## 🔗 Links
[![portfolio](![yt](https://user-images.githubusercontent.com/49969478/233798451-a9652d93-1a86-42ab-b98a-9a2eab3f075e.png)
)](https://youtu.be/BLl32FvcdVM)

```

```
Base Url : http://localhost/

http://localhost/users/register : You can Register user by POST request and parsing name,email,password
```

![Screenshot (42)](https://user-images.githubusercontent.com/49969478/233797260-c2fc66bf-f6b9-4f11-bda5-4520841c9adf.png)

```
 For Creating Jwt token :
http://localhost/users/createtoken

```

![Screenshot (43)](https://user-images.githubusercontent.com/49969478/233797506-3aa30772-d3e9-4525-9cc1-18b9afc0b8a0.png)

```
Adding Task :  http://localhost/tasks/task    
parameter: task , description , complete(true,false)

```

![Screenshot (44)](https://user-images.githubusercontent.com/49969478/233798026-5399314a-b976-4731-8760-536557cc06cb.png)









