import {expect, test} from 'bun:test'

import {run} from './main'

test('errors when no supabase url is provided', async () => {
	try {
		await run({
			docsRootPath: 'docs',
			supabaseUrl: '',
			supabaseServiceRoleKey: 'key',
		})
		throw new Error('method should have thrown')
	} catch (error) {
		expect((error as Error)?.message).toBe('invalid arguments')
	}
})
