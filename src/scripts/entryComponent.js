// creates HTML component and structure of journal entry
const createEntryHTMLComponent = completedEntry => {
    return `
<section class="journal_entries">
    <section class="entryDate"><h3>${completedEntry.date}</h3></section>
    <section class="entryConcepts"> Concepts Covered: ${completedEntry.conceptsCovered}</section>
    <section class="entryEntry">Entry: ${completedEntry.entry}</section>
    <section class="entryMood"> Mood: ${completedEntry.mood}</section>
</section>
`
}