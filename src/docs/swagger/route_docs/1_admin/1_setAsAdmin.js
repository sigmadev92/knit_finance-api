/**
 * @swagger
 * /api/admin/make-admin:
 *   put:
 *     summary: Update role of user as admin
 *     description: This route helps an admin to make another user as admin using email of user. Only an Admin can change the role of another user.
 *     tags:
 *       - Admin
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of user whose role is to be changed
 *                 format: email
 *                 example: user@example.com
 *
 *     responses:
 *       200:
 *         description: Role changed successfully
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
 *       400:
 *         description: Bad Request — Missing Email
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
 *         description: Forbidden — Invalid token
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
 *                   example: "Must be an admin"
 */
