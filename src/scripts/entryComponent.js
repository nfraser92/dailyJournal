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

// alert user to enter text into form fields
// function validateForm() {
//     var x = document.forms["myForm"][validateForm].value;
//     if (x === "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }