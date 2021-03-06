import ma = require('azure-pipelines-task-lib/mock-answer');
import mr = require('azure-pipelines-task-lib/mock-run');
import path = require('path');
// Grab common answers
import { answers } from './common';


let taskPath = path.join(__dirname, '..', 'index.js');
let mock: mr.TaskMockRunner = new mr.TaskMockRunner(taskPath);

mock.setInput('image', 'testimage:latest');

// Add the test case to common answers
answers.exec[`mock/bash /tmp/inline_scan.sh scan testimage:latest`] = {
    "code": 0,
    "stdout": "Scan the image [base case]",
    "stderr": ""
};

mock.setAnswers(answers)
mock.run();
