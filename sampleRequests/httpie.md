# Sample HTTPIE requests

1. Walk through the in README first
2. Start your server

```
npm start / npm run dev
```

3. Open another terminal
4. Try out the requests below

## GET /

```bash
http GET :4000
```

## POST /echo

```bash
http POST :4000/echo hello="world" number:=0 cheesesArray:='["cheddar", "rochefort", "stilton"]'
```

## POST /signup

```bash
http POST :4000/signup email="newuser@fastcompany.com" password="test1234" name="John Doe"
```

## POST /login

```bash
http POST :4000/login email="test@test.com" password="test1234"
```

## GET /me

Get a token first:

```
http POST :4000/login email="test@test.com" password="test1234"
```

```bash
http GET :4000/me Authorization:"Bearer <PASTE_YOUR_TOKEN_HERE>"
```

```bash
http GET :4000/me Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU4NDYwNzIyMSwiZXhwIjoxNTg0NjE0NDIxfQ.PcK4zqUIuA347cW7jdLFSH-86RckZtPw4RFeChwqh2o"
```

## POST /authorized_post_request

Get a token first:

```
http POST :4000/login email="test@test.com" password="test1234"
```

```bash
http POST :4000/authorized_post_request Authorization:"Bearer <PASTE_YOUR_TOKEN_HERE>" hello="world" number:=0 cheesesArray:='["cheddar", "rochefort", "stilton"]'
```

```bash
http POST :4000/authorized_post_request Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE1ODQ2MTQxMjYsImV4cCI6MTU4NDYyMTMyNn0.3WKeq1MmGQaq5iMSds3ff8JNBJa5D2k3DDW645OFrAY" hello="world" number:=0 cheesesArray:='["cheddar", "rochefort", "stilton"]'
```
