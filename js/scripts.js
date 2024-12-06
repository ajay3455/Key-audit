// Updated Data Model with all listed keys
const initialData = {
    sets: [
        {
            setName: "Cleaner #1",
            keys: [
                { name: "1 Common Area Key - AA", status: "", note: "", checkedAt: "" },
                { name: "1 FOB (8573)", status: "", note: "", checkedAt: "" },
                { name: "1 Garbage Cans Changeroom - W044", status: "", note: "", checkedAt: "" },
                { name: "1 Gym Tissue Dispenser Black Key", status: "", note: "", checkedAt: "" },
                { name: "1 Toilet Paper Dispenser Key - E114", status: "", note: "", checkedAt: "" },
                { name: "1 Salt Container Pad Lock - A389", status: "", note: "", checkedAt: "" },
                { name: "1 key for 6th Floor Men's Changeroom Tissue dispenser - CAT 74", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Cleaner #2",
            keys: [
                { name: "1 Common Area Key - AA", status: "", note: "", checkedAt: "" },
                { name: "1 FOB (15399)", status: "", note: "", checkedAt: "" },
                { name: "1 Gym Tissue Dispenser Black Key", status: "", note: "", checkedAt: "" },
                { name: "1 Elevator Key - x4001", status: "", note: "", checkedAt: "" },
                { name: "1 Pad Lock key for cleaning supply Locker 1023 and 1024 in P1 - A389", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Cleaner #3",
            keys: [
                { name: "8584- Contractor Master Access", status: "", note: "", checkedAt: "" },
                { name: "1 Tractor Key (KUBOTA)", status: "", note: "", checkedAt: "" },
                { name: "1 Salt Container Pad Lock - A389", status: "", note: "", checkedAt: "" },
                { name: "1 Common Area Key - AA", status: "", note: "", checkedAt: "" },
                { name: "1 Pad Lock key for cleaning supply Locker 1023 and 1024 in P1 - A389", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Cleaner #4",
            keys: [
                { name: "1 Common Area Master - AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master Fob - 13211", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Commercial Patrol",
            keys: [
                { name: "2 Elevator Keys - UTA , X4001", status: "", note: "", checkedAt: "" },
                { name: "1 Common Area Master - AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master Fob - 11053", status: "", note: "", checkedAt: "" },
                { name: "1 Sliding Door Key - D001", status: "", note: "", checkedAt: "" },
                { name: "1 Salt Container/ Fire Safety Plan Box Pad Lock Key - A389", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Commercial Cleaner",
            keys: [
                { name: "1 Common Area Master - AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master Fob - 13890", status: "", note: "", checkedAt: "" },
                { name: "1 Commercial Hand Towel Dispenser Key - CAT74", status: "", note: "", checkedAt: "" },
                { name: "1 2nd Floor Washroom key - HF387436", status: "", note: "", checkedAt: "" },
                { name: "1 Retail Ground Washroom #1 Towel Dispenser Key - 8350", status: "", note: "", checkedAt: "" },
                { name: "1 Retail Ground Washroom #2 Towel Dispenser Key - W0441", status: "", note: "", checkedAt: "" },
                { name: "1 Salt Container/ Fire Safety Plan Box Pad Lock Key - A389", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Commercial Master Key",
            keys: [
                { name: "2AA", status: "", note: "", checkedAt: "" },
                { name: "22AA", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Contractor #1",
            keys: [
                { name: "1 Common Area - AA", status: "", note: "", checkedAt: "" },
                { name: "1 FOB (11057)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Contractor #2",
            keys: [
                { name: "1 Common Area - AA", status: "", note: "", checkedAt: "" },
                { name: "1 FOB (8590)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Contractor #3",
            keys: [
                { name: "1 Common Area - AA", status: "", note: "", checkedAt: "" },
                { name: "1 FOB (11068)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Contractor #4",
            keys: [
                { name: "1 Common Area - AA", status: "", note: "", checkedAt: "" },
                { name: "1 FOB (11059)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Contractor #5",
            keys: [
                { name: "1 Common Area - AA", status: "", note: "", checkedAt: "" },
                { name: "1 FOB (12895)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Elevator Keys",
            keys: [
                { name: "Qty 7 - Elevator Keys", status: "", note: "", checkedAt: "" },
                { name: "X4002 (3)", status: "", note: "", checkedAt: "" },
                { name: "4002(2)", status: "", note: "", checkedAt: "" },
                { name: "FE0K1 (1)", status: "", note: "", checkedAt: "" },
                { name: "Light (A)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Food Cabinet",
            keys: [
                { name: "1 Key - UM228", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Mechanical Penthouse Louver Door",
            keys: [
                { name: "1 Key - 92304", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Customer Care Suite # 209",
            keys: [
                { name: "1 Key (21142) for Unit 209 + 1 FOB (8643) - Access for Floor 2", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Lobby TV Screen Keys",
            keys: [
                { name: "2 Keys - 102", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Management Office",
            keys: [
                { name: "16AA", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Roof Hatch",
            keys: [
                { name: "1 Key - 5501", status: "", note: "", checkedAt: "" },
                { name: "21st & 49Th access hatch", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Security Desk Cabinets",
            keys: [
                { name: "Qty 6 - C415A", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Suite Master Key 1",
            keys: [
                { name: "MKBB", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Suite Master Key 2",
            keys: [
                { name: "MKBB", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Suite Master Key 3",
            keys: [
                { name: "BB", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Suite Master Key 4",
            keys: [
                { name: "BB", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Superintendent",
            keys: [
                { name: "1 FOB (8567)", status: "", note: "", checkedAt: "" },
                { name: "1 Commercial Common Area Master - AA (C2127)", status: "", note: "", checkedAt: "" },
                { name: "1 Gym Tissue Dispenser Black Key", status: "", note: "", checkedAt: "" },
                { name: "1 Tractor Key (KUBOTA)", status: "", note: "", checkedAt: "" },
                { name: "1 L-shaped soap dispenser key", status: "", note: "", checkedAt: "" },
                { name: "1 Toilet paper dispenser key - E114", status: "", note: "", checkedAt: "" },
                { name: "1 Salt Container Pad Lock - A389", status: "", note: "", checkedAt: "" },
                { name: "1 Garbage Chute Deodorizer key - silver U shape key", status: "", note: "", checkedAt: "" },
                { name: "1 Commercial Hand Towel Dispenser Key - CAT74", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Security Ring",
            keys: [
                { name: "1 Key Common Area Master - C2127 (AA)", status: "", note: "", checkedAt: "" },
                { name: "1 Concierge Cabinet - C415A", status: "", note: "", checkedAt: "" },
                { name: "1 Fire Panel Key - 3063", status: "", note: "", checkedAt: "" },
                { name: "2 Elevator Keys (main Lobby) - X4001, FEOK1", status: "", note: "", checkedAt: "" },
                { name: "4 Elevator Keys (Private Residence) - (UTE & UTB & BGM30), UTH", status: "", note: "", checkedAt: "" },
                { name: "1 Elevator #7 Key - UTA", status: "", note: "", checkedAt: "" },
                { name: "1 Master access Fob - GT 00125 (08571)", status: "", note: "", checkedAt: "" },
                { name: "1 Resident Lockbox - (063)", status: "", note: "", checkedAt: "" },
                { name: "1 Private Residence Lobby - (53245)", status: "", note: "", checkedAt: "" },
                { name: "1 Sliding Door Key (D001)", status: "", note: "", checkedAt: "" },
                { name: "1 Loading Dock Moving Fence Padlock Key- (5501)", status: "", note: "", checkedAt: "" },
                { name: "1 Salt Container/ Fire Safety Plan Box Pad Lock Key - A389", status: "", note: "", checkedAt: "" },
                { name: "1 Garage Remote - 187:665", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Residential Patrol",
            keys: [
                { name: "3 Elevator Keys - 4001, FEOK1, X4001", status: "", note: "", checkedAt: "" },
                { name: "1 Master Fob - 8605", status: "", note: "", checkedAt: "" },
                { name: "1 Common Area Master - AA", status: "", note: "", checkedAt: "" },
                { name: "1 Security Desk Cabinet Key - C415A", status: "", note: "", checkedAt: "" },
                { name: "1 Sliding Door Key - (N54G)", status: "", note: "", checkedAt: "" },
                { name: "1 Garage Remote - 187:666", status: "", note: "", checkedAt: "" },
                { name: "1 2nd Floor Washroom Key - HF387436", status: "", note: "", checkedAt: "" },
                { name: "1 Salt Container/ Fire Safety Plan Box Pad Lock Key - A389", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "FOB 1 - Delivery - 1",
            keys: [
                { name: "8591", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "FOB 2 - Delivery - 2",
            keys: [
                { name: "13249", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "FOB 3 - Guest 304",
            keys: [
                { name: "17795 and 1 Key (RW273 540666)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "FOB 4 - Guest 305",
            keys: [
                { name: "8585 and 1 Key (198BB)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "FOB 5- 3rd Theatre",
            keys: [
                { name: "8586", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "FOB 6 -6th Party Rm(1)",
            keys: [
                { name: "8613", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "FOB 7 -6th Party Rm(2)",
            keys: [
                { name: "11054", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "2nd Floor Suite Master",
            keys: [
                { name: "1 Suite Master for all the Suites at 2nd Floor - SC1 (golden key)", status: "", note: "", checkedAt: "" },
                { name: "Suite 208 Key - 1640 LD2 (silver key)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Sliding Door",
            keys: [
                { name: "D001 - Quantity 1", status: "", note: "", checkedAt: "" },
                { name: "N54G - Quantity 4", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Enterphone Panel",
            keys: [
                { name: "\"549\" - Quantity 1", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Salt Container Key Pad",
            keys: [
                { name: "Salt Container Key Pad - A389 ( Quantity - 2 )", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail Contractor 1",
            keys: [
                { name: "1 Common Area Master : AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master FOB : 12896", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail Contractor 2",
            keys: [
                { name: "1 Common Area Master : AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master FOB : 12899", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail Contractor 3",
            keys: [
                { name: "1 Common Area Master : AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master FOB : 12893", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail Contractor 4",
            keys: [
                { name: "1 Common Area Master : AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master FOB : 12898", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail Contractor 5",
            keys: [
                { name: "1 Common Area Master : AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master FOB : 12894", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail Contractor 6",
            keys: [
                { name: "1 Common Area Master : AA", status: "", note: "", checkedAt: "" },
                { name: "1 Master FOB : 7737", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "6th Floor Outdoor Pool receptacle",
            keys: [
                { name: "Tiny silver key \"SECURE\" - Quantity - 2", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "P1 Parcel Machine",
            keys: [
                { name: "Qty 1 - Key Code Richelieu", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "White Cabinet",
            keys: [
                { name: "1 Key - (UM 382)", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Outdoor Faucet Key",
            keys: [
                { name: "Qty 1 - Silver Big Key", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail G Washroom Towel Dispenser Key",
            keys: [
                { name: "Qty 1 - Retail Ground Washroom #1 Towel Dispenser Key - 8350", status: "", note: "", checkedAt: "" },
                { name: "Qty 3 - Retail Ground Washroom #2 Towel Dispenser Key - W044", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail G Door near E6 (Freight)",
            keys: [
                { name: "Qty 2 - C2127 (16AA) (Door that leads to Retail Ground Janitor Room", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "Retail Garbage Bin Padlock",
            keys: [
                { name: "1 key for the padlock of the Blue garbage bin inside the loading dock - 2402", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "P5 Sump Pump Cage Key",
            keys: [
                { name: "Q1 - DIRAK (1333) This key is designated for the sump pump cage lock in the filtration room located near parking level 5017 and locker P5-5025-5030.", status: "", note: "", checkedAt: "" }
            ]
        },
        {
            setName: "2nd Floor Washroom Key",
            keys: [
                { name: "Qty 1 - HF387436", status: "", note: "", checkedAt: "" }
            ]
        }
    ],
    guardName: "",
    buildingName: "The Gloucester on Yonge",
    auditId: "",
    timestamp: ""
};

// DOM references
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
        const freshData = JSON.parse(JSON.stringify(initialData));
        return freshData;
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
                <th>Status</th>
                <th>Checked At</th>
                <th>Note</th>
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
            }
            row.appendChild(noteTd);

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
    }

    const noteTd = row.querySelector('td:last-child');
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
    }

    applyStatusStyling(row, status);
    saveData();
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
