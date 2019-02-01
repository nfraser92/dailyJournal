API.getJournalEntries()
.then(parsedEntries => {
parsedEntries.forEach(entry => {
    console.log(entry)
    let HTML = createEntryHTMLComponent(entry)
    printEntry(HTML)
});
})

