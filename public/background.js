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