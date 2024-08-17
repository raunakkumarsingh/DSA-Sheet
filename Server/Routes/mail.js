const express = require('express');
const config = require('../Middleware/config');
const fetchuser = require('../Middleware/fetch');
const nodemailer = require('nodemailer');
const User = require('../Models/usermodel');
const bcrypt = require('bcrypt');

const router = express.Router();

// Send welcome email
router.post('/send/welcome', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "No such user with this email ID exists." });
        }

        let transporter = nodemailer.createTransport(config);
        let info = await transporter.sendMail({
            from: '"Welcome to DSA SHEET" <dsasheet.notification@gmail.com>',
            to: req.body.email,
            subject: "Welcome to DSA-SHEET",
            text: "Hello world?",
            html: "<b>Hello world, welcome to DSA Sheet!</b>",
        });

        console.log(info);
        res.json({ send: "success", accepted: info.accepted });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Mail not sent" });
    }
});

// Send custom message
router.post('/send/message', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "No such user with this email ID exists." });
        }

        let transporter = nodemailer.createTransport(config);
        let info = await transporter.sendMail({
            from: `"${req.body.from}" <dsasheet.notification@gmail.com>`,
            to: req.body.email,
            subject: req.body.subject,
            text: req.body.text,
            html: req.body.html,
        });

        console.log(info);
        res.json({ send: "success", accepted: info.accepted });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Mail not sent" });
    }
});

// Send OTP
router.post('/send/otp', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "No such user with this email ID exists." });
        }

        const otp = Math.floor(10000 + Math.random() * 90000);
        const salt = bcrypt.genSaltSync(10);
        const hashedOtp = bcrypt.hashSync(otp.toString(), salt);

        let transporter = nodemailer.createTransport(config);
        let info = await transporter.sendMail({
            from: '"DSA-SHEET" <dsasheet.notification@gmail.com>',
            to: req.body.email,
            subject: "OTP",
            html: `<h2>DSA-Sheet Verification</h2><br><h3>Your OTP is ${otp}</h3>`,
        });

        console.log(info);
        console.log(otp);
        res.json({ send: "success", Otp: hashedOtp });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "OTP not sent. Please try again." });
    }
});

module.exports = router;
