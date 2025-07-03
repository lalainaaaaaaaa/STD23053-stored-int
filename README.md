# STD23053-stored-int
Lambda application exposing a GET /stored-int endpoint

What it does?
    1-It reads a number stored in the file /tmp/stored-int.txt on the Lambda function.
    2-If the file doesn’t exist, it creates a random number, saves it in the file, and returns it.
How to set it up?
    1-Zip the lambda/ folder.
    2-Deploy this function on AWS Lambda.
    3-Set up an API Gateway to make the GET /stored-int endpoint accessible.
    4-Deploy everything in a preproduction environment to test.

