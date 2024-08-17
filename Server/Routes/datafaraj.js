const express = require('express');
const User = require('../Models/usermodel');
const ActivityFaraj = require('../Models/activityModelSFaraj');
const fetchuser = require('../Middleware/fetch');
const router = express.Router();

// Add question to Faraj array
router.post('/updatedata/:id', fetchuser, async (req, res) => {
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(400).json({ error: "No such user with this ID exists." });
        }

        let activity = await ActivityFaraj.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: "Data not found" });
        }

        if (activity.user.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not Allowed" });
        }

        activity = await ActivityFaraj.updateOne(
            { _id: req.params.id },
            { $push: { faraj: req.body.faraj } }
        );

        res.json(activity);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
});

// Delete data from MongoDB array
router.delete('/deletedata/:id', fetchuser, async (req, res) => {
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(400).json({ error: "No such user with this ID exists." });
        }

        let activity = await ActivityFaraj.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: "Data not found" });
        }

        if (activity.user.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not Allowed" });
        }

        activity = await ActivityFaraj.updateOne(
            { _id: req.params.id },
            { $pull: { faraj: req.body.faraj } }
        );

        res.json(activity);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
});

// Get data for a particular user
router.get('/getdata', fetchuser, async (req, res) => {
    try {
        const activity = await ActivityFaraj.findOne({ user: req.user.id });
        res.json(activity);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Error in fetching Data" });
    }
});

module.exports = router;
