function removeFeed() {
    let feedXpath = "//h1[text()='Feed Updates']";
    let feed = document.evaluate(feedXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    let feed = feed.parentElement();
    let divide = feed.previousElementSibling;

    let addFeed = document.querySelector(".feed-follows-module");

    if (feed) {
        feed.remove();
    }

    if (divide) {
        divide.remove();
    }

    if (addFeed) {
        addFeed.remove();
    }
}


function removeSides() {
    let peopleViewed = document.getElementById("ember564");
    let courses = document.getElementById("ember640");

    if (peopleViewed) {
        peopleViewed.remove();
    }

    if (courses) {
        courses.remove();
    }
}

removeFeed();
removeSides();
