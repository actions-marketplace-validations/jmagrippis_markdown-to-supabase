import frontMatter from 'front-matter'

const deriveChecksum = (raw: string) => {
	const hasher = new Bun.CryptoHasher('sha256')
	hasher.update(raw)
	return hasher.digest('base64')
}

export const parseMdFile = async (path: string) => {
	const file = Bun.file(path)
	const raw = await file.text()

	const checksum = deriveChecksum(raw)

	const {attributes, body} = frontMatter(raw)

	return {content: body, frontMatter: attributes, checksum}
}
