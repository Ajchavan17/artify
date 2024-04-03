import axios, { AxiosResponse } from "axios";

// Define the type of userDetailsData
interface UserDetailsData {
  // Define the structure of userDetailsData
  // Modify this structure based on the actual structure of your UserDetails documents
  // Example:
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  gender?: string;
  userId?: string; // Add userId property to UserDetailsData
}

// Function to create UserDetails document
export async function createUserDetails(
  userId: string,
  userDetailsData: UserDetailsData
): Promise<UserDetailsData> {
  try {
    // If userId property doesn't exist in userDetailsData, add it
    if (!userDetailsData.userId) {
      userDetailsData.userId = userId;
    }

    // Make HTTP POST request to create UserDetails document
    const response: AxiosResponse<UserDetailsData> = await axios.post(
      "/payload/collections/userDetails/documents",
      userDetailsData
    );

    // Extract created UserDetails document from the response
    const userDetails: UserDetailsData = response.data;

    return userDetails;
  } catch (error) {
    // Handle errors, e.g., log or throw an error
    console.error("Error creating UserDetails document:", error);
    throw new Error("Failed to create UserDetails document");
  }
}
