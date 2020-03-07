const faker = require('faker')

const db = require('../db')
const Employee = require('../models/employees')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const employees = [...Array(100)].map(employee => (
    {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        job_title: faker.name.jobTitle(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode()
        }
    }
))

    await Employee.insertMany(employees)
    console.log("Created employees!")
}

const run = async () => {
    await main()
    db.close()
}

run()
