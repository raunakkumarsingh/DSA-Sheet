const express = require('express');
const User = require('../Models/usermodel');
const ActivityStriver = require('../Models/activityModelStriver');
const fetchuser = require('../Middleware/fetch');
const router = express.Router();

// Add question to Striver array
router.post('/updatedata/:id', fetchuser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(400).json({ error: "No such user with this ID exists." });
        }

        const activity = await ActivityStriver.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: "Data not found" });
        }

        if (activity.user.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not Allowed" });
        }

        await ActivityStriver.updateOne(
            { _id: req.params.id },
            { $push: { striver: req.body.striver } }
        );

        res.json({ success: "Question added successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
});

// Delete data from MongoDB array
router.delete('/deletedata/:id', fetchuser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(400).json({ error: "No such user with this ID exists." });
        }

        const activity = await ActivityStriver.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: "Data not found" });
        }

        if (activity.user.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not Allowed" });
        }

        await ActivityStriver.updateOne(
            { _id: req.params.id },
            { $pull: { striver: req.body.striver } }
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
        const activity = await ActivityStriver.findOne({ user: req.user.id });
        res.json(activity);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Error in fetching Data" });
    }
});

module.exports = router;
