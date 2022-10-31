#!/usr/bin/env node

import {command, run, subcommands} from 'cmd-ts'

const install = command({
	name: "install",
	args: {},
	handler: args => {
		console.log("install")
	}
})

const uninstall = command({
	name: "uninstall",
	args: {},
	handler: args => {
		console.log("uninstall")
	}
})

const cli = subcommands({
	name: "thehand",
	version: "0.0.1",
	description: "Service manager for the thehand server",
	cmds: {install, uninstall}
})


run(cli, process.argv.slice(2))
