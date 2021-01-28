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

  function redirectToWebsite(url) {
    window.location = url;
  }

  return (
    <div className="urls-list">
      <div key={id} className="urls-list-item">
        <div className="item-left-side">
          <a
            href={shortenedUrl}
            onClick={() => redirectToWebsite(shortenedUrl)}
            className="default-url"
          >
            {defaultUrl.substring(0, 250)}
          </a>
        </div>
        <div className="item-right-side">
          <a
            href={shortenedUrl}
            onClick={() => redirectToWebsite(shortenedUrl)}
            className="shortened-url"
          >
            {shortenedUrl}
          </a>
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
