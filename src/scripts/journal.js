API.getJournalEntries()
.then(parsedEntries => {
parsedEntries.forEach(entry => {
    let HTML = createEntryHTMLComponent(entry)
    printEntry(HTML)
});
})

document.querySelector("#saveButton").addEventListener("click", () => {
    const date = document.querySelector("#journalDate").value
    const conceptsCovered = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#moodForDay").value

    let saveEntry = {
        date: date,
        conceptsCovered: conceptsCovered,
        entry: entry,
        mood: mood
    }

    fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(saveEntry)
})
    let newEntry = createEntryHTMLComponent(saveEntry)
    printEntry(newEntry)
})

