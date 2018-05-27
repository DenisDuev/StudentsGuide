function createSubjectSpan() {
    var sSubject = document.getElementById("subjectInput").value;
    var subjectSpan = document.createElement("span");
    subjectSpan.setAttribute("class", "home_blue");
    subjectSpan.appendChild(document.createTextNode(sSubject + ": "));
    return subjectSpan;
}

function onComment() {
    var subjectSpan = createSubjectSpan();
    var div = document.getElementById('first');
    var span = document.createElement("span");
    span.setAttribute("class","black");
    var text = document.getElementById("textArea").value;
    span.appendChild(document.createTextNode(text));
    div.appendChild(subjectSpan);
    div.appendChild(span);
    div.appendChild(document.createElement("br"));
}