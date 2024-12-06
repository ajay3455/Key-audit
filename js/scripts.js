// Assuming initialData with all sets and keys is defined as before.
// Example:
// const initialData = { sets: [...], guardName: "", buildingName: "The Gloucester on Yonge", auditId: "", timestamp: "" };

const guardNameDisplay = document.getElementById('guardNameDisplay');
const buildingNameDisplay = document.getElementById('buildingName');
const currentDateTime = document.getElementById('currentDateTime');
const progressFill = document.getElementById('progressFill');
const progressPercentage = document.getElementById('progressPercentage');
const goodCountEl = document.getElementById('goodCount');
const missingCountEl = document.getElementById('missingCount');
const damagedCountEl = document.getElementById('damagedCount');
const otherCountEl = document.getElementById('otherCount');
const keySetsContainer = document.getElementById('keySetsContainer');

const nameModal = document.getElementById('nameModal');
const guardNameInput = document.getElementById('guardNameInput');
const saveGuardNameBtn = document.getElementById('saveGuardNameBtn');

const resetModal = document.getElementById('resetModal');
const confirmResetBtn = document.getElementById('confirmResetBtn');
const cancelResetBtn = document.getElementById('cancelResetBtn');

const helpModal = document.getElementById('helpModal');
const closeHelpBtn = document.getElementById('closeHelpBtn');
const helpBtn = document.getElementById('helpBtn');

const searchInput = document.getElementById('searchInput');
const resetBtn = document.getElementById('resetBtn');
const generatePDFBtn = document.getElementById('generatePDFBtn');

// Load or initialize data
let auditData = loadData();
if (!auditData.guardName) {
    nameModal.style.display = 'flex';
}
buildingNameDisplay.textContent = auditData.buildingName;
if (!auditData.auditId) {
    auditData.auditId = generateAuditId();
    saveData();
}
updateDateTime();
setInterval(updateDateTime, 1000);
renderAllKeySets();

saveGuardNameBtn.addEventListener('click', () => {
    const nameVal = guardNameInput.value.trim();
    if (nameVal) {
        auditData.guardName = nameVal;
        saveData();
        guardNameDisplay.textContent = nameVal;
        nameModal.style.display = 'none';
        updateCountsAndProgress();
    }
});

resetBtn.addEventListener('click', () => {
    resetModal.style.display = 'flex';
});

confirmResetBtn.addEventListener('click', () => {
    localStorage.removeItem('auditData');
    auditData = JSON.parse(JSON.stringify(initialData));
    auditData.auditId = generateAuditId();
    saveData();
    location.reload();
});

cancelResetBtn.addEventListener('click', () => {
    resetModal.style.display = 'none';
});

helpBtn.addEventListener('click', () => {
    helpModal.style.display = 'flex';
});

closeHelpBtn.addEventListener('click', () => {
    helpModal.style.display = 'none';
});

searchInput.addEventListener('input', handleSearch);
generatePDFBtn.addEventListener('click', generatePDFReport);

function loadData() {
    const saved = localStorage.getItem('auditData');
    if (saved) {
        return JSON.parse(saved);
    } else {
        return JSON.parse(JSON.stringify(initialData));
    }
}

function saveData() {
    localStorage.setItem('auditData', JSON.stringify(auditData));
}

function generateAuditId() {
    return 'AUD-' + Math.floor(Math.random() * 1000000);
}

function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: true
    };
    currentDateTime.textContent = now.toLocaleString('en-CA', options);
    auditData.timestamp = now.toISOString();
    saveData();
}

