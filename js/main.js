function fetchIssues(issue) {
    var issues = JSON.parse(localStorage.getItem('issues'))
    var issuesList = document.getElementById('issuesList')
    issuesList.innerHTML = "";
    for (var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].assignedTo;
        var status = issues[i].status;

        issuesList.innerHTML += `<div class = "well">
      <h6>Issue ID : ${id} </h6>
      <p><span class = "label label-info ">${status}</span></p>
      <h3></h3>
      `
    }
}