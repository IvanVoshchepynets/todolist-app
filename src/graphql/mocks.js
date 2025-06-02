export const mocks = {
    Query: () => ({
      tasks: () => [
        {
          id: '1',
          title: 'Тестова задача 1',
          description: 'Опис тестової задачі 1',
          type: '3',
          status: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          deleted_at: null,
        },
        {
          id: '2',
          title: 'Тестова задача 2',
          description: 'Опис тестової задачі 2',
          type: '1',
          status: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          deleted_at: null,
        },
      ],
    }),
  
    Mutation: () => ({
      addTask: (_, { title, description, type }) => ({
        id: Date.now().toString(),
        title,
        description,
        type,
        status: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null,
      }),
    }),
  };
  