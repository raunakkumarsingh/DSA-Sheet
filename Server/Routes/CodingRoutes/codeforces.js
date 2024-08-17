const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:userID', async (req, res) => {
    const userID = req.params.userID;
    const URL = `https://codeforces.com/api/user.info?handles=${userID}&checkHistoricHandles=true`;
    const URL1 = `https://codeforces.com/api/user.status?handle=${userID}`;
    const URL2 = `https://codeforces.com/api/user.rating?handle=${userID}`;

    try {
        const response = await axios.get(URL);
        const response1 = await axios.get(URL1);
        const response2 = await axios.get(URL2);
        const result = response.data.result[0]; // Accessing the first item in the result array
        const resultArray1 = response2.data.result; // Accessing the first item in the result array
        const contest = resultArray1.length;
        const resultArray = response1.data.result;
        const okVerdictArray = resultArray.filter(element => element.verdict === "OK");
        const numberOfOkVerdicts = okVerdictArray.length;
        const data = {
            username: result.handle,
            totalQuestions:numberOfOkVerdicts,  
            totalContests: contest,   
            easy: "",
            medium: "",
            hard: "",
            rating: result.rating,
            maxRating: result.maxRating, 
            star: "",
            tag: result.maxRank,
        };

        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(400).json({ success: false, data: null, error: "User not found" });
    }
});

module.exports = router;
