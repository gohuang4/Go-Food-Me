# APIs

# Accounts
## Sign up
Method: 'POST'
Path: /api/accounts/new

### Input:
```json
{
    "username": str,
    "password1": str,
    "password2": str,
    "email": str
}
```

### Output:
```json
{
    "id": num,
    "username": str,
    "password_1": str,
    "password_2": str,
    "email": str,
    "logged_in": nullable boolean
}
```
Creating an account takes a username, 2 passwords, an email, and saves them in the accounts database. An account can be created if the 2 passwords match and if the
passwords are strong enough. If the signup is successful, the user-provided data is returned as well as the id of their new account.

## Log in
Method: 'POST'
Path: /api/accounts/login

### Input:
```json
{
    "username": str,
    "password": str,
}
```

### Output:
```json
{
    "username": str,
    "email": str,
    "logged_in": boolean
}
```
To log in, a user inputs their username and password. If the username and password match a username and password in the accounts database, 'logged_in' is changed to 
'true'. Their username, email, and login status are returned.

## Create a new donation request

Method: 'POST'
Path: /api/donations

Input:

```json
{
    "items": str,
    "name": str,
    "description": str
}
```
Output:

```json
{
"id": int,
"items": str,
"name": str,
"description": str
}
```

Creating a donation uses incoming grocery store data to query grocery list API to get a URL for a list for the donation. Then, it saves the items, name, and description. It returns all of the data with the new databse id.