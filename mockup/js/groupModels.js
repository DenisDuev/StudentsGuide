var groups = [
    {
        name: "Discretni Strukturi",
        year: "2",
        specialty: "SI",
        posts: [
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
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
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
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
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
            },
            {
                title: "New book",
                content: "At thursday morning a new book about discrete mathematics will be presented."
            }
        ]
    }
];

function generateGoups() {
    var contentDiv = document.getElementById("content");

    function createGroup(iId) {
        var input = document.createElement("input");
        input.type = "submit";
        input.value = "JOIN";

        var form = document.createElement("a");
        form.href = "group.html?id=" + iId;
        form.appendChild(input);

        var span = document.createElement("span");
        span.style = "color: black";
        span.innerText = groups[iId].name;

        var div = document.createElement("div");
        div.className = "horizontal-block";
        div.appendChild(span);
        div.appendChild(form);

        return div;
    }

    for(var i = 0; i < groups.length; i++) {
        var groupDiv = createGroup(i);
        contentDiv.appendChild(groupDiv);
    }
}
