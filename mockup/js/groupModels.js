var groups = [
    {
        name: "Discretni Strukturi",
        year: "2",
        specialty: "SI",
        posts: [
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            }
        ]
    },
    {
        name: "Discretni Strukturi 2",
        year: "2",
        specialty: "SI",
        posts: [
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            }
        ]
    },
    {
        name: "Discretni Strukturi 3",
        year: "2",
        specialty: "SI",
        posts: [
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented.",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, tortor sagittis posuere\n" +
                "                convallis, arcu est imperdiet tortor, sit amet ornare mi nulla eu mi. Aliquam dignissim quam nisi, vel\n" +
                "                sagittis neque volutpat non. Sed quis tempus metus, eget pellentesque ex. Quisque venenatis ac libero in\n" +
                "                condimentum",
                image: "su.gif"
            },
            {
                title: "New book",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, tortor sagittis posuere\n" +
                "                convallis, arcu est imperdiet tortor, sit amet ornare mi nulla eu mi. Aliquam dignissim quam nisi, vel\n" +
                "                sagittis neque volutpat non. Sed quis tempus metus, eget pellentesque ex. Quisque venenatis ac libero in\n" +
                "                condimentum",
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
