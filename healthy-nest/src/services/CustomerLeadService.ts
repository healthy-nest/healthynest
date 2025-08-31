// Create a customer lead in Strapi
import { API_BASE_URL } from './api';

export async function createCustomerLead({ FullName, Email, PhoneNumber }: { FullName: string; Email: string; PhoneNumber: string }) {
  const response = await fetch(`${API_BASE_URL}/api/customer-leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { FullName, Email, PhoneNumber } }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to create lead: ${response.status} - ${text}`);
  }
  return response.json();
}
