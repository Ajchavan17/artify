import dotenv from "dotenv";
import path from "path";
import type { InitOptions } from "payload/config";
import payload, { Payload } from "payload";
import nodemailer from "nodemailer";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  secure: false,
  port: 587,
  requireTLS: true,
  auth: {
    user: "ajit@ajchavan.onmicrosoft.com",
    pass: process.env.OFFICE365_API_KEY,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SEECRET is missing");
  }

  const secret = process.env.PAYLOAD_SECRET;

  if (!secret) {
    throw new Error("PAYLOAD_SECRET is empty");
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      email: {
        transport: transporter,
        fromAddress: "ajit@ajchavan.onmicrosoft.com",
        fromName: "DigitalHippo",
      },
      secret: secret,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (e: unknown) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
};
