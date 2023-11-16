import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: '1.0.0',            // by default: '1.0.0'
        title: 'Rest API',              // by default: 'REST API'
        description: 'TAPI'         // by default: ''
    },
    host: 'localhost:6000',                 // by default: 'localhost:3000'
    basePath: '/',             // by default: '/'
    schemes: ['http'],              // by default: ['http']
    consumes: ['application/json'],             // by default: ['application/json']
    produces: ['application/json'],             // by default: ['application/json']
    tags: [                   // by default: empty Array
        {
            name: '',             // Tag name
            description: ''       // Tag description
        },

    ],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header', // can be 'header', 'query' or 'cookie'
            name: 'X-API-KEY', // name of the header, query parameter or cookie
            description: 'Some description...'
        }
    },  // by default: empty object
    definitions: {
        Parents: {
            father: 'Simon Doe',
            mother: 'Marie Doe'
        },
        User: {
            name: 'John Doe',
            age: 29,
            parents: {
                $ref: '#/definitions/Parents'
            },
            diplomas: [
                {
                    school: 'XYZ University',
                    year: 2020,
                    completed: true,
                    internship: {
                        hours: 290,
                        location: 'XYZ Company'
                    }
                }
            ]
        },
        AddUser: {
            $name: 'John Doe',
            $age: 29,
            about: ''
        },
        myBoolean: true,
        myNumber: 123,
        myString: 'my example',
        myObject: {
            field: 'my example'
        },
        myArrayOfBooleans: [true],
        myArrayOfNumbers: [123],
        myArrayOfStrings: ['my example'],
        myArrayOfObjects: [
            {
                field: 'my example'
            }
        ],
        myReferencedObjectArray: [{ $ref: '#/definitions/myObject' }]
    }
};

const outputFile = './swagger-output.json';
const routes = ['./routes/student.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
