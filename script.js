function filterGirls() {
    const currentYear = new Date().getFullYear();
    const boyYear = parseInt(document.getElementById("boyYear").value);
    if (isNaN(boyYear) || boyYear > currentYear) {
        alert("Please enter a valid year.");
        return;
    }

    const boyAge = currentYear - boyYear;
    const girls = [
        { name: "Anita", year: 2000 },
        { name: "Priya", year: 1998 },
        { name: "Sita", year: 1995 },
        { name: "Radha", year: 2002 }
    ];

    let result = "<b>Eligible Girls:</b><br>";
    let found = false;
    girls.forEach(girl => {
        let girlAge = currentYear - girl.year;
        if (boyAge - girlAge < 5) {
            result += girl.name + " (" + girlAge + " years)<br>";
            found = true;
        }
    });

    if (!found) {
        result += "No matching results.";
    }

    document.getElementById("result").innerHTML = result;
}