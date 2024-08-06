# Microservice-A
# Inventory Check Microservice

## Communication Contract
To contact me for any questions, please do so via Microsoft Teams, on weekdays it is best to reach out
after 4:30PM for a quicker response. If it is urgent and needs immediate attention, you can put *Urgent*
at the beginning of the message and I will be able to reply before 4:30PM. I am also available on weekends
with much more availabiltiy, feel free to also reach out at any point. I am also open to a phone call and
screen sharing, if that provides better assistance. 

### How to Programmatically Request Data from the Microservice

To request data from the Inventory Check Microservice, use the following HTTP POST request format:

#### Request Format
- **Method:** POST
- **Endpoint:** `/api/inventory/check`
- **Content-Type:** `application/json`

#### Request Body
You need to send a JSON object containing the product inventory levels and a threshold parameter.

Example Request Body:
```json
{
  "products": [
    { "id": "prod1", "name": "Product 1", "inventory": 50 },
    { "id": "prod2", "name": "Product 2", "inventory": 10 },
    { "id": "prod3", "name": "Product 3", "inventory": 5 }
  ],
  "threshold": 20
}
