
# Password Manager
Welcome to the Password Manager repository! This project is designed to help users organize and manage their passwords securely. It incorporates React for the frontend, MongoDB for the database, Redux for state management, and Node.js for the backend.
## Installation

To run this project locally, follow these steps:

### Prerequisites

=> Node.js and npm (Node Package Manager) installed 

=> MongoDB installed and running locally or accessible remotely

### Steps

#### clone repository
```bash
  git clone https://github.com/your-username/password-manager.git
```
#### Install Dependencies
 ```bash
  cd password-manager
  npm install
```
#### Start the Development Server
```bash
  npm start
```
This will start the frontend and backend servers concurrently.

#### Access the Application

Open your browser and navigate to http://localhost:3000 to access the Password Manager application.

## Encryption and Decryption

The Password Manager employs advanced security measures for encrypting and decrypting sensitive information:

##### Double Encryption:
We use both bcrypt for hashing passwords and AES (Advanced Encryption Standard) for encrypting and decrypting data.

##### bcrypt: 
This library is used for securely hashing passwords before storing them in the database. It provides a robust and salted hashing mechanism to protect user passwords.

##### AES (Advanced Encryption Standard):
AES is a symmetric encryption algorithm used to encrypt and decrypt data securely. It ensures that data stored in the database is encrypted and can only be decrypted with the correct key.
## API Reference

#### Get all items

```http
  GET /api/files
  GET /api/usernames
```


#### POST item

```http
  POST /api/newUser
```
## Backend Technology

### we use two tables:

#### 1) users
#### 2) files



## Authors

- [@JeyaSurya](https://github.com/Jsuryaboi-08)
- [@shiva-shanmugam](https://github.com/shiva-shanmugam)
- [@Geen](https://github.com/Geen-19)

