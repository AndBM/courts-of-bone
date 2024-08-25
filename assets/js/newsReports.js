// List of news reports
const newsReports = [
    "Governor's Birthday Moved due to Clerical Error",
    "Servitor Unionisation Push Met with Disproportionate Violence",
    "Adeptus Administratum Apologizes for 50-Year Delay in Planetary Census",
    "Tech-Priest Found Guilty of Heresy for Using Unapproved Machine Spirit",
    "Hive City Air Quality Deemed Acceptable by Arbitrators After 7-Year Review",
    "Astropathic Choir Successfully Transmits Message Across Segmentum, 40% Casualties Considered Acceptable",
    "Planetary Defense Force Reorganizes After Latest Ork Incursion, New Helmets Issued",
    "Imperial Guard Regiment Commended for 95% Survival Rate During Routine Deployment",
    "Imperial Shrine Reconstructed for Third Time in a Decade, Deemed 'Even More Sacred'",
    "Vox Relay Station Achieves 60% Uptime, Celebrated as Major Breakthrough",
    "Adeptus Arbites Crack Down on Unlicensed Candle Production, Four Families Expunged",
    "Tithe Quota Increased Following 'Unexpected' Population Growth in Underhive",
    "Ecclesiarchy Announces New Saint, Encourages Pilgrimage Despite Ongoing Warp Storms",
    "Planetary Governor Promises to Address Growing Backlog of Infrastructure Prayers",
    "Administratum Clarifies 17-Month Work Week in Latest Labor Edict",
    "Mandatory Psyker Testing Finds Record Number of Suspects, Execution Quota Adjusted Accordingly",
    "Imperial Guard Recruitment Drive Declared Success, 12-Year-Old Enlistee Named Honorary Veteran",
    "Astropathic Choir Accidentally Sends Yearly Report Back in Time, Commended for ‘Innovative Problem-Solving’",
    "Imperial Cult Releases New Hymnal, Worshipers Encouraged to Chant Louder to Ensure Compliance",
    "Planetary Defense Fleet Conducts Drills to Prepare for Chaos Invasion, No Ships Lost This Time",
    "Inquisition Investigates Increase in Unauthorized Smiling Among Hive Workers",
    "Prominent Rogue Trader Declared Missing After Misnavigating Warp, Memorial Service Scheduled",
    "Space Marine Chapter Declines to Comment on Alleged Casual Dining Incident Involving Bolter Rounds",
    "Planetary Rations Adjusted, Citizens Encouraged to ‘Thrive on Less’ for the Emperor’s Glory"
];

// Function to get a random report
function getRandomReport() {
    return newsReports[Math.floor(Math.random() * newsReports.length)];
}

function getReportsByTime() {
    const now = new Date();
    const hours = now.getMinutes();
    return newsReports[Math.floor(Math.random() * newsReports.length)];
}

// Function to initialize the reports
function initializeReports() {
    const now = new Date();
    const hours = now.getHours();
    document.getElementById('report1').innerText = newsReports[(hours+2) % newsReports.length];
    document.getElementById('report2').innerText = newsReports[(hours+1) % newsReports.length];
    document.getElementById('report3').innerText = newsReports[(hours+0) % newsReports.length];
}

// Function to update a random report every 20 minutes
function updateRandomReport() {
    const reportIds = ['report1', 'report2', 'report3'];
    const randomId = reportIds[Math.floor(Math.random() * reportIds.length)];
    document.getElementById(randomId).innerText = getRandomReport();
}

// Initialize reports on page load
initializeReports();

// Update one report every 20 minutes (1200000 milliseconds)
// setInterval(updateRandomReport, 1200000);
