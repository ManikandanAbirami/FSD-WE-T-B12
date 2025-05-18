const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendBookingEmail = async (booking) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: booking.visitorEmail,
    subject: "Booking Confirmation",
    text: `Dear ${booking.visitorName},
        Thank you for booking with us. Your booking details are as follows:
        Service: ${booking.service}
        Date: ${booking.date}
        Time: ${booking.time}
        Please arrive 15 minutes before your scheduled time.
        If you have any questions or need to make changes, please contact us.
        Thank you for choosing our services.
        Best regards,
        The Frontdesk Team`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
