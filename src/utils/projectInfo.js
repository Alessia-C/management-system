export const projectStates = [
  { value: "in_progress", label: "In corso" },
  { value: "completed", label: "Completato" },
  { value: "pending", label: "In attesa" },
  { value: "canceled", label: "Cancellato" },
  { value: "planned", label: "Pianificato" },
];

export const projectsFields = [
  {
    label: "Informazioni Progetto",
    fields: [
      {
        label: "Nome Progetto",
        name: "project_name",
        type: "text",
        required: true,
      },
      {
        label: "Descrizione",
        name: "description",
        type: "text",
        required: true,
      },
      {
        label: "Tipo Progetto",
        name: "project_type",
        type: "text",
        required: true,
      },
      {
        label: "Data di inizio",
        name: "startDate",
        type: "date",
        required: true,
      },
      {
        label: "Data di fine",
        name: "endDate",
        type: "date",
        required: true,
      },
      {
        label: "Status",
        name: "status",
        type: "select",
        options: projectStates,
        required: true,
      },
      {
        label: "Budget",
        name: "budget",
        type: "text",
        required: true,
      },
    ],
  },
];
