import { useState } from "react";
import { useFetch } from "./hooks/UseFetch";
import BigModal from "./BigModal";

function Navbar() {
const [ip, setIp] = useState("192.212.174.101");
const { data } = useFetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_XmkMdGJKmQfmHyhFMaLWIdyFEmO18&ipAddress=${ip}`
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="navbar">
      <h2 className="ip-title">IP Address Tracker</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setIp(e.target.value)}
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button>
          <img className="right" src="/right.svg" alt="Right svg icon" />
        </button>
      </form>
      <div className="hidden">
        <BigModal {...data}/>
      </div>
    </div>
  );
}

export default Navbar;
