// utils/positions.js
const positions = [
  { value: "1", label: "Manager" },
  { value: "2", label: "Front-End Developer" },
  { value: "3", label: "Back-End Developer" },
  { value: "4", label: "Full-Stack Developer" },
  { value: "5", label: "UI Designer" },
  { value: "6", label: "UX Designer" },
  { value: "7", label: "Business Analyst" },
  { value: "8", label: "Engineer" },
  // Add more positions as needed
];

export default positions;

export const departments = [
  { value: "1", label: "Engineering" },
  { value: "2", label: "Sales" },
  { value: "3", label: "Marketing" },
  { value: "4", label: "Finance" },
  { value: "5", label: "Operations" },
  { value: "6", label: "IT" },
];

export const seniorityLevels = [
  { value: "1", label: "Junior" },
  { value: "2", label: "Mid-Level" },
  { value: "3", label: "Senior" },
  { value: "4", label: "Principal" },
  { value: "5", label: "Lead" },
];

export const contractTypes = [
  { value: "1", label: "Tempo pieno" },
  { value: "2", label: "Tempo parziale" },
  { value: "3", label: "Determinato" },
  { value: "4", label: "Indeterminato" },
  { value: "5", label: "Apprendistato" },
  { value: "6", label: "Stage" },
];

export const probationPeriods = [
  { value: "1", label: "30 giorni" },
  { value: "2", label: "60 giorni" },
  { value: "3", label: "90 giorni" },
  { value: "4", label: "120 giorni" },
  { value: "5", label: "180 giorni" },
  { value: "0", label: "Nessun periodo di prova" },
];

export const workingHours = [
  { value: "1", label: "Tempo pieno" },
  { value: "2", label: "Part-time (mattina)" },
  { value: "3", label: "Part-time (pomeriggio)" },
  { value: "4", label: "Orario flessibile" },
  { value: "4", label: "Lavoro da remoto" },
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
