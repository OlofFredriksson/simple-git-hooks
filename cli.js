#!/usr/bin/env node


/**
 * A CLI tool to change the git hooks to commands from config
 */
const {setHooksFromConfig, skip} = require('./simple-git-hooks')

if(skip()) {
    return;
}

setHooksFromConfig(process.cwd(), process.argv)
    .then(() => console.log('[INFO] Successfully set all git hooks'))
    .catch(e => console.log('[ERROR], Was not able to set git hooks. Error: ' + e))
