const knex  = require("../db/db");
const randomDoctors = [
  {
    first_name: "John",
    last_name: "Smith",
    middle_name: "Michael",
    longitude: -74.006,
    latitude: 40.7128,
    start_time: "2022-01-15",
    end_time: "2023-12-31",
    age: 35,
    gender: "Male",
    position: "Surgeon",
    image: null
  },
  {
    first_name: "Alice",
    last_name: "Johnson",
    middle_name: "Elizabeth",
    longitude: -118.2437,
    latitude: 34.0522,
    start_time: "2021-11-10",
    end_time: "2024-05-20",
    age: 42,
    gender: "Female",
    position: "Pediatrician",
    image: null
  },
  {
    first_name: "Robert",
    last_name: "Brown",
    middle_name: "William",
    longitude: 2.3522,
    latitude: 48.8566,
    start_time: "2023-03-25",
    end_time: "2024-08-15",
    age: 38,
    gender: "Male",
    position: "Cardiologist",
    image: null
  },
  {
    first_name: "Emily",
    last_name: "Davis",
    middle_name: "Ann",
    longitude: -0.1276,
    latitude: 51.5072,
    start_time: "2022-05-02",
    end_time: "2023-10-30",
    age: 29,
    gender: "Female",
    position: "Orthopedic Surgeon",
    image: null
  },
  {
    first_name: "Michael",
    last_name: "Wilson",
    middle_name: "Thomas",
    longitude: -95.3698,
    latitude: 29.7604,
    start_time: "2023-08-20",
    end_time: "2024-11-18",
    age: 45,
    gender: "Male",
    position: "Neurologist",
    image: null
  },
  {
    first_name: "Sarah",
    last_name: "Anderson",
    middle_name: "Jane",
    longitude: -73.9352,
    latitude: 40.7306,
    start_time: "2022-09-12",
    end_time: "2023-07-05",
    age: 37,
    gender: "Female",
    position: "Anesthesiologist",
    image: null
  },
  {
    first_name: "David",
    last_name: "Taylor",
    middle_name: "Christopher",
    longitude: -0.1807,
    latitude: 51.4045,
    start_time: "2021-12-05",
    end_time: "2023-04-30",
    age: 41,
    gender: "Male",
    position: "Dermatologist",
    image: null
  },
  {
    first_name: "Olivia",
    last_name: "White",
    middle_name: "Grace",
    longitude: -118.2437,
    latitude: 34.0522,
    start_time: "2023-01-10",
    end_time: "2024-07-22",
    age: 33,
    gender: "Female",
    position: "Oncologist",
    image: null
  },
  {
    first_name: "William",
    last_name: "Miller",
    middle_name: "Joseph",
    longitude: 151.2093,
    latitude: -33.8688,
    start_time: "2022-04-18",
    end_time: "2023-09-05",
    age: 49,
    gender: "Male",
    position: "Radiologist",
    image: null
  },
  {
    first_name: "Sophia",
    last_name: "Thomas",
    middle_name: "Marie",
    longitude: -71.0589,
    latitude: 42.3601,
    start_time: "2022-06-30",
    end_time: "2024-02-28",
    age: 36,
    gender: "Female",
    position: "Internist",
    image: null
  }
];

knex("doctors").del().then(()=>{
    knex("doctors").insert(randomDoctors).then(()=>{
        console.log("successfully inserted")
    })
})