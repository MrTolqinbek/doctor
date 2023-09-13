/**
 * @swagger
 * tags:
 *  - name: Doctors
 *    description: Doctor management  
 */

/**
 * @swagger
 * /api/doctors:
 *   post:
 *     summary: Create a new doctor.
 *     tags:
 *       - Doctors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               middle_name:
 *                 type: string
 *               longitude:
 *                 type: number
 *                 minimum: -180
 *                 maximum: 180
 *               latitude:
 *                 type: number
 *                 minimum: -90
 *                 maximum: 90
 *               start_time:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 24
 *               end_time:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 24
 *               age:
 *                 type: integer
 *                 minimum: 0
 *               gender:
 *                 type: string
 *                 enum:
 *                   - Male
 *                   - Female
 *               position:
 *                 type: string
 *           examples:
 *             example1:
 *               value:
 *                 first_name: John
 *                 last_name: Doe
 *                 middle_name: Smith
 *                 longitude: 45.6789
 *                 latitude: -80.1234
 *                 start_time: 9
 *                 end_time: 16
 *                 age: 35
 *                 gender: "Male"
 *                 position: "Physician"
 *             example2:
 *               value:
 *                 first_name: Jane
 *                 last_name: Smith
 *                 middle_name: Doe
 *                 longitude: -123.4567
 *                 latitude: 12.3456
 *                 start_time: 11
 *                 end_time: 20
 *                 age: 28
 *                 gender: "Female"
 *                 position: "Surgeon"
 *     responses:
 *       '201':
 *         description: Doctor created successfully.
 *       '400':
 *         description: Invalid input data.
 */



/**
 * @swagger
 * /api/doctors/{id}:
 *   put:
 *     summary: Update an existing doctor.
 *     tags:
 *       - Doctors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the doctor to retrieve.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               middle_name:
 *                 type: string
 *               longitude:
 *                 type: number
 *                 minimum: -180
 *                 maximum: 180
 *               latitude:
 *                 type: number
 *                 minimum: -90
 *                 maximum: 90
 *               start_time:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 24
 *               end_time:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 24
 *               age:
 *                 type: integer
 *                 minimum: 0
 *               gender:
 *                 type: string
 *                 enum:
 *                   - Male
 *                   - Female
 *               position:
 *                 type: string
 *           examples:
 *             example1:
 *               value:
 *                 first_name: John
 *                 last_name: Doe
 *                 middle_name: Smith
 *                 longitude: 45.6789
 *                 latitude: -80.1234
 *                 start_time: 9
 *                 end_time: 16
 *                 age: 35
 *                 gender: "Male"
 *                 position: "Physician"
 *             example2:
 *               value:
 *                 first_name: Jane
 *                 last_name: Smith
 *                 middle_name: Doe
 *                 longitude: -123.4567
 *                 latitude: 12.3456
 *                 start_time: 11
 *                 end_time: 20
 *                 age: 28
 *                 gender: "Female"
 *                 position: "Surgeon"
 *     responses:
 *       '201':
 *         description: Doctor created successfully.
 *       '400':
 *         description: Invalid input data.
 */

/**
 * @swagger
 * /api/doctors:
 *   get:
 *     summary: Get a list of doctors.
 *     tags:
 *       - Doctors
 *     responses:
 *       '200':
 *         description: A list of doctors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   first_name:
 *                     type: string
 *                   last_name:
 *                     type: string
 *                   middle_name:
 *                     type: string
 *                   longitude:
 *                     type: number
 *                   latitude:
 *                     type: number
 *                   start_time:
 *                     type: number
 *                     minimum: 0
 *                     maximum: 24
 *                   end_time:
 *                     type: number
 *                     minimum: 0
 *                     maximum: 24
 *                   age:
 *                     type: integer
 *                   gender:
 *                     type: string
 *                   position:
 *                     type: string
 *                   image:
 *                     type: string
 *               example:
 *                 - id: 1
 *                   first_name: John
 *                   last_name: Doe
 *                   middle_name: Smith
 *                   longitude: 45.6789
 *                   latitude: -90.1234
 *                   start_time: "2023-01-15"
 *                   end_time: "2023-12-31"
 *                   age: 35
 *                   gender: "Male"
 *                   position: "Physician"
 *                   image: default.png
 *                 - id: 2
 *                   first_name: Jane
 *                   last_name: Smith
 *                   middle_name: Doe
 *                   longitude: -123.4567
 *                   latitude: 12.3456
 *                   start_time: 2
 *                   end_time: 11
 *                   age: 28
 *                   gender: "Female"
 *                   position: "Surgeon"
 *                   image: default.png
 *       '404':
 *         description: No doctors found.
 */

/**
 * @swagger
 * /api/doctors/{id}:
 *   get:
 *     summary: Get a doctor by ID.
 *     tags:
 *       - Doctors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the doctor to retrieve.
 *     responses:
 *       '200':
 *         description: A doctor object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 first_name:
 *                   type: string
 *                 last_name:
 *                   type: string
 *                 middle_name:
 *                   type: string
 *                 longitude:
 *                   type: number
 *                 latitude:
 *                   type: number
 *                 start_time:
 *                   type: number
 *                 end_time:
 *                   type: number
 *                 age:
 *                   type: integer
 *                 gender:
 *                   type: string
 *                 position:
 *                   type: string
 *                 image:
 *                   type: string
 *               example:
 *                 id: 1
 *                 first_name: John
 *                 last_name: Doe
 *                 middle_name: Smith
 *                 longitude: 45.6789
 *                 latitude: -90.1234
 *                 start_time: 1
 *                 end_time: 2
 *                 age: 35
 *                 gender: "Male"
 *                 position: "Physician"
 *                 image: null
 *       '404':
 *         description: Doctor not found.
 */

/**
 * @swagger
 * /api/doctors/{id}/image:
 *   put:
 *     summary: Upload an image for a doctor by ID.
 *     tags:
 *       - Doctors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the doctor to associate the image with.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *             example:
 *               image: (binary file data)
 *     responses:
 *       '201':
 *         description: Image uploaded successfully.
 *       '400':
 *         description: Invalid input data.
 *       '404':
 *         description: Doctor not found.
 */