
 ## 1. Create (POST):
- 200 OK: The request was successful, and a new resource was created.
- 201 Created: The request was successful, and a new resource was created. This is typically used when returning the URL of the newly created resource in the response headers.

## 2. Read (GET):
- 200 OK: The request was successful, and the response contains the requested data.
- 404 Not Found: The requested resource could not be found.

## 3. Update (PUT/PATCH):
- 200 OK: The request was successful, and the resource was updated.
- 204 No Content: The request was successful, and there is no content to send back in the response payload.

## 4. Delete (DELETE):
- 200 OK: The request was successful, and the resource was deleted.
- 204 No Content: The request was successful, and there is no content to send back in the response payload.

