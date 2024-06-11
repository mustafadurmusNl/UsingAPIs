'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

// TODO Remove callback and return a promise
function rollDie() {
 return new Promise((resolve, reject) => {
    // Compute a random number of rolls (3-10) that the die MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);
  
    const rollOnce = (roll) => {
      // Compute a random die value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);
  
      // Use callback to notify that the die rolled off the table after 6 rolls
      if (roll > 6) {
        reject(new Error('Oops... Die rolled off the table.'));
  return
      }
  
      // Use callback to communicate the final die value once finished rolling
      if (roll === randomRollsToDo) {
     
        resolve(value);
        return
          }
  
      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };
  
    // Start the initial roll
    rollOnce(1);
  });
}

function main() {

  rollDie()
  .then((value) => {
    console.log(`Success! Die settled on ${value}`);
  })
  .catch((error) => {
    console.error(error.message);
})
}

main();
/*
After refactoring the code to use promises, the problem of the die rolling off the table after
 6 rolls does not cause the program to continue executing unnecessary rolls. This is because 
 the promise is either resolved or rejected, which completes the asynchronous operation, 
 and no further actions are scheduled. This makes the control flow much cleaner and avoids 
 the potential issue of continuing execution after an error has occurred.
*/