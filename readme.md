# Nodejs Expressjs MongoDB JWT Ready-to-use API Project Structure

A ready-to-use boilerplate for REST API Development with Node.js, Express, and MongoDB with JWT authentication


## Getting started


This is a basic API skeleton written in JavaScript ES2015. Very useful to building a RESTful web APIs for your front-end platforms like Android, iOS or JavaScript frameworks (Angular, Reactjs, etc).

This project will run on **NodeJs** using **MongoDB** as database. I had tried to maintain the code structure easy as any beginner can also adopt the flow and start building an API. Project is open for suggestions, Bug reports and pull requests.




## Features

-   Token Based Authentication (Register/Login with hashed password)
-   Email helper ready just import and use.
-   JWT Tokens, make requests with a token after login with `Authorization` header with value `Bearer yourToken` where `yourToken` will be returned in Login response.
-   Pre-defined response structures with proper status codes.

## Software Requirements

-   Node.js
-   Text Editor (VS Code recomended)
## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/dineshgopalchand/nodejs-jwt-mongo-atlas.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env` on root directory of project.
2.  Replace DB_CONNECT value by  **your connection string**
3.  Added your own **TOKEN_SECRET**


### Running  API server locally

```bash
npm start
```