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
'true'. Their username, email, and login status are returned if login is successful.

## Edit account info
Method: 'PUT'
Path: /api/accounts/<int:id>

### Input:
```json
{
    "username": str,
    "password_1": str,
    "password_2": str,
    "email": str
}
```

### Output:
```json
{
    "username": str,
    "password1": str,
    "email": str
}
```
Any change to account info can be made if the account holder is signed in and they have entered their current/old password. The text fields showing the account info can
be edited but changes can only be saved after a "save" button is pressed and the original password is entered correctly. For now, the only account info that the user 
can edit is their username, password, and email. If the new password_1 and password_2 do not match, the save will not happen and the displayed data will be changed back
to the current user data.

## Delete account
Method: 'DELETE'
Path: /api/accounts/<int:id>

### Input:
```json
{
    "password_1": str
}
```

### Output:
```json
{
    "id": num
}
```
If the user wants to delete their account, they can do so by pressing a "delete" button and then correctly entering their password. Their id is returned on success.

# Donations
## Create a new donation request

Method: 'POST'
Path: /api/donations

Input:

```json
{
    "items": str,
    "name": str,
    "description": str,
    "picture_url": str
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