function renderAllKeySets() {
    guardNameDisplay.textContent = auditData.guardName || "";
    keySetsContainer.innerHTML = '';

    // Column headers updated: 'Last Checked At' instead of 'Checked At'
    auditData.sets.forEach((set, setIndex) => {
        const setDiv = document.createElement('div');
        setDiv.classList.add('key-set');

        const header = document.createElement('div');
        header.classList.add('key-set-header');
        header.textContent = set.setName;
        setDiv.appendChild(header);

        const table = document.createElement('table');
        table.classList.add('key-table');

        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Key</th>
                <th>Last Checked At</th>
                <th>Note</th>
                <th>Status</th>
            </tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        set.keys.forEach((keyObj, keyIndex) => {
            const row = document.createElement('tr');
            row.classList.add('key-row');
            applyStatusStyling(row, keyObj.status);

            const nameTd = document.createElement('td');
            nameTd.textContent = keyObj.name;
            row.appendChild(nameTd);

            const checkedAtTd = document.createElement('td');
            checkedAtTd.textContent = keyObj.checkedAt;
            row.appendChild(checkedAtTd);

            const noteTd = document.createElement('td');
            if (keyObj.status === 'other') {
                const textarea = document.createElement('textarea');
                textarea.classList.add('notes-textarea');
                textarea.value = keyObj.note || '';
                textarea.addEventListener('input', () => {
                    auditData.sets[setIndex].keys[keyIndex].note = textarea.value;
                    saveData();
                });
                noteTd.appendChild(textarea);
            } else {
                if (keyObj.note) {
                    noteTd.textContent = keyObj.note;
                }
            }
            row.appendChild(noteTd);

            const statusTd = document.createElement('td');
            const statusContainer = document.createElement('div');
            statusContainer.classList.add('status-buttons');
            ['good', 'missing', 'damaged', 'other'].forEach(st => {
                const btn = document.createElement('button');
                btn.classList.add('status-btn', st);
                btn.textContent = st.charAt(0).toUpperCase() + st.slice(1);
                btn.addEventListener('click', () => setKeyStatus(setIndex, keyIndex, st, row));
                statusContainer.appendChild(btn);
            });
            statusTd.appendChild(statusContainer);
            row.appendChild(statusTd);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        setDiv.appendChild(table);
        keySetsContainer.appendChild(setDiv);
    });

    updateCountsAndProgress();
}

function setKeyStatus(setIndex, keyIndex, status, row) {
    auditData.sets[setIndex].keys[keyIndex].status = status;
    if (status) {
        auditData.sets[setIndex].keys[keyIndex].checkedAt = new Date().toLocaleString('en-CA', {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
        });
    } else {
        auditData.sets[setIndex].keys[keyIndex].checkedAt = "";
        auditData.sets[setIndex].keys[keyIndex].note = "";
    }

    saveData();
    // Update the UI instantly
    const checkedAtTd = row.querySelector('td:nth-child(2)');
    checkedAtTd.textContent = auditData.sets[setIndex].keys[keyIndex].checkedAt;

    const noteTd = row.querySelector('td:nth-child(3)');
    noteTd.innerHTML = '';
    if (status === 'other') {
        const textarea = document.createElement('textarea');
        textarea.classList.add('notes-textarea');
        textarea.value = auditData.sets[setIndex].keys[keyIndex].note || '';
        textarea.addEventListener('input', () => {
            auditData.sets[setIndex].keys[keyIndex].note = textarea.value;
            saveData();
        });
        noteTd.appendChild(textarea);
    } else if (auditData.sets[setIndex].keys[keyIndex].note) {
        noteTd.textContent = auditData.sets[setIndex].keys[keyIndex].note;
    }

    applyStatusStyling(row, status);
    updateCountsAndProgress();
}

function applyStatusStyling(row, status) {
    row.classList.remove('good-selected', 'missing-selected', 'damaged-selected', 'other-selected');
    if (status === 'good') {
        row.classList.add('good-selected');
    } else if (status === 'missing') {
        row.classList.add('missing-selected');
    } else if (status === 'damaged') {
        row.classList.add('damaged-selected');
    } else if (status === 'other') {
        row.classList.add('other-selected');
    }
}

function updateCountsAndProgress() {
    let good = 0, missing = 0, damaged = 0, other = 0;
    let totalKeys = 0;
    let completed = 0;

    auditData.sets.forEach(set => {
        set.keys.forEach(keyObj => {
            totalKeys++;
            if (keyObj.status) {
                completed++;
            }
            if (keyObj.status === 'good') good++;
            if (keyObj.status === 'missing') missing++;
            if (keyObj.status === 'damaged') damaged++;
            if (keyObj.status === 'other') other++;
        });
    });

    goodCountEl.textContent = good;
    missingCountEl.textContent = missing;
    damagedCountEl.textContent = damaged;
    otherCountEl.textContent = other;

    const percentage = totalKeys > 0 ? Math.round((completed / totalKeys) * 100) : 0;
    progressFill.style.width = percentage + '%';
    progressPercentage.textContent = percentage + '%';
}

function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const sets = keySetsContainer.querySelectorAll('.key-set');

    sets.forEach(setDiv => {
        const setName = setDiv.querySelector('.key-set-header').textContent.toLowerCase();
        const rows = setDiv.querySelectorAll('.key-row');
        let setMatch = false;

        rows.forEach(row => {
            const keyName = row.querySelector('td:first-child').textContent.toLowerCase();
            if (keyName.includes(query) || setName.includes(query)) {
                row.style.display = '';
                setMatch = true;
            } else {
                row.style.display = 'none';
            }
        });

        if (!setMatch && !setName.includes(query)) {
            setDiv.style.display = 'none';
        } else {
            setDiv.style.display = '';
        }
    });
}

function generatePDFReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.text(auditData.buildingName, 10, 10);
    doc.text(`Guard: ${auditData.guardName}`, 10, 20);
    const dateStr = new Date().toLocaleString('en-CA', {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
    });
    doc.text(`Date: ${dateStr}`, 10, 30);
    doc.text(`Audit ID: ${auditData.auditId}`, 10, 40);

    let good = 0, missing = 0, damaged = 0, other = 0, total = 0, completed = 0;
    auditData.sets.forEach(set => {
        set.keys.forEach(k => {
            total++;
            if (k.status) completed++;
            if (k.status === 'good') good++;
            if (k.status === 'missing') missing++;
            if (k.status === 'damaged') damaged++;
            if (k.status === 'other') other++;
        });
    });
    const summaryY = 50;
    doc.text(`Total Keys: ${total}`, 10, summaryY);
    doc.text(`Keys Completed: ${completed}`, 10, summaryY+10);
    doc.text(`Good: ${good}`, 10, summaryY+20);
    doc.text(`Missing: ${missing}`, 50, summaryY+20);
    doc.text(`Damaged: ${damaged}`, 90, summaryY+20);
    doc.text(`Other: ${other}`, 130, summaryY+20);

    let currentY = summaryY + 30;

    const allKeys = [];
    auditData.sets.forEach(set => {
        set.keys.forEach(k => {
            allKeys.push({
                setName: set.setName,
                name: k.name,
                status: k.status || 'Not Checked',
                checkedAt: k.checkedAt || '',
                note: k.note || ''
            });
        });
    });

    allKeys.sort((a, b) => {
        const aCompleted = a.status !== 'Not Checked';
        const bCompleted = b.status !== 'Not Checked';
        if (aCompleted && !bCompleted) return -1;
        if (!aCompleted && bCompleted) return 1;
        return 0;
    });

    doc.autoTable({
        startY: currentY,
        head: [['Key Set', 'Key', 'Status', 'Checked At', 'Note']],
        body: allKeys.map(k => [k.setName, k.name, k.status, k.checkedAt, k.note]),
        styles: { fillColor: [230, 230, 250] },
        alternateRowStyles: { fillColor: [245, 245, 255] },
        headStyles: { fillColor: [200, 200, 250] },
        margin: { top: currentY }
    });

    doc.save(`Key_Audit_Report_${auditData.auditId}.pdf`);
}
