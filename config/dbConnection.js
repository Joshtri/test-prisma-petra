import pkg from "@prisma/client";
const { PrismaClient } = pkg;

import * as dotenv from "dotenv";

const prisma = new PrismaClient();
dotenv.config();

async function checkConnection() {
  try {
    // Execute a simple query to check the connection
    // Using $runCommandRaw for MongoDB compatibility
    await prisma.$runCommandRaw({ ping: 1 });
    console.log("Database connection successful");
    return true;
  } catch (error) {
    console.error("Database connection failed:", error.message);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

// Export the function to be used in other files
export default checkConnection;
