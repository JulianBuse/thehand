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

const serve = command({
	name: "serve",
	args: {},
	handler: args => {
		console.log("service running...")
	}
})

const index = subcommands({
	name: "thehand",
	version: "0.0.1",
	description: "Service manager for the thehand server",
	cmds: {install, uninstall}
})


run(index, process.argv.slice(2))
