import axios from "axios";

export async function getOldbrews (isLogIn, userEmail ) {
    const serverUrl = "http://localhost:8080/getOldbrews";
    
    if (isLogIn) {
        try {
          const response = await axios.get(serverUrl, {
            params: {
              email: userEmail,
            },
          });
          console.log(response.data)
          return response.data
        } catch (error) {
          console.log(error);
          throw error
        }
    } else return null;
}