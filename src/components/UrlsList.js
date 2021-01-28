import React, { useState } from "react";
import "../styles/Shortener.css";

function UrlsList({ defaultUrl, shortenedUrl, id }) {
  const [copied, setCopied] = useState(false);

  const copyToClipBoard = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      setCopied(false);
    }
  };

  // function redirectToWebsite(url) {
  //   window.location = url;
  // }

  return (
    <div className="urls-list">
      <div key={id} className="urls-list-item">
        <div className="item-left-side"></div>
        <div className="item-right-side">
          <button
            onClick={() => copyToClipBoard(shortenedUrl)}
            id="button"
            className={`shortened-button hover-effective ${copied && "copied"}`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UrlsList;
