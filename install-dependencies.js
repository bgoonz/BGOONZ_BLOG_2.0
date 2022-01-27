/* eslint-disable eol-last */
const fs = require('fs/promises');
const { spawn } = require('child_process');
const path = require('path');
const root = process.cwd();

// eslint-disable-next-line func-style
function npmInstall(cwd) {
  return new Promise(resolve => {
    const childProcess = spawn('npm', ['install'], { cwd });
    childProcess.on('exit', resolve);
  });
}

// eslint-disable-next-line func-style
async function install() {
  const base = path.resolve(root);
  const ignoreFolders = ['node_modules'];
  const deps = (await fs.readdir(base, { withFileTypes: true }))
    .filter(dep => dep.isDirectory())
    .filter(dep => !ignoreFolders.includes(dep.name))
    .map(folder => path.resolve(base, folder.name))
    .concat([base])
    .map(dep => npmInstall(dep));

  await Promise.all(deps);
  // eslint-disable-next-line no-console
  console.log('Done!');
}

install();
