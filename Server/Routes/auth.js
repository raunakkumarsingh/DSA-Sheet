const express = require('express');
const User = require('../Models/usermodel');
const ActivityDSA = require('../Models/activityModelDSA');
const ActivityFaraj = require('../Models/activityModelSFaraj');
const ActivityStriver = require('../Models/activityModelStriver');
const CodingIds = require('../Models/codingIDs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { body, validationResult } = require('express-validator');

const secureKey = process.env.secureKey;

router.post('/createuser', [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a minimum of 5 characters").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);

    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "An account with this email already exists. Please log in." });
        }

        const salt = bcrypt.genSaltSync(10);
        const secpass = bcrypt.hashSync(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass
        });

        await ActivityDSA.create({
            name: req.body.name,
            email: req.body.email,
            love: [0],
            Array: 0,
            Matrix: 0,
            String: 0,
            Search: 0,
            Linked: 0,
            Binary: 0,
            BST: 0,
            Greedy: 0,
            Backtracking: 0,
            Stacks: 0,
            Heap: 0,
            Graph: 0,
            Trie: 0,
            Dynamic: 0,
            Bit: 0,
            user: user.id,
        });

        await ActivityFaraj.create({
            name: req.body.name,
            email: req.body.email,
            faraj: [0],
            user: user.id,
        });

        await ActivityStriver.create({
            name: req.body.name,
            email: req.body.email,
            striver: [0],
            user: user.id,
        });


        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, secureKey);
        res.json({ success: true, token });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error: Unable to sign up" });
    }
});

router.post('/login', [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a correct password").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const checkpass = bcrypt.compareSync(password, user.password);
        if (!checkpass) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, secureKey);
        res.json({ success: true, token });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error: Unable to log in" });
    }
});

router.post('/forget', [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 8 characters").isLength({ min: 8 }),
    body("confirmPassword", "Password must be at least 8 characters").isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    const { email, password, confirmPassword } = req.body;

    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ error: "User not found. Please try again." });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and confirm password do not match" });
        }

        const salt = bcrypt.genSaltSync(10);
        const secpass = bcrypt.hashSync(password, salt);

        await User.findByIdAndUpdate(user.id, { $set: { password: secpass } }, { new: true });

        res.json({ success: true });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error: Unable to reset password" });
    }
});

module.exports = router;
