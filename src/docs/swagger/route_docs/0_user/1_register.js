/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: User Registration
 *     description: Route for registering a new user account
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - password
 *             properties:
 *               fullName:
 *                 type: string
 *                 minlength: 2
 *                 maxlength: 30
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@-example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "P@ssw0rd123"
 *     responses:
 *       201:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "64a9b2e1f7b3a4d9a1c5f9e7"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *                     fullName:
 *                       type: string
 *                     role:
 *                       type: string
 *                       example: "user"
 *
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
 *                   example: "Email and password are required."
 *
 */
