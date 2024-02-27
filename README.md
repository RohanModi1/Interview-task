## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install 
Install vite@latest npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install it

```bash
npm create vite@latest 
```
### Install Tailwind Css
Use this link for installation steps : https://tailwindcss.com/docs/guides/vite
## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project root folder and type the following command to install all npm packages in root folder 

```bash
npm install
```
for frontend folder type the following command

```bash
cd frontend
npm install
```

In order to run the application in backnend Type the following command in root folder 

```bash
npm run dev
```
The Application backend Runs on **localhost:3000**

then type the follwing command in another terminal 

```bash
cd frontend
npm run dev
```
frontend runs on **localhost:5173**

## Postmen api tester commands

### for sign up user 
Path : localhost:3000/backend/auth/signup
Method : Post

send details in json format 
example: 
```bash
{
  "username":"user7",
  "email":"user7@gamil.com",
  "password":"user7"
}
```
### for sign in 

Path : localhost:3000/backend/auth/signin
Method : Post 

send details in json format 
example: 
```bash
{
  "username":"user7",
  "password":"user7"
}
```


