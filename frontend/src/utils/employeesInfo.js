export const positions = [
  { value: "1", label: "Manager" },
  { value: "2", label: "Front-End Developer" },
  { value: "3", label: "Back-End Developer" },
  { value: "4", label: "Full-Stack Developer" },
  { value: "5", label: "UI Designer" },
  { value: "6", label: "UX Designer" },
  { value: "7", label: "Business Analyst" },
  { value: "8", label: "Engineer" },
  { value: "9", label: "Project Manager" },
  { value: "10", label: "QA Tester" },
  { value: "11", label: "HR Specialist" },
  { value: "12", label: "Data Analyst" }
];

export const departments = [
  { value: "1", label: "Engineering" },
  { value: "2", label: "Sales" },
  { value: "3", label: "Marketing" },
  { value: "4", label: "Finance" },
  { value: "5", label: "Operations" },
  { value: "6", label: "IT" },
  { value: "7", label: "HR" },
  { value: "8", label: "Business Intelligence" }
];

export const seniorityLevels = [
  { value: "1", label: "Junior" },
  { value: "2", label: "Mid-Level" },
  { value: "3", label: "Senior" },
  { value: "4", label: "Principal" },
  { value: "5", label: "Lead" },
  { value: "6", label: "Intern" }
];

export const contractTypes = [
  { value: "1", label: "Tempo pieno" },
  { value: "2", label: "Tempo parziale" },
  { value: "3", label: "Determinato" },
  { value: "4", label: "Indeterminato" },
  { value: "5", label: "Apprendistato" },
  { value: "6", label: "Stage" },
  { value: "7", label: "Contratto a progetto" }
];

export const probationPeriods = [
  { value: "1", label: "30 giorni" },
  { value: "2", label: "60 giorni" },
  { value: "3", label: "90 giorni" },
  { value: "4", label: "120 giorni" },
  { value: "5", label: "180 giorni" },
  { value: "0", label: "Nessun periodo di prova" }
];

export const workingHours = [
  { value: "1", label: "Tempo pieno" },
  { value: "2", label: "Part-time (mattina)" },
  { value: "3", label: "Part-time (pomeriggio)" },
  { value: "4", label: "Orario flessibile" },
  { value: "5", label: "Lavoro da remoto" },
  { value: "6", label: "Turni" },
];

export const workLocations = [
  { value: "1", label: "Ufficio" },
  { value: "2", label: "Lavoro da remoto" },
  { value: "3", label: "Presso il cliente" },
];

export const employeesFields = [
  {
    label: "Informazioni Personali",
    fields: [
      {
        label: "Nome Completo",
        name: "full_name",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
      {
        label: "Data di Nascita",
        name: "date_of_birth",
        type: "date",
        required: true,
        editableBy: "none",
      },
      {
        label: "Codice Fiscale",
        name: "fiscal_code",
        type: "text",
        required: true,
        editableBy: "none",
      },
      {
        label: "Indirizzo",
        name: "address",
        type: "text",
        required: true,
        editableBy: "employee",
      },
      {
        label: "Numero di Telefono",
        name: "phone_number",
        type: "text",
        required: true,
        editableBy: "employee",
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        required: true,
        editableBy: "employee",
      },
      {
        label: "Genere",
        name: "gender",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
      {
        label: "Nazionalità",
        name: "nationality",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
      {
        label: "Stato Civile",
        name: "marital_status",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
    ],
  },
  {
    label: "Dettagli dell'Impiego",
    fields: [
      {
        label: "Data di Inizio",
        name: "start_date",
        type: "date",
        required: true,
        editableBy: "admin",
      },
      {
        label: "Posizione",
        name: "position",
        type: "autocomplete",
        options: positions,
        required: true,
        editableBy: "admin",
      },
      {
        label: "Settore",
        name: "department",
        type: "autocomplete",
        options: departments,
        required: true,
        editableBy: "admin",
      },
      {
        label: "Seniority",
        name: "seniority_level",
        type: "autocomplete",
        options: seniorityLevels,
        required: true,
        editableBy: "none",
      },
      {
        label: "RAL",
        name: "salary",
        type: "text",
        required: true,
        editableBy: "admin",
      },
      {
        label: "Contratto",
        name: "contract_type",
        type: "select",
        options: contractTypes,
        required: true,
        editableBy: "admin",
      },
      {
        label: "Periodo di Prova",
        name: "probation_period",
        type: "select",
        options: probationPeriods,
        required: true,
        editableBy: "admin",
      },
      {
        label: "Orario di Lavoro",
        name: "working_hours",
        type: "select",
        options: workingHours,
        required: true,
        editableBy: "employee, admin",
      },
      {
        label: "Luogo di Lavoro",
        name: "work_location",
        type: "select",
        options: workLocations,
        required: true,
        editableBy: "employee, admin",
      },
    ],
  },
  {
    label: "Altri Dettagli",
    fields: [
      {
        label: "Nome Contatto di Emergenza",
        name: "emergency_contact_name",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
      {
        label: "Telefono Contatto di Emergenza",
        name: "emergency_contact_phone",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
    ],
  },
  {
    label: "Dati Aggiuntivi",
    fields: [
      // {
      //   label: "ID Dipendente",
      //   name: "employee_id",
      //   type: "text",
      //   required: true,
      //   editableBy: "none",
      // },
      {
        label: "Anni di Esperienza Precedente",
        name: "previous_experience_years",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
      {
        label: "Competenze",
        name: "skills",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
      {
        label: "Lingue",
        name: "languages",
        type: "text",
        required: true,
        editableBy: "admin, employee",
      },
      {
        label: "Stato",
        name: "status",
        type: "text",
        required: true,
        editableBy: "admin",
      },
      {
        label: "Giorni di Ferie Residui",
        name: "vacation_days_remaining",
        type: "text",
        required: true,
        editableBy: "admin",
      },
    ],
  },
];