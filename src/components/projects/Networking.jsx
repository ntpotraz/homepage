import Card from "../Card.jsx";

import network from "../../assets/dns.jpg";

const Networking = () => {
  return (
    <Card image={network} title="Custom DNS Resolver Simulation">
      <ul className="techStack">
        <li>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 32 32"><path fill="url(#python-a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#python-b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="python-a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8"/><stop offset="1" stopColor="#366994"/></linearGradient><linearGradient id="python-b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052"/><stop offset="1" stopColor="#FFC331"/></linearGradient></defs></svg>
          Python
        </li>
        <li>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"> <path style={{ InkscapeStroke: "none" }} d="M48.697 15.176h12.25v25.437h-12.25zm0 52.251h12.25v25.436h-12.25z" color="#000" fill="#130754" /> <path style={{ InkscapeStroke: "none" }} d="M48.697 48.037h12.25v12.001h-12.25z" color="#000" fill="#ffca00" /> <path style={{ InkscapeStroke: "none" }} d="M29.017 36.087h12.25v84.552h-12.25zM67.97 88.414h12.25v25.436H67.97zm0-52.297h12.25v25.437H67.97z" color="#000" fill="#130754" /> <path style={{ InkscapeStroke: "none" }} d="M67.97 68.983h12.25v12.001H67.97z" color="#000" fill="#e70488" /> <path style={{ InkscapeStroke: "none" }} d="M87.238 8.55h12.25v84.552h-12.25z" color="#000" fill="#130754" /></svg>
          Pandas
        </li>
        <li>
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect> <path d="M37 22.0001L34 25.0001L23 14.0001L26 11.0001C27.5 9.50002 33 7.00005 37 11.0001C41 15.0001 38.5 20.5 37 22.0001Z" fill="#2F88FF" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M42 6L37 11" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 25.9999L14 22.9999L25 33.9999L22 36.9999C20.5 38.5 15 41 11 36.9999C7 32.9999 9.5 27.5 11 25.9999Z" fill="#2F88FF" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M23 32L27 28" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 42L11 37" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 25L20 21" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          Socket API
        </li>
        <li>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/> </svg>
          Git
        </li>
      </ul>
      <ul>
        <li>
          Developed a functional <strong>DNS Client-Server ecosystem</strong> capable of resolving standard queries (A, AAAA, CNAME, NS) through a recursive lookup chain
        </li>
        <li>
          Engineered custom <strong>packet construction logic</strong>, utilizing bitwise operations to manually encode and decode DNS headers, flags, and transaction IDs without relying on high-level DNS libraries
        </li>
        <li>
          Implemented a <strong>recursive forwarding engine</strong> that checks local caches before routing specific domain requests (e.g., ViaSat vs. Qualcomm) to their respective authoritative servers
        </li>
        <li>
          Built a <strong>Time-To-Live (TTL) management system</strong> that automatically tracks record age and purges expired entries from the client and server caches to ensure data freshness
        </li>
        <li>
          <strong>Integrated Pandas for real-time console visualization</strong> of the Resource Record (RR) tables, aiding in the debugging of transaction states and cache contents
        </li>
      </ul>
      <div className="cardBtns">
        <a href="https://github.com/Saltair1/NetworkPythonProject/" rel="noreferrer" target="_blank">
          <svg width="30" height="30" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/> </svg>
          Source Code
        </a>
      </div>
    </Card>
  )
};

export default Networking;

