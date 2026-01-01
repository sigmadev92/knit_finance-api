/**
 * @swagger
 * /api/tasks/{taskId}:
 *   delete:
 *     summary: Delete Task
 *     description: >
 *      Delete the existing task with Id. Only a user who created the task can delete it.
 *     tags:
 *       - Task
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *           length: 24
 *         description: The ID of the blog to be deleted
 *
 *     responses:
 *       200:
 *         description: The task is deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *
 *       400:
 *         description: Bad Request — Missing or invalid status field
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
 *         description: Authentication required or task Id is invalid
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
 *                   example: "Authentication failed"
 *
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
