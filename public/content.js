chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.menuItem === 'brieflySummarize') {
    console.log(request.usersData);
    // Do something with request.selectionText and request.usersData
    } else if (request.menuItem === 'brieflyMakeQuiz') {
    console.log(request.usersData);
    // Do something with request.selectionText and request.usersData
    }
});
  