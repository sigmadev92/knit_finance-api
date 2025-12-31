/**
 * @swagger
 * /api/users/auth:
 *   get:
 *     summary: Get user details
 *     description: >
 *       Verifies if the request contains a valid JWT token inside cookies.
 *       If valid, returns user details (excluding password).
 *       If invalid or missing, returns a 403 error.
 *     tags:
 *       - Users
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description:  Returns user details of loggedin user.
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
 *       403:
 *         description: Forbidden — Invalid or missing token
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
 *                   example: "Invalid or missing authentication token."
 */
