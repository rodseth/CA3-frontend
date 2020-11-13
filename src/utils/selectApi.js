import { URL } from "../base-components/Login";

export default function selectApi() {
    const [currentURL, setCurrentURL] = useState(
        URL === LOCAL_URL ? "Local API" : URL === REMOTE_URL ? "Remote API" : "none"
      );
    
      useEffect(() => {}, [currentURL]);
    
      const changeURL = (e) => {
        URL = e.target.value;
        if (URL === LOCAL_URL) {
          setCurrentURL("Local API");
        } else {
          setCurrentURL("Remote API");
        }
      };
}