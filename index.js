const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // prints out the provided task's details
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? "" : " not"} been completed`);
    },

    // marks the provided task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "Wash dirty clothes, then dry, then fold");
const tasks = [task1, task2];


task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed
