/**
 * @swagger
 * /api/tasks/:
 *   post:
 *     summary: Add new Task
 *     description: >
 *       Adds a new task to the database. Only a User can create a task. Not admins
 *     tags:
 *       - Task
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *               description:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 500
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 newTask:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: MongoDb Id of task
 *                     userId:
 *                       type: string
 *                       description: mongoDB refrence Id of the loggedin user who created the task
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 
 *       400:
 *         description: Bad Request — Missing or invalid input fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Title and description are required."
 *       403:
 *        description: Invalid credentials or admin trying to create a task
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                message:
 *                   type: string
 *                   example: "Only users are allowed to create task"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
