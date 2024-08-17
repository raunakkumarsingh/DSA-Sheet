const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();

router.get('/:userID', async (req, res) => {
    const userID = req.params.userID;
    const URL = `https://auth.geeksforgeeks.org/user/${userID}/practice/`;

    try {
        const response = await axios.get(URL);
        const $ = cheerio.load(response.data);

        const username = $('.profile_name').text().trim();
        const collegeRank = parseInt($('.rankNum').text().trim(), 10);
        const basicDetails = $('.basic_details_data').map((index, element) => {
            return $(element).text().trim();
        }).get();
        const scoreCardValues = $('.score_card_value').map((index, element) => {
            return parseInt($(element).text().trim(), 10);
        }).get();
        const questionCat = $('.tab').map((index, element) => {
            return $(element).text().trim();
        }).get();

        const data = {
            username: username,
            college_rank: collegeRank,
            institute_name: basicDetails[0],
            language_used: basicDetails[1],
            overall_coding_score: scoreCardValues[0],
            total_problems_solved: scoreCardValues[1],
            monthly_score: scoreCardValues[2],
            school_problems_solved: extractNumber(questionCat[0]),
            basic_problems_solved: extractNumber(questionCat[1]),
            easy_problems_solved: extractNumber(questionCat[2]),
            medium_problems_solved: extractNumber(questionCat[3]),
            hard_problems_solved: extractNumber(questionCat[4]),
        };

        res.json({ success: true, data });
    } catch (err) {
        res.status(400).json({ success: false, data: null, error: "User not found" });
    }
});

function extractNumber(str) {
    const result = str.match(/\d+/);
    return result ? parseInt(result[0], 10) : 0;
}

module.exports = router;
