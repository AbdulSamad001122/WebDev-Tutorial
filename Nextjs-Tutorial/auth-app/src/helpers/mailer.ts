import nodemailer from "nodemailer"
import User from "@/models/userModels"
import bcryptjs from "bcryptjs"

export const sendEmail = async ({ email, emailType, userID }: any) => {
    try {
        // Create a hashed Token
        const hashedToken = await bcryptjs.hash(userID.toString(), 10)


        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userID,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000
                })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userID,
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() +
                        3600000
                })
        }

        const transporter = await nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "b5123d43f50973",
                pass: "38979bd59f0325"
            }
        })


        const currentDomain = process.env.DOMAIN

        const link =
            emailType === "VERIFY"
                ? `${currentDomain}/verifyemail?token=${hashedToken}`
                : `${currentDomain}/reset-password?token=${hashedToken}`

        const mailOptions = {
            from: 'hitesh@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${link}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"
                } or copy and paste the link below in your browser.<br> ${link}</p>`
        }


        const mailResponse = await transporter.sendMail(mailOptions)
        return mailResponse

    } catch (error: any) {
        throw new Error(error.message)
    }
}