Installation:
------------

```bash
$ npm install
```

Run:
------------

```bash
$ npm start
```

API:
------------

Base url: `http://localhost:3000`

```bash
GET /devices
```

```bash
GET /device/:id
```

```bash
DELETE /device/:id
```

```bash
POST /devices
```
> |  Request Body                                                                         | content-type          |
> |:--------------------------------------------------------------------------------------|:----------------------|
> | `{"system_name": "DESKTOP-START","type": "WINDOWS_WORKSTATION","hdd_capacity": "92"}` | `application/json`    |

```bash
PUT /device/:id
```
> |  Request Body                                                                         | content-type          |
> |:--------------------------------------------------------------------------------------|:----------------------|
> | `{"system_name": "DESKTOP-STOP","type": "WINDOWS_WORKSTATION","hdd_capacity": "99"}`  | `application/json`    |
