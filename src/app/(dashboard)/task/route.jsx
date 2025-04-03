export async function GET(request) {
  // Get tasks from database
  const tasks = [
    {
      id: 'task-1',
      title: 'Slack Integration',
      description: 'Add a field in the portal to let the user connect their Slack account.',
      category: {
        name: 'Development',
        bgColor: 'purple-100',
        textColor: 'purple-500'
      },
      priorityColor: 'red-400',
      status: 'notStarted',
      dueDate: 'Tomorrow',
      workspaceId: 'hrd-design'
    },
    {
      id: 'task-2',
      title: 'Mini Project 001',
      description: 'Add a field in the portal to let the user connect their Slack account.',
      category: {
        name: 'UX / UI Design',
        bgColor: 'pink-100',
        textColor: 'pink-500'
      },
      priorityColor: 'red-400',
      status: 'notStarted',
      dueDate: 'Mar 03, 2025',
      workspaceId: 'hrd-design'
    },
    {
      id: 'task-3',
      title: 'ReactJS Homework 003',
      description: 'Add a field in the portal to let the user connect their Slack account.',
      category: {
        name: 'Web Homework',
        bgColor: 'blue-100',
        textColor: 'blue-500'
      },
      priorityColor: 'blue-400',
      status: 'inProgress',
      dueDate: 'Mar 24, 2025',
      workspaceId: 'hrd-design'
    },
    {
      id: 'task-4',
      title: 'Data Fetching',
      description: 'Add a field in the portal to let the user connect their Slack account.',
      category: {
        name: 'Web Homework',
        bgColor: 'blue-100',
        textColor: 'blue-500'
      },
      priorityColor: 'green-400',
      status: 'finished',
      dueDate: 'Mar 23, 2025',
      workspaceId: 'hrd-design'
    }
  ];
  
  // Filter by workspace if provided in query
  const { searchParams } = new URL(request.url);
  const workspaceId = searchParams.get('workspaceId');
  
  if (workspaceId) {
    return Response.json(tasks.filter(task => task.workspaceId === workspaceId));
  }
  
  return Response.json(tasks);
}

export async function POST(request) {
  const data = await request.json();
  // Create new task in database
  return Response.json({ success: true, id: 'new-task-id' });
}
