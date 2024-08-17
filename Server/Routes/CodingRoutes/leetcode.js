const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:userID', async (req, res) => {
    const userID = req.params.userID;
    const URL = 'https://leetcode.com/graphql';

    const query = `
    query {
        userContestRanking(username: "${userID}") {
            attendedContestsCount
            rating
            globalRanking
            totalParticipants
            topPercentage
        }
        matchedUser(username: "${userID}") {
            username
            submitStats: submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
            }
        }
        userContestRankingHistory(username: "${userID}") {
            rating
        }
    }`;

    try {
        const response = await axios.post(URL, {
            query: query,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const userContestRanking = response.data.data.userContestRanking || {};
        const submitStats = response.data.data.matchedUser.submitStats || { acSubmissionNum: [] };
        const userContestRankingHistory = response.data.data.userContestRankingHistory || [];

        // Calculate maxRating
        const maxRating = userContestRankingHistory.reduce((max, contest) => {
            return contest.rating > max ? contest.rating : max;
        }, 0);

        const data = {
            username: response.data.data.matchedUser.username || '',
            totalQuestions: submitStats.acSubmissionNum[0]?.count || 0,
            totalContests: userContestRanking.attendedContestsCount || 0,
            easy: submitStats.acSubmissionNum[1]?.count || 0,
            medium: submitStats.acSubmissionNum[2]?.count || 0,
            hard: submitStats.acSubmissionNum[3]?.count || 0,
            rating: Math.floor(userContestRanking.rating) || 0,
            maxRating: Math.floor(maxRating) || 0, 
            star: "",      
            tag: "",       
        };

        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(400).json({ success: false, data: null, error: "User not found" });
    }
});

module.exports = router;
