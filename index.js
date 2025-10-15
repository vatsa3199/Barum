   const core = require('@actions/core');

   try {
       const name = core.getInput('name');
       const greeting = `Hello, ${name}! Welcome to Barum.`;
       core.setOutput('greeting', greeting);
   } catch (error) {
       core.setFailed(error.message);
   }