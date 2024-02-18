import { api } from "./api";
import { TOKEN } from '@env';

export async function assistantHelp(value: string, measureUnit: string) {
  const prompt = `You are a assistant specialized in health. You'll receive a vital sign and will help the user checking any anomalies in the data received. Inform the user with 3 possible status: "Anomaly detected:", "Healthy:" or "Alert:". If "Anomaly detected:" or "Alert:" you'll inform the healthy range, what is possibly wrong and the kind of doctor they should go in 15 words max. If you receive a time measure, it's how much the user slept. If it's calories, it's how much was burned. This is the vital sign: ${value} ${measureUnit}`
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