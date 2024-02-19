import { api } from "./api";
import { TOKEN } from '@env';

export async function assistantHelp(value: string, measureUnit: string) {
  const prompt = `As a health assistant specialized in analyzing vital signs, you'll assess received data, flagging: "Anomaly->" for risky values, "Healthy->" for normal range, or "Alert->" for values slightly outside the norm. For "Anomaly->" or "Alert->", include healthy range, potential issues, and recommend a specialist in 15 words max. Hours denote sleep duration. Vital sign received: ${value} ${measureUnit}`;

  const response = await api.post('', {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.20,
    max_tokens: 500,
    top_p: 1,
  }, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  });

  return response.data.choices[0].message.content;
}