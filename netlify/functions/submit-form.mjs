const FORMSPREE_REFERER = "https://www.evergreenconstructionri.com/"

export async function handler(event) {
	if (event.httpMethod !== "POST") {
		return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) }
	}

	try {
		const payload = JSON.parse(event.body ?? "{}")
		const { formId, ...fields } = payload

		if (!formId) {
			return {
				statusCode: 400,
				body: JSON.stringify({ error: "formId required" }),
			}
		}

		const response = await fetch(`https://formspree.io/f/${formId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Referer: FORMSPREE_REFERER,
			},
			body: JSON.stringify(fields),
		})

		return {
			statusCode: response.status,
			body: await response.text(),
			headers: { "Content-Type": "application/json" },
		}
	} catch {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Internal server error" }),
		}
	}
}
