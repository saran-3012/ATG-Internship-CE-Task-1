const btn = document.querySelector('#button');
const res = document.querySelector('#result');
btn.addEventListener('click', async ()=>{
    let [tab] = await chrome.tabs.query({active:true, currentWindow:true});
    res.innerText = tab.title;
});