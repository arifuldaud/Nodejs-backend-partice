
import { IncomingMessage } from "http";

export const bodyParser = (req: IncomingMessage): Promise<any> => {

    return new Promise((resolve, reject) => {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            if (!body.trim()) {
                return resolve({});
            }

            try {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody);
            } catch (error) {
                reject(error);
            }

        });

        req.on("error", (error) => {
            reject(error);
        });

    });
};
