# Restful Booker API Test Cases

**Base URL:** `https://restful-booker.herokuapp.com`
**Tool:** Postman

---

## TC_01: Create booking with all valid fields

| Item                         | Details                                  |
| ---------------------------- | ---------------------------------------- |
| **Test Case ID**             | TC_01                                    |
| **Scenario**                 | Create a booking with all fields correct |
| **HTTP Method and Endpoint** | `POST /booking`                          |
| **Expected status code**     | 200                                      |

**Headers:** `Content-Type: application/json`, `Accept: application/json`

**Request data (Body, raw JSON):**

```json
{
  "firstname": "Dibya",
  "lastname": "Dhar",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-10-10",
    "checkout": "2026-10-15"
  },
  "additionalneeds": "Breakfast"
}
```

**Expected result:** The API returns 200 OK with a JSON body containing a generated numeric `bookingid` and a `booking` object whose values match the request data.

**Observed result:** 200 OK. The response contained a numeric `bookingid` and a `booking` object matching the submitted data.

---

## TC_02: Create booking with firstname missing

| Item                         | Details                                             |
| ---------------------------- | --------------------------------------------------- |
| **Test Case ID**             | TC_02                                               |
| **Scenario**                 | Create a booking with the `firstname` field missing |
| **HTTP Method and Endpoint** | `POST /booking`                                     |
| **Expected status code**     | 500                                                 |

**Headers:** `Content-Type: application/json`, `Accept: application/json`

**Request data (Body, raw JSON):**

```json
{
  "lastname": "Dhar",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-10-10",
    "checkout": "2026-10-15"
  },
  "additionalneeds": "Breakfast"
}
```

**Expected result:** The API returns `500 Internal Server Error` when `firstname` is missing.

**Observed result:** `500 Internal Server Error`.

**Response body:**

```text
Internal Server Error
```

The response was plain text rather than JSON, and no `bookingid` was returned.

**Note:** The 500 response was verified by executing the request in Postman. Although a well-designed API would normally return a client-error status such as 400 for invalid input, this assignment records the actual behavior of the Restful Booker API.

---

## TC_03: Get booking with a non-existent ID

| Item                         | Details                                            |
| ---------------------------- | -------------------------------------------------- |
| **Test Case ID**             | TC_03                                              |
| **Scenario**                 | Retrieve a booking using an ID that does not exist |
| **HTTP Method and Endpoint** | `GET /booking/{id}`                                |
| **Expected status code**     | 404                                                |

**Headers:** `Accept: application/json`

**Request data:** Path variable `id` = `999999999`. No request body.

**Expected result:** The API returns 404 Not Found with the plain text body `Not Found`.

**Observed result:** `404 Not Found`.

**Response body:**

```text
Not Found
```

No booking details were returned.
