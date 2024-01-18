const nodemailer = require("nodemailer");

const SendEmail = async (email, lat, lon) => {
  const mailOptions = {
    from: "easypeasy11746@gmail.com",
    to: email,
    subject: "Location Information",
    html: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Location Information</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f5f5f5;
                margin: 0;
                padding: 0;
            }
            .container {
                background-color: #ffffff;
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
                text-align: center;
            }
            .coordinates {
                font-size: 18px;
                font-weight: bold;
                color: #0077B6;
            }
            p {
                color: #444;
                text-align: center;
                margin: 10px 0;
            }
            .cta-button {
                background-color: #0077B6;
                border: none;
                color: #ffffff;
                padding: 12px 24px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 20px auto;
                border-radius: 5px;
                cursor: pointer;
                display: block;
                width: 50%;
                margin: 20px auto;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Your Location Information</h1>
            <p>Latitude: <span class="coordinates">${lat}</span></p>
            <p>Longitude: <span class="coordinates">${lon}</span></p>
            <p>This information is provided for your reference.</p>
            <p>Thank you for using our service!</p>
            <a class="cta-button" href="https://www.google.com/maps?q=${lat},${lon}&z=17&hl=en">Open Map</a>
        </div>
    </body>
    </html>
    `,
  };

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "easypeasy11746@gmail.com",
        pass: "eyqunwdhrpkbzvwg",
      },
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
};

module.exports = SendEmail;
