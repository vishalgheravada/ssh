const core = require('@actions/core');
const github = require('@actions/github');
const exec = require("@actions/exec");

async function run() {
  try {    
    const host = core.getInput('host');
    const user = core.getInput('user');
    const key = core.getInput('key');
    const port = core.getInput('port');
    const password = core.getInput('password');


    console.log(`Hello ${password}!`);
    const time = (new Date()).toTimeString();
    await exec.exec("sshpass");

    core.setOutput("time", time);    
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();