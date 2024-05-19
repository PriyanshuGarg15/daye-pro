# Tampon Production System

The Tampon Production System is designed to manage the production of tampons using predefined raw material specifications. This Node.js application provides functionalities to calculate the maximum number of tampons that can be produced from given raw materials and to determine the remaining materials after production.

## Routes

### Create Regular Tampons

- **Route**: `/create/regular`
- **Method**: POST
- **Description**: Takes the raw material quantities and returns the maximum number of regular tampons that can be produced based on predefined specifications.
- **Request Body**:
  ```json
  {
    "cotton": "400",
    "hemp": "4000",
    "string": "4000",
    "wrapper": "3000"
  }

### Create Super Tampons

- **Route**: `/create/super`
- **Method**: POST
- **Description**: Takes the raw material quantities and returns the maximum number of super tampons that can be produced based on predefined specifications.
- **Request Body**:
  ```json
  {
    "cotton": "400",
    "hemp": "4000",
    "string": "4000",
    "wrapper": "3000"
  }

  
### Create Tampon Units

- **Route**: `/create/product`
- **Method**: POST
- **Description**: Takes the quantity and type of tampon to be produced and returns the remaining raw materials after production.
- **Request Body**:
  ```json
  {
  "type": "regular",
  "units": 50
  }


## Dependencies

- Express.js: Web framework for Node.js
- body-parser: Middleware to parse incoming request bodies
- cors: Middleware to enable Cross-Origin Resource Sharing
- express-rate-limit: ^7.2.0

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set environment variables.
4. Run the microservice using `npm run local`.


## Error Handling
If the raw materials are insufficient to produce the requested quantity of tampons, the system will return an error indicating the shortage.


## Contributors

- [Priyanshu Garg](#) - Developer


