const { execFile } = require('child_process');

/**
 * When running with <code>find /</code>
 * in ./execFile.sh would fail with:
 *  error: stdout maxBuffer length exceeded
 */
execFile('./execFile.sh', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
