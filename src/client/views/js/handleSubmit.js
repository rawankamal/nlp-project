const { validateUrl } = require("./checkURL");
const axios = require("axios");

const urlInputElement = document.getElementById("URI");

document.addEventListener('DOMContentLoaded', () => {
    urlInputElement.addEventListener("change", (event) => {
        event.preventDefault();
        clearErrorMessage();
        toggleResultVisibility(false);
    });
});

async function handleFormSubmit(event) {
    event.preventDefault();

    const formElement = document.querySelector("form");

    if (!validateUrl(urlInputElement.value)) {
        displayErrorMessage("Please, Enter a valid URL");
        urlInputElement.value = "";
        return;
    }

    toggleLoadingIndicator(true);

    try {
        const response = await axios.post(
            'http://localhost:8000/',
            { URI: urlInputElement.value },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        processAnalysisResults(response.data);
    } catch (error) {
        displayErrorMessage("An error occurred while processing your request.");
    } finally {
        toggleLoadingIndicator(false);
    }
}

const processAnalysisResults = (data) => {
    if (data.msg) {
        displayErrorMessage(data.msg);
        toggleResultVisibility(false);
        return;
    }

    clearErrorMessage();
    toggleResultVisibility(true);

    document.getElementById("agreement").textContent = `Agreement: ${data.sample.agreement}`;
    document.getElementById("subjectivity").textContent = `Subjectivity: ${data.sample.subjectivity}`;
    document.getElementById("confidence").textContent = `Confidence: ${data.sample.confidence}`;
    document.getElementById("irony").textContent = `Irony: ${data.sample.irony}`;
    document.getElementById("score_tag").textContent = `Score Tag: ${data.sample.score_tag}`;
};

const toggleLoadingIndicator = (isVisible) => {
    const loaderElement = document.getElementById('loader');
    loaderElement.style.display = isVisible ? 'block' : 'none';
};

const toggleResultVisibility = (isVisible) => {
    document.querySelectorAll("ul li").forEach((item) => {
        item.style.display = isVisible ? "block" : "none";
    });
};

const displayErrorMessage = (message) => {
    const errorElement = document.getElementById("error");
    errorElement.style.display = "block";
    errorElement.textContent = message;
};

const clearErrorMessage = () => {
    const errorElement = document.getElementById("error");
    errorElement.style.display = "none";
    errorElement.textContent = "";
};

module.exports = {
    handleFormSubmit,
};