const express = require('express');
const router = express.Router();
const CodingIds = require('../Models/codingIDs');
const User = require('../Models/usermodel'); 
const fetchuser = require('../Middleware/fetch');


// Create a new Coding ID entry
router.post('/create', fetchuser, async (req, res) => {
    try {
        const { leetcodeID, codeforcesID, codechefID, gfgID } = req.body;
        let codingId = await CodingIds.findOne({ user: req.user.id });
        if (codingId) {
            return res.status(400).json({ error: "Coding IDs already exist for this user." });
        }

        // Create a new CodingIds document
        codingId = new CodingIds({
            user: req.user.id,
            leetcodeID,
            codeforcesID,
            codechefID,
            gfgID
        });

        await codingId.save();
        res.json(codingId);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// Get the Coding IDs for the logged-in user
router.get('/get', fetchuser, async (req, res) => {
    try {
        const codingId = await CodingIds.findOne({ user: req.user.id });
        if (!codingId) {
            return res.status(404).json({ error: "Coding IDs not found for this user." });
        }

        res.json(codingId);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// Update Coding IDs for the logged-in user
router.put('/update', fetchuser, async (req, res) => {
    try {
        const { leetcodeID, codeforcesID, codechefID, gfgID } = req.body;

        let codingId = await CodingIds.findOne({ user: req.user.id });
        if (!codingId) {
            codingId = new CodingIds({
                user: req.user.id, 
                leetcodeID,
                codeforcesID,
                codechefID, 
                gfgID
            });
    
            await codingId.save();
            return res.json(codingId);
        }

        // Update the coding IDs
        codingId.leetcodeID = leetcodeID || codingId.leetcodeID;
        codingId.codeforcesID = codeforcesID || codingId.codeforcesID;
        codingId.codechefID = codechefID || codingId.codechefID;
        codingId.gfgID = gfgID || codingId.gfgID;

        await codingId.save();
        res.json(codingId);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// Delete Coding IDs for the logged-in user
router.delete('/delete', fetchuser, async (req, res) => {
    try {
        let codingId = await CodingIds.findOne({ user: req.user.id });
        if (!codingId) {
            return res.status(404).json({ error: "Coding IDs not found for this user." });
        }

        await CodingIds.findOneAndDelete({ user: req.user.id });

        res.json({ message: "Coding IDs have been deleted." });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
