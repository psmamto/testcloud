import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// In a real scenario, we would use a service account key from environment variables.
// For this demo/prototype, we will mock the connection or expect env vars to be present.
// If no service account is present, it might try to use Application Default Credentials.

const firebaseConfig = {
    // credential: cert(serviceAccount) // TODO: Add service account json path in .env
};

if (!getApps().length) {
    initializeApp(); // Uses ADC or default logic
}

export const db = getFirestore();
