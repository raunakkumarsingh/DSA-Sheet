const express = require('express');
const User = require('../Models/usermodel');
const ActivityCpsheet = require('../Models/activityModelCpsheet');
const fetchuser = require('../Middleware/fetch');
const router = express.Router();

// Add question to Striver array
router.post('/updatedata', fetchuser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(400).json({ error: "No such user with this ID exists." });
        }


        var activity = await ActivityCpsheet.findOne({ user: req.user.id  });

        if (!activity) {
            activity = new ActivityCpsheet({
                user: user.id,
                email: req.body.email,
                800: [0],
                900: [0],
                1000: [0],
                1100: [0],
                1200: [0],
                1300: [0],
                1400: [0],
                1500: [0],
                1600: [0],
            });
            await activity.save();  
        }
        if (activity.user.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not Allowed" });
        }

        const rating = req.body.rating; // e.g., "800", "900", etc.
        const question = req.body.question; // The question to add

        await ActivityCpsheet.updateOne(
            { user:  req.user.id  },
            { $push: { [rating]: question } }
        );

        res.json({ success: "Question added successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
});

// Delete data from MongoDB array
router.delete('/deletedata', fetchuser, async (req, res) => {
    try {
        console.log()
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(400).json({ error: "No such user with this ID exists." });
        }

        const activity = await ActivityCpsheet.findOne({ user: req.user.id });
        if (!activity) {
            return res.status(404).json({ error: "Data not found" });
        }

        if (activity.user.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not Allowed" });
        }

        const rating = req.body.rating; // e.g., "800", "900", etc.
        const question = req.body.question; // The question to remove

        await ActivityCpsheet.updateOne(
            { user: req.user.id  },
            { $pull: { [rating]: question } }
        );

        res.json({ success: "Question deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
});

// Get data for a particular user
router.get('/getdata', fetchuser, async (req, res) => {
    try {
        const activity = await ActivityCpsheet.findOne({ user: req.user.id });
        if (!activity) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.json(activity);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Error in fetching Data" });
    }
});

module.exports = router;
