import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useViewerToken = (hostIdentify: string) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [identify, setIdentify] = useState("");

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken();
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
  }, []);

  return { token, name, identify };
};
