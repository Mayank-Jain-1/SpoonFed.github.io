const OTP = require("../../models/otp");

const createOtp = async (req, res) => {
   const { email } = req.body;
   OTP.updateOne(
      { email: email },
      {
         email: email,
         otp: Math.floor(((Math.random() * 1000000) % 900000) + 99999),
         time: new Date()
      },
      { upsert: true },
      () => {
         console.log("made the email otp successfuly now");
         res.status(200).json({
            message: "made the email otp successfulyy",
            status: 200,
         });
      }
   );
};

module.exports = createOtp;