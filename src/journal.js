/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    return `
    section class="journal_section"
    <h3>${journalDate}</h3>
    <h3>${conceptsCovered}</h3>
    <p>${journalEntry}</p>
    <p>${moodForDay}</p>
    </section>
    `
}

const journalSection = document.querySelector("#journal_section")

// Create HTML structure and add to DOM
for (let entry of objectsJournalEntry) {
    let newEntry = makeJournalEntryComponent(entry)
    journalSection.innerHTML += newEntry
}

const renderJournalEntries = (entry) => {
    const journalEl = document.querySelector("#journalSection")
}

// Invoke the render function
renderJournalEntries(entry)
