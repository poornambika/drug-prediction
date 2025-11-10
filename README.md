

Drug Discovery Prediction – Frontend UI

💊🧪 A clean multi-page web interface designed to mimic a basic drug-discovery workflow using molecule inputs and conceptual prediction results.


---

📌 Table of Contents

1. Overview


2. Features


3. Project Structure


4. Pages Explained


5. Dataset Reference (ChEMBL)


6. How to Run


7. Future Enhancements


8. License (Optional)




---

🔬 1. Overview

This project represents a UI prototype for drug discovery applications.
It allows users to navigate through pages related to:

Molecular prediction

Drug-likeness concepts

History

User authentication

Project information


This version is frontend-only, designed to be extended with real ML models later.
Perfect for academic submissions and GitHub portfolio.

🧪💊🧬


---

🌟 2. Features

✅ Core UI Features

Multi-page structured layout

Clean scientific theme

Drug-like icons and molecule visuals (emoji-based)

Smooth navigation


✅ Drug-Discovery Inspired Features

💊 Input for SMILES

⚗️ Input for Target / Assay ID

🧬 Supports drug-likeness concepts (visual only)

🔍 Conceptual prediction output area


✅ Analytical-Style Enhancements

QSAR-like workflow placeholders

Molecule property input fields

Placeholder result panel

Activity label + score + confidence space


✅ UI Modules Provided

Login / Register

Prediction Form

History Page

About & Contact pages


✅ Future Model Integration Ready

Can connect to ML backend (Flask / FastAPI / Node.js)

JS file can be extended to fetch predictions


🧫⚛️🔬✨


---

📂 3. Project Structure
project-folder/
│
├── index.html
├── home.html
├── predict.html
├── history.html
├── about.html
├── contact.html
├── login.html
├── register.html
│
└── assets/
     ├── css/
     │    └── styles.css
     ├── js/
     │    └── main.js
     └── img/
          └── (drug icons & molecule images)


---

🧭 4. Pages Explained

🏠 Home (index.html / home.html)

Project introduction and navigation.

🧪 Predict (predict.html)

Enter SMILES

Enter Target ID

View conceptual result panel


📜 History (history.html)

Designed for storing prediction logs (future JS support)


ℹ️ About (about.html)

Project concept

Dataset background


📞 Contact (contact.html)

Contact details or placeholder


🔐 Login & Register (login.html, register.html)

UI for authentication flows (backend ready)



---

🧬 5. Dataset Reference – ChEMBL

This UI is inspired by the workflow of ChEMBL, a curated bioactivity database.

ChEMBL provides:
💊 Small molecule data
🧪 Bioactivity values
🧬 Drug–target interactions
⚗️ Molecular descriptors

❗ This project does NOT include the dataset, only references its concepts.


---

🚀 6. How to Run

1. Download the project


2. Open index.html in any browser


3. Use the navigation bar to explore pages



✅ No installation
✅ No backend needed
✅ Fully static


---

🔮 7. Future Enhancements

Here’s what you can add later:

🧪 JavaScript-based real prediction

🧬 ML integration (Flask / FastAPI)

🔍 Toxicity prediction

⚗️ Drug-likeness scoring (Lipinski rules)

📊 Plot-based visualization

💾 LocalStorage-based history

🧫 Target-specific drug activity model
https://poornambika.github.io/drug-prediction/index.html

