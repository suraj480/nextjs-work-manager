# ADDING REDUX TO WORK MANAGER
## step 1 install all these dependecies

### npm install redux-thunk
### npm i redux-devtools-extension
### npm i redux
### npm i react-redux

## step 2 (for add task )

### Create folder for redux
### inside redux folder create 4 folder 1.action-types 2.actions 3. reducer 4.store

### inside action-types folder create file action-types.js here define type for action (in capital letters )
![image](https://github.com/suraj480/nextjs-work-manager/assets/72219318/3dc79294-334a-4b26-9302-6cbf5c2ec180)
![image](https://github.com/suraj480/nextjs-work-manager/assets/72219318/6c46c374-1f4e-4a0f-9c1c-2dee5f695841)
![image](https://github.com/suraj480/nextjs-work-manager/assets/72219318/104e30d5-ac35-4a8b-933a-58b8d6f6395e)

### write the action, reducer and store.js
![image](https://github.com/suraj480/nextjs-work-manager/assets/72219318/902bf2c6-7b88-450a-b0ce-fed3a8faf6a9)

### wrap the main layout with Provider and pass store 
![image](https://github.com/suraj480/nextjs-work-manager/assets/72219318/3938e4db-f41e-430a-aebb-fe8fc465ac46)

### Write that action where-ever you want to perform specified the same (in this case in AddTask.jsx)
![image](https://github.com/suraj480/nextjs-work-manager/assets/72219318/2396026d-b332-4a7e-b2f4-42c5b7e052f7)

