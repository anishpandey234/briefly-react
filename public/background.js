// const apiKey = process.env.REACT_APP_API_KEY;
// console.log(apiKey)

// const apiKey = window.apiKey;
// console.log(apiKey);
// const apiKey = window.REACT_APP_API_KEY;
// console.log(apiKey);

async function fetchData() {
  try {
    const response = await fetch('http://localhost:5000/api');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'brieflySummarize',
      title: 'Summarize',
      contexts: ['selection']
    });
  
    chrome.contextMenus.create({
      id: 'brieflyMakeQuiz',
      title: 'Make Quiz',
      contexts: ['selection']
    });
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    fetchData().then((data) => {
      chrome.tabs.sendMessage(tab.id, {
        menuItem: info.menuItemId,
        selectionText: info.selectionText,
        usersData: data,
      })
    });
  });
