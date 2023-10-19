const data = {
  boards: [
    {
      id: "b1",
      name: "Tutorial Board",
      columns: [
        {
          id: "b1c1",
          name: "Tasks",
          color: "lightblue",
          tasks: [
            {
              id: "b1c1t1",
              title: "Click me first!",
              description:
                "Well done! This board will serve as a tutorial for this app. Clicking each task tile will open up that specific task's details. In this view, you can mark subtasks as completed or incomplete and change the status of the task. Changing a task's status will automatically change its column!",
              status: "Tasks",
              subtasks: [
                {
                  id: "b1c1t1s1",
                  title: "Click me to toggle completion status!",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c1t2",
              title: "Add a task",
              description:
                "You can click the plus sign on the top-right of the page to add a new task to this board. Only a title and a status is needed to create a task.",
              status: "Tasks",
              subtasks: [
                {
                  id: "b1c1t2s1",
                  title: "Give it a try!",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c1t3",
              title: "Edit or delete a task",
              description:
                "Click the 3 dots in the top right of the task modal if you would like to edit the title/description or if you would like to delete the task. We will always double check with you to confirm that you want to delete the task!",
              status: "Tasks",
              subtasks: [
                {
                  id: "b1c1t3s1",
                  title: "Change this subtask by editing the task!",
                  isCompleted: false,
                },
                {
                  id: "b1c1t3s2",
                  title: "Try deleting the task below that says 'Delete me!'",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c1t4",
              title: "Delete me!",
              description: "",
              status: "Tasks",
              subtasks: [],
            },
          ],
        },
        {
          id: "b1c2",
          name: "Columns",
          color: "lightred",
          tasks: [
            {
              id: "b1c2t1",
              title: "Add a column",
              description:
                "You can add or delete a column by clicking on the '+New Column' button on the far right of the app. Beware that deleting a column will cause all of its tasks to disappear, so be sure to move all wanted tasks to a new column beforehand!",
              status: "Tasks",
              subtasks: [
                {
                  id: "b1c2t1s1",
                  title: "Try adding a new column!",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: "b1c3",
          name: "Boards",
          color: "green",
          tasks: [
            {
              id: "b1c3t1",
              title: "View boards",
              description:
                "You can find all of your boards listed on the left hand sidebar. If you are using a mobile device, you can find them listed by clicking the current board name, 'Tutorial Board,' in the top-left of the app. Clicking the board name will show the board's details.",
              status: "Tasks",
              subtasks: [
                {
                  id: "b1c3t1s1",
                  title: "Take a look to your left",
                  isCompleted: false,
                },
                {
                  id: "b1c3t1s2",
                  title: "On mobile? Click Tutorial Board!",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c3t2",
              title: "Add a board",
              description:
                "You can create a new board by clicking '+Create New Board' at the bottom of the board list. Only a name is needed to create a board, but we will ask you to create a column before you can add tasks to the board.",
              status: "Tasks",
              subtasks: [
                {
                  id: "b1c3t2s1",
                  title: "Try adding a new board!",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "b1c3t3",
              title: "Edit or delete a board",
              description:
                "You can press the three dots in the top-right of the app to edit or delete this board. Editing will allow you to add or delete a column, change the column names and change the board name. If you choose to delete the board, please beware that it will delete the tasks within that board permanently. We will always ask if you are sure you would like to delete it.",
              status: "Tasks",
              subtasks: [
                {
                  id: "b1c3t3s1",
                  title:
                    "Change this board's title to 'A Fun and Exciting Tutorial'",
                  isCompleted: false,
                },
                {
                  id: "b1c3t3s1",
                  title:
                    "You can also edit the board by clicking '+New Column'",
                  isCompleted: false,
                },
                {
                  id: "b1c3t3s1",
                  title: "Delete the board titled 'Delete Me!'",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "b2",
      name: "Delete Me",
      columns: [
        {
          id: "b2c1",
          name: "Light Blue",
          color: "lightblue",
          tasks: [],
        },
        {
          id: "b2c2",
          name: "Light Red",
          color: "lightred",
          tasks: [],
        },
        {
          id: "b2c3",
          name: "Green",
          color: "green",
          tasks: [],
        },
        {
          id: "b2c4",
          name: "Pink",
          color: "pink",
          tasks: [],
        },
        {
          id: "b2c5",
          name: "Orange",
          color: "orange",
          tasks: [],
        },
      ],
    },
  ],
};

export default data;
