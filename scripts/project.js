document.getElementById('reposBtn').addEventListener('click', loadRepos);

// Load GitHub users
function loadRepos() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/webvahvero/repos', true);

    xhr.onload = function() {
        if (this.status == 200) {
            var repos = JSON.parse(this.responseText);

            var output = '';
            for (let i in repos) {
                output += 
                 '<div class="repo">' +
                 '<ul>'  +
                 '<li>Name of the project: ' + repos[i].name + '</li>' +
                 '<li>Description: ' + repos[i].description + '</li>' +
                 '<li>Main language used: ' + repos[i].language + '</li>' +
                 '<li>Created at: ' + repos[i].created_at.substring(0, 10) + '</li>' +
                 '<li>Updated at: ' + repos[i].updated_at.substring(0, 10) + '</li>' +
                 '</ul>' +
                 '<a href="' + repos[i].html_url + '" target="_blank"><button class="repobtn">Repo</button></a>' +
                 '</div>';
            }

            document.getElementById('repos').innerHTML = output;
           
        }
    }

    xhr.send();
}