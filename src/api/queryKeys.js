export const queryKeys = {
  jobs: {
    all: ['jobs'],
    search: (params) => ['jobs', 'search', params],
    details: (id) => ['jobs', 'details', id],
  },
  saved: {
    all: ['saved'],
  },
}
