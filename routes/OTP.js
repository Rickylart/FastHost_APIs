/**
 * @swagger
 * components:
 *   schemas:
 *     OTP:
 *       type: object
 *       required:
 *         - length
 *         - medium
 *         - from
 *         - to
 *         - contacts
 *       properties:
 *       length:
 *         type: numeric
 *         description: This is for the length of the otp
 *       medium:
 *         type: string
 *         description: The platform on which the otp will be sent from; sms or email
 *       from:
 *         type: string
 *         description: If the chosen platform is email, the from field is required. Eg Fasthost
 *       to:
 *         type: array
 *         description: If platform is email , the to field is required, this can be multiple emails. Eg [info@fasthosttech.com,testsender@fasthosttech.com]
 *       contacts:
 *         type: array
 *         description: If platform is sms, the contacts field is required, this can be multiple contacts. Eg [0547658525,0504426415]
 *       example:
 *         length: 2
 *         medium: email
 *         from: otp@fasthosttech.com
 *         to: francislartey12@gmail.com
 *         contacts: 
 */

/**
 * @swagger
 * tags:
 *   name: OTP
 *   description: This is an otp generator for both sms and email.
 * /fastapi/v1/generate:
 *   post:
 *     summary: Generate OTP [SMS | Email]
 *     tags: [OTP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OTP'
 *     responses:
 *       200:
 *         description: Generate OTP[SMS | Email].
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OTP'
 *       500:
 *         description: Some server error
 *
 */