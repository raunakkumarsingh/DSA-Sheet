const axios = require('axios');
const cheerio = require('cheerio');
const router = require('express').Router();

router.get('/:userID', async (req, res) => {
    const userID = req.params.userID;
    const URL = `https://www.codechef.com/users/${userID}`;

    try {
        const response = await axios.get(URL);
        const $ = cheerio.load(response.data);

        const username = $('.m-username--link').text().trim();
        const name = $('.h2-style').text().trim();
        const country = $('.user-country-name').text().trim();
        const rating = parseInt($('.rating-number').text().trim(), 10);
        const rank = $('.inline-list li a strong').map((index, element) => parseInt($(element).text().trim(), 10)).get();
        const stars=$('.rating-star span').text();
        const contest = parseInt($('.contest-participated-count b').text().trim(), 10);
        const solved = parseInt($('.rating-data-section.problems-solved h3').last().text().split(': ')[1].trim(), 10);
        const maxRatingMatch = $('.rating-header small').text().match(/\d+/);
        const maxRating = maxRatingMatch ? parseInt(maxRatingMatch[0], 10) : '';
         console.log(stars)
        const data = {
            username: username,
            name: name,
            country: country,
            rating: rating || 0,
            global_rank: rank[0] || 0,
            country_rank: rank[1] || 0,
            stars: stars || 0,
            no_of_contest: contest || 0,
            problems_solved: solved || 0,
            maxRating: maxRating || 0,
            easy: 0,   // Placeholder, you may need to extract these values as well
            medium: 0, // Placeholder, you may need to extract these values as well
            hard: 0,   // Placeholder, you may need to extract these values as well
            tag: stars,   // Placeholder for additional data
        };

        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(400).json({ success: false, data: null, error: "User not found" });
    }
});

module.exports = router;
