var groups = [
    {
        name: "Preparation for interviews",
        year: "3",
        specialty: "Elective subjects",
        posts: [
            {
                title: "Test Scores",
                content: "All tests are already checked and mapped. If someone does not see the result, let me write. You will be able to see them tomorrow at the lecture.",
                image: "su.gif"
            },
            {
                title: "The Final Exam",
                content: "The final exam will be on the 5th of June (Tuesday), from 18:00 in Hall 210 at the Chemical Faculty.",
                image: "su.gif"
            },
            {
                title: "Without Exercises",
                content: "I remind you that tomorrow is a non-academic day and we will not have any classes. Also, on Wednesday, we will not have any more exercises again (as low attendance is even lower in the holidays).",
                image: "su.gif"
            },
            {
                title: "For Java Writers",
                content: "In order to accept your solution, you should not have a package declaration in the source.",
                image: "su.gif"
            },
            {
                title: "We'll Have Exercises",
                content: "Today Rally will not be able to perform the exercises, so I will replace her! As always, from 19:15 in the 321st room.",
                image: "su.gif"
            }
        ]
    },
    {
        name: "Operating Systems",
        year: "2",
        specialty: "SI",
        posts: [
            {
                title: "Moved exercises 25.05 (Friday)",
                content: "Practice will be held on Wednesday (06.06) from 19:00 in Hall 306. \n The exercise will be held Thursday (07.06) from 19:00 in Hall 321.",
                image: "su.gif"
            },
            {
                title: "Consultation",
                content: "Hello, \n This Friday (13.04) from 16:00 in room 101 will be held a consultation on the OS for the first checkpoint. \n Greetings, \n Anton",
                image: "su.gif"
            },
            {
                title: "OS - practice, schedule",
                content: "Hello, \n The course 'Operating Systems - Practice' will take place next week. \n greetings, \n --velin",
                image: "su.gif"
            },
            {
                title: "Additional Exercise for 6gr.(Volume 3)",
                content: "May 23, 2018, 5:00 pm, Hall 320",
                image: "su.gif"
            }
        ]
    },
    {
        name: "Web Technology",
        year: "3",
        specialty: "SI",
        posts: [
            {
                title: "Documentation Template",
                content: "Hello colleagues,\n I now see that I've uploaded the documentation template to the uploader link - you can find it here: https://learn.fmi.uni-sofia.bg/mod/assign/view.php?id=102757. (the last link in the moodle). \n Greetings and success!",
                image: "su.gif"
            },
            {
                title: "Change time",
                content: "Hello,\n Today we will start at 18:30 in the same room - 013. \n Greetings,\n Stanislav",
                image: "su.gif"
            },
            {
                title: "5th group - Without exercises today (17.04)",
                content: "For health reasons, today I will not be able to do the exercises. See you on 24.04.",
                image: "su.gif"
            },
            {
                title: "4 hours lecture tomorrow on web technologies",
                content: "Hello colleagues,\n Tomorrow Prof. Stefanov will be absent I will take 4 hours of lecture on web technologies, anyway holidays come and we may miss sometime or we have to be absent so as not to delay. (from 9:15 to 11 and from 11:15 to 13). \n Greetings, \n Milen",
                image: "su.gif"
            },
            {
                title: "Without exercises 28.04",
                content: "Hello, \n There will be no exercise this Saturday. Also, the CSS-1 reviews may be delayed for a few days, which I apologize for. \n Sincerely, \n Ilia Yachev",
                image: "su.gif"
            }
        ]
    },
    {
        name: "Object-Oriented Programming",
        year: "1",
        specialty: "SI",
        posts: [
            {
                title: "4th group - Without exercises today (19.12)",
                content: " We will not have exercises this week (as low attendance is even lower in the holidays).",
                image: "su.gif"
            },
            {
                title: "Homework 2",
                content: "Hello,\n Due to lagging with the material, we extend the second homework by one week. \n Greetings, \n Petyr",
                image: "su.gif"
            },
            {
                title: "Moved Exercises 25.10",
                content: "The exercise will be held Tuesday (07.11) from 18:00 in Hall 306.",
                image: "su.gif"
            },
            {
                title: "Projects",
                content: "Hello colleagues,\n The projects protection will start next week (15.01). \n Greetings, \n Petyr",
                image: "su.gif"
            }
        ]
    },
    {
        name: "Data Structures And Algorithms",
        year: "2",
        specialty: "SI",
        posts: [
            {
                title: "Projects",
                content: " You need to implement the data structures  you use in your project. \n Greetings,\n Stanislav",
                image: "su.gif"
            },
            {
                title: "Homework 1",
                content: "Hello,\n For the first home you can use STL implementations. \n Greetings,\n Stanislav",
                image: "su.gif"
            },
            {
                title: "Lectures",
                content: "This week (22.12) we will not have a lecture. \n Greetings \n Nora",
                image: "su.gif"
            },
            {
                title: "Last Homework",
                content: "Hello colleagues,\n The last homework is gone. Successful session. \n Greetings, \n Stanislav",
                image: "su.gif"
            }
        ]
    }
];

