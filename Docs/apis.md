## APIs

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