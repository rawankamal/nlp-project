const axios = require("axios");
const API_ENDPOINT = "https://api.meaningcloud.com/sentiment-2.1";

const analyzeUrl = async (url, apiKey) => {
    try {
        const apiUrl = `${API_ENDPOINT}?key=${apiKey}&url=${url}&lang=en`;
        const response = await axios.get(apiUrl);

        const { code } = response.data.status;

        if (code === 100) {
            return createErrorResponse(code, "Please enter a valid URL.");
        } else if (code === 212) {
            return createErrorResponse(code, response.data.status.msg);
        }

        return createSuccessResponse(response.data, code);

    } catch (error) {
        return createErrorResponse(500, "An unexpected error occurred.");
    }
};

const createErrorResponse = (code, message) => {
    return {
        code: code,
        msg: message,
    };
};

const createSuccessResponse = (data, code) => {
    const { score_tag, agreement, subjectivity, confidence, irony } = data;

    return {
        sample: {
            score_tag,
            agreement,
            subjectivity,
            confidence,
            irony,
        },
        status: code,
    };
};

module.exports = {
    analyzeUrl,
};