function generateGroups(bHasLink) {
    var contentDiv = document.getElementById("content");

    function createGroup(iId) {
        var div = document.createElement("div");
        div.className = "horizontal-block";
        div.id = "div" + iId;

        var span = document.createElement("span");
        span.style = "color: black";
        span.innerText = groups[iId].name;

        div.appendChild(span);

        var input = document.createElement("input");
        input.type = "submit";
        input.value = "JOIN";

        if (bHasLink === true)  {
            var form = document.createElement("a");
            form.href = "group.html?id=" + iId;
            form.appendChild(input);
            div.appendChild(form);
        } else {
            div.appendChild(input);

            input.onclick = function (e) {
                if (confirm("Are you sure you want to delete this group")) {
                    document.getElementById("div" + iId).remove();
                }
            }.bind(iId)
        }

        return div;
    }

    for(var i = 0; i < groups.length; i++) {
        var groupDiv = createGroup(i);
        contentDiv.appendChild(groupDiv);
    }
}


function getParamsFromUrl(sParam) {
    var url = new URL(window.location.href);
    var param = url.searchParams.get(sParam);
    return param;
}

function genarateMatrixOfPost(){
    var contentDiv = document.getElementById("content");
    var groupId = getParamsFromUrl("id");

    function createGroupPost(groupId, postId, sClass) {
        var p = document.createElement("p");
        var oPost = groups[groupId].posts[postId];
        p.innerText = oPost.content;

        var span = document.createElement("span");
        span.style = "color: black";
        span.innerText= oPost.title;

        var img = document.createElement("img");
        img.src = "images/" + oPost.image;
        img.className = "post";

        var div = document.createElement("div");
        div.className = sClass;
        div.style = "height: 40%";
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(p);

        var aLink = document.createElement("a");
        aLink.href = "groupComment.html?id=" + groupId + "&post=" + postId;

        aLink.appendChild(div);
        return aLink;
    }

    var headerSpan = document.createElement("span");
    headerSpan.innerText = groups[groupId].name;
    var headDiv = document.createElement("div");
    headDiv.className = "header";
    headDiv.appendChild(headerSpan);

    contentDiv.appendChild(headDiv);

    var oPosts = groups[groupId].posts;
    for (var i = 0; i < oPosts.length; i+=2) {
        if (oPosts[i]) {
            contentDiv.appendChild(createGroupPost(groupId, i, "left-cube"));
        }
        if (oPosts[i+1]) {
            contentDiv.appendChild(createGroupPost(groupId, i + 1, "right-cube"));
        }
    }
}

function generateCommentOfPost() {
    var groupId = getParamsFromUrl("id");
    var postId = getParamsFromUrl("post");

    var oPost = groups[groupId].posts[postId];

    var headerSpan = document.createElement("span");
    headerSpan.innerText = oPost.title;
    var headDiv = document.createElement("div");
    headDiv.className = "header";
    headDiv.appendChild(headerSpan);
    document.getElementById("first").appendChild(headDiv);

    var div = document.getElementById('first');
    var text = document.createElement("span");
    text.innerText = oPost.content;
    text.setAttribute("class","black");
    div.appendChild(text);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
}
