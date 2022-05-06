import {MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9062d669e4e420",
    pass: "667d3ead0c0ea8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: 'Equipe feedget <oi@Feedget.com>',
			to: 'Kauã Chaves Nielson <kauaprofessionacontact@gmail.com>',
			subject,
			html: body
		})
	}
}