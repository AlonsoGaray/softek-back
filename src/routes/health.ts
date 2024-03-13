import { Request, Router } from "express";

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     description: Health check endpoint for Softek API
 *     operationId: healthCheck
 *     tags:
 *       - health
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthStatus'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get("/", (req: Request, res) => {
  res.send({ status: "OK" });
});

export default router;
