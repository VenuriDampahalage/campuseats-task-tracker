// CampusEats task list
const tasks = [
  {
    name: "Design the menu screen",
    dueDate: "2026-09-26",
  },
  {
    name: "Build the orders API",
    dueDate: "2026-09-27",
  },
  {
    name: "Add user login",
    dueDate: "2026-09-30",
  },
];

console.log(`CampusEats has ${tasks.length} open tasks`);

//Task 6
// BEFORE — what is wrong here? 
function calc(a, b, t) { 
  var x = a * b; 
  if (t == "vip") { x = x - x * 0.1 } 
  console.log("API_KEY=sk_live_9f8a7b6c5d");  // !! 
  return x 
} 
