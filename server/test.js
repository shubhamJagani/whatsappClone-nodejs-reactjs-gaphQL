const messages = [
    { id: 1, date: '2023-05-15', content: 'Message 1' },
    { id: 2, date: '2023-05-15', content: 'Message 2' },
    { id: 3, date: '2023-05-16', content: 'Message 3' },
    { id: 4, date: '2023-05-16', content: 'Message 4' },
    { id: 5, date: '2023-05-17', content: 'Message 5' },
  ];

  // Group messages by date
  const groupedMessages = messages.reduce((acc, message) => {
    const { date } = message;

    console.log(date)
    if (!acc[date]) {
      acc[date] = message;
    }
    return acc;
  }, {});