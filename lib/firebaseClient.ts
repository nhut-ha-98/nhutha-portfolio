import "server-only";

import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getAccountServiceJson(): string {
  const raw =
    process.env.accountServiceJson ??
    process.env.ACCOUNT_SERVICE_JSON ??
    process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  if (!raw) {
    throw new Error(
      "Missing Firebase service account JSON. Set accountServiceJson (or ACCOUNT_SERVICE_JSON).",
    );
  }

  return raw;
}

function parseServiceAccount() {
  const value = getAccountServiceJson();

  try {
    const parsed = JSON.parse(value) as {
      project_id?: string;
      client_email?: string;
      private_key?: string;
    };

    return {
      projectId: parsed.project_id,
      clientEmail: parsed.client_email,
      privateKey: parsed.private_key?.replace(/\\n/g, "\n"),
    };
  } catch {
    throw new Error("Invalid accountServiceJson: expected valid JSON string.");
  }
}

function getFirebaseApp() {
  const account = parseServiceAccount();

  if (!account.projectId || !account.clientEmail || !account.privateKey) {
    throw new Error(
      "Invalid accountServiceJson: missing required service account fields.",
    );
  }

  if (getApps().length > 0) {
    return getApp();
  }

  return initializeApp({
    credential: cert({
      projectId: account.projectId,
      clientEmail: account.clientEmail,
      privateKey: account.privateKey,
    }),
  });
}

export function getDb() {
  return getFirestore(getFirebaseApp());
}
