// Variables
    // Params
    let username = 'Douwdy';
    let apiUrl = `https://api.github.com/users/${username}/repos`;
    // Selectors
    let reposLocation = document.getElementById('repos');

// fetch github data
function githubFetch(apiUrl, username) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // get the data from the api response
            let repos = data;
            // get the repo names
            let repoNames = repos.map(repo => repo.name);
            // get the repo descriptions
            let repoDescriptions = repos.map(repo => repo.description);
                // replace null values with 'No description'
                for (let i = 0; i < repoDescriptions.length; i++) {
                    if (repoDescriptions[i] === null) {
                        repoDescriptions[i] = 'No description';
                    }
                }
            // get the repo languages
            let repoLanguages = repos.map(repo => repo.language);
            // replace repo languages with icons
            for (let i = 0; i < repoLanguages.length; i++) {
                if (repoLanguages[i] === 'JavaScript') {
                    repoLanguages[i] = '<i class="fab fa-js-square" style="color: yellow;"></i>';
                } else if (repoLanguages[i] === 'HTML') {
                    repoLanguages[i] = '<i class="fab fa-html5" style="color: orange;"></i>';
                } else if (repoLanguages[i] === 'CSS') {
                    repoLanguages[i] = '<i class="fab fa-css3-alt" style="color: blue;"></i>';
                } else if (repoLanguages[i] === 'SCSS') {
                    repoLanguages[i] = '<i class="fab fa-sass" style="color: pink;"></i>';
                } else if (repoLanguages[i] === 'React') {
                    repoLanguages[i] = '<i class="fab fa-react" style="color: lightblue;"></i>';
                }
            }
            // get the repo urls
            let repoUrls = repos.map(repo => repo.html_url);
            // get the repo last updated dates
            let repoLastUpdated = repos.map(repo => repo.updated_at);
                // format the repo last updated dates to a readable format
                let repoLastUpdatedFormatted = repoLastUpdated.map(date => new Date(date).toLocaleDateString());
            // Display each repo in the reposLocation
            for (let i = 0; i < repoNames.length; i++) {
                // if the repo is username, don't display it
                if (repoNames[i] === username) {
                    continue;
                // if the repo contains 'projet' in the name, don't display it
                } else if (repoNames[i].includes('Projet')) {
                    continue;
                } else {
                    reposLocation.innerHTML += `
                        <div class="github-container">
                            <h2 class="github-container__title">${repoNames[i]}</h2>
                            <div class="github-container-info">
                                <p class="github-container-info__desc">${repoDescriptions[i]}</p>
                                <p class="github-container-info__language">${repoLanguages[i]}</p>
                                <a class="github-container-info__url" href="${repoUrls[i]}" target="_blank">View repo</a>
                            </div>
                            <p class="github-container__last-updated">Date: ${repoLastUpdatedFormatted[i]}</p>
                        </div>
                    `;
                }
            }

        })
}

githubFetch(apiUrl, username);