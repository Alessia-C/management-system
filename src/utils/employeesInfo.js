// utils/positions.js
const positions = [
  { value: "manager", label: "Manager" },
  { value: "frontEndDeveloper", label: "Front-End Developer" },
  { value: "backEndDeveloper", label: "Back-End Developer" },
  { value: "fullStackDeveloper", label: "Full-Stack Developer" },
  { value: "uiDesigner", label: "UI Designer" },
  { value: "uxDesigner", label: "UX Designer" },
  { value: "analyst", label: "Business Analyst" },
  { value: "engineer", label: "Engineer" },
  // Add more positions as needed
];

export default positions;

export const departments = [
  { value: "engineering", label: "Engineering" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "finance", label: "Finance" },
  { value: "operations", label: "Operations" },
  { value: "IT", label: "IT" },
];

export const seniorityLevels = [
  { value: "junior", label: "Junior" },
  { value: "mid-level", label: "Mid-Level" },
  { value: "senior", label: "Senior" },
  { value: "principal", label: "Principal" },
  { value: "lead", label: "Lead" },
];

export const contractTypes = [
  { value: "full_time", label: "Tempo pieno" },
  { value: "part_time", label: "Tempo parziale" },
  { value: "fixed_term", label: "Determinato" },
  { value: "indefinite_term", label: "Indeterminato" },
  { value: "apprenticeship", label: "Apprendistato" },
  { value: "internship", label: "Stage" },
];

export const probationPeriods = [
  { value: "30_days", label: "30 giorni" },
  { value: "60_days", label: "60 giorni" },
  { value: "90_days", label: "90 giorni" },
  { value: "120_days", label: "120 giorni" },
  { value: "180_days", label: "180 giorni" },
  { value: "no_probation", label: "Nessun periodo di prova" },
];

export const workingHours = [
  { value: "full_time", label: "Tempo pieno" },
  { value: "part_time_morning", label: "Part-time (mattina)" },
  { value: "part_time_afternoon", label: "Part-time (pomeriggio)" },
  { value: "flexible_hours", label: "Orario flessibile" },
  { value: "remote_work", label: "Lavoro da remoto" },
  { value: "shifts", label: "Turni" },
];

export const workLocations = [
  { value: "office", label: "Ufficio" },
  { value: "remote", label: "Lavoro da remoto" },
  { value: "client_site", label: "Presso il cliente" },
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
      },
      {
        label: "Data di Nascita",
        name: "date_of_birth",
        type: "date",
        required: true,
      },
      {
        label: "Codice Fiscale",
        name: "fiscal_code",
        type: "text",
        required: true,
      },
      {
        label: "Indirizzo",
        name: "address",
        type: "text",
        required: true,
      },
      {
        label: "Numero di Telefono",
        name: "phone_number",
        type: "text",
        required: true,
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        required: true,
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
      },
      {
        label: "Posizione",
        name: "position",
        type: "autocomplete",
        options: positions,
        required: true,
      },
      {
        label: "Settore",
        name: "department",
        type: "autocomplete",
        options: departments,
        required: true,
      },
      {
        label: "Livello di Seniority",
        name: "seniority_level",
        type: "autocomplete",
        options: seniorityLevels,
        required: true,
      },
      {
        label: "Stipendio",
        name: "salary",
        type: "text",
        required: true,
      },
    ],
  },
  {
    label: "Dettagli del Contratto e Orario di Lavoro",
    fields: [
      {
        label: "Tipo di Contratto",
        name: "contract_type",
        type: "select",
        options: contractTypes,
        required: true,
      },
      {
        label: "Periodo di Prova",
        name: "probation_period",
        type: "select",
        options: probationPeriods,
        required: true,
      },
      {
        label: "Orario di Lavoro",
        name: "working_hours",
        type: "select",
        options: workingHours,
        required: true,
      },
      {
        label: "Luogo di Lavoro",
        name: "work_location",
        type: "select",
        options: workLocations,
        required: true,
      },
    ],
  },
];
