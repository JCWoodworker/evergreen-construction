export async function submitToFormspree(
	formId: string,
	fields: Record<string, string>
) {
	const response = await fetch("/.netlify/functions/submit-form", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ formId, ...fields }),
	})

	if (!response.ok) {
		throw new Error("Submission failed")
	}
}
