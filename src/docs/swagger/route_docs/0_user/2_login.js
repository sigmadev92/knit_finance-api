/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: User Sign-in
 *     description: Authenticates a user using email and password credentials and returns a JWT token upon success.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "P@ssw0rd123"
 *     responses:
 *       200:
 *         description: Login Successful
 *         headers:
 *          Set-Cookie:
 *            description: HTTP-only authentication cookie
 *            schema:
 *              type: string
 *              example: accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...; HttpOnly; Secure; SameSite=Strict
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
 *                       example: "user@-example.com"
 *                     fullName:
 *                       type: string
 *                       example: "John Doe"
 *                     role:
 *                       type: string
 *                       example: "admin"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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
 *       403:
 *         description: Forbidden — Invalid email or password
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
 *                   example: "Invalid email or password."
 */
