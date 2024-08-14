import { mailOptions, transporter } from "@/config/nodemailer";
import MessageData from "@/models/MessageData";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async(req:Request)=>{
    try {
        const {fullname,email,message} = await req.json()
        await connect()
        await transporter.sendMail({
            ...mailOptions,
            from:email,
            to:"madhumithakp@gmail.com",
            subject: "Contact Me Message",
            text: `Message from ${email} `,
            html: `<h4>Message from ${email} </h4><p>${message}</p>`,
          });
        const newMessage = new MessageData({
            fullname,
            email,
            message
        })
        // await newMessage.save()
        return new NextResponse("message registered ",{status:200,statusText:"Message send successfully"})

    } catch (error:any) {
    console.log("post message error ==>",error.message);
        throw new Error(error.message)
    }
}