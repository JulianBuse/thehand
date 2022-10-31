import 'zx/globals'

await $`npx rimraf dist artifacts assets`
await $`npx esbuild src/index.ts --bundle --platform=node --outfile=dist/index.js`
await $`npx pkg dist/index.js --targets node16-linux-x64,node16-win-x64,node16-macos-x64,node16-linux-arm64,node16-win-arm64,node16-macos-arm64 --out-path artifacts`

const files = await fs.readdir(path.join($.cwd || process.cwd(), "artifacts"))

await fs.ensureDir(path.join($.cwd || process.cwd(), "assets"))

files.forEach(async file => {
	const currentPath = path.join($.cwd || process.cwd(), "artifacts", file)
	const newPath = path.join($.cwd || process.cwd(), "assets", file.replace("index-", "thehand-"))
	await fs.move(currentPath, newPath)
})


