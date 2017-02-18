// Converts a Json object to urlencoded format
export function toUrlEncodedString(data: any) {
	let body = "";
	for (let key in data) {
		if (data.hasOwnProperty(key)) {
			if (body.length) body += "&";
			body += key + "=";
			body += encodeURIComponent(data[key]);
		}
	}
	return body;
}



