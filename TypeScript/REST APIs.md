REST APIs

REST - Representational State Transfer

A set of principles used for designing web services. A REST API follows REST principles to allows applications to communicate over HTTP.
REST is a set of rules and principles that tells how an API must be structured.
GET, POST, etc. are HTTP methods. REST is a set of rules that tells us how to use these HTTP methods to design APIs properly

HTTP Methods

# GET
- Retrieve data, used to fetch data from server, doesn't return anything
- returns the body of the resource asked 
- GET /api/v1/users - get all users - returns body of all users
- GET /api/v1/users/36 - get users with id 36
- returns smth like {id: 36, name: Bilal, email: 'bilal@gmail.com'}

# POST
- used to send data to the server to create new user/resource
- contains a body
- server decides the id of resource(user) itself
- isn't safe ... a same request sent 5 times will create 5 resources with same body
- POST /api/v1/users with body {name: 'Bilal', email: 'bil@l.gmail.com'}

# PUT
- replace operation
- used to completely replace/update an existing resource or create if it doesnt exist
- when creating .. client decides the id (must know the exact url where the resource will be created)
- POST /api/v1/users/42 with body {name: "Arham", email: "arham@gmai.com"} 
- completely overwrites user 42's data while .. id is same but data is the one we passed

# PATCH
- modify operation
- makes updates to the existing body of resource or adds a new feild
- PATCH /api/v1/users/36 with body {dmail: 'bilalf@gmail.com', age: 20}
- keeps the name same .. updates the email ... and adds age

# DELETE
- remove a specific resource from the server
- no body required
- DELETE PATCH /api/v1/users/36 - completely deletes user with id 36
- if run again then nothing will change and server will just return 404 not found error

# HEAD
- returns only the http header (called metdata too) without json body
- used to tell that this resource exists and api has accessed it 
- useful for checking info about a resource without downloading the data
- Checking if a large file has changed before downloading it (by looking at the Last-Modified or ETag headers).
- Testing if a URL is valid and reachable (returns a 200 OK or 404 Not Found).
- Checking the size of a file before downloading it (Content-Length).

# HTTP HEADERS

1. Content & Data Details (The "What")
These headers describe the payload (body) being sent or received so the application knows how to process it.

Content-Type: Tells the receiver what kind of data the body is.

Examples: application/json (REST API data), text/html (web page), image/png.

Content-Length: The exact size of the body in bytes.

Content-Encoding: Tells you if the data is compressed to save bandwidth (e.g., gzip or br for Brotli).

2. Authentication & Security (The "Who")
These headers are responsible for verifying identity and protecting the connection.

Authorization: Carries credentials to authenticate the client with the server.

Example: Bearer eyJhbGciOiJIUzI1NiIsIn... (a JWT token used in standard API authentication).

Strict-Transport-Security (HSTS): Tells the browser to only communicate with this site using secure HTTPS, never unencrypted HTTP.

Content-Security-Policy (CSP): Restricts where the browser is allowed to load resources (scripts, images) from, preventing malicious injection attacks.

3. Caching (The "When")
Caching headers prevent unnecessary network requests by telling the client how long it can safely reuse local copies of data.

Cache-Control: The primary tool for caching. It specifies instructions like max-age=3600 (cache this for 1 hour) or no-store (never cache this sensitive data).

ETag (Entity Tag): A unique validation string (like a fingerprint or hash) representing a specific version of a resource. If the resource changes on the server, the ETag changes.

Last-Modified: The exact timestamp of when the resource was last updated.

4. Environment & Device Context (The "How")
These headers give details about the client making the request or the server responding to it.

User-Agent: Sent by the client to describe its browser, operating system, and device.

Example: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/... (Tells the server the request is coming from a Windows 10 PC).

Server: Sent by the server to identify its software.

Example: nginx/1.25.1 or Apache/2.4.41.

Origin: Informs the server where the request originally came from (used for security/CORS).
