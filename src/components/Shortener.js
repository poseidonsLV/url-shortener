import React, { useState, useRef } from "react";
import { BitlyClient } from "bitly-react";
import "../styles/Shortener.css";
import UrlsList from "./UrlsList";

function Shortener() {
  const [urlToShorten, setUrlToShorten] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [showErrMsg, setShowErrMsg] = useState(false);
  const [copied, setCopied] = useState(false);

  const bitly = new BitlyClient("5bc47c8e46f5d49107ba01cba80421448d22da09", {});

  const getShortenUrl = async (uri) => {
    let result;
    try {
      result = await bitly.shorten(uri);
    } catch (e) {
      throw e;
    }
    if (result?.url) {
      let newShortenedUrl = [
        ...shortenedUrls,
        {
          id: Math.floor(Math.random() * 1000),
          defaultUrl: urlToShorten,
          shortenedUrl: result?.url,
        },
      ];
      setShortenedUrls(newShortenedUrl);
    }
  };

  function createShortUrl(e) {
    if (urlToShorten.length < 8) {
      setShowErrMsg(true);
    } else {
      e.preventDefault();
      getShortenUrl(urlToShorten);
      setShowErrMsg(false);
      setUrlToShorten("");
    }
  }

  return (
    <div className="shortener-body">
      <div className="shortener">
        <form className="submit-form">
          <input
            class={showErrMsg && `input-err`}
            value={urlToShorten}
            onChange={(e) => setUrlToShorten(e.target.value)}
            placeholder="Shorten a link here"
          />
          <button
            onClick={createShortUrl}
            id="button"
            class="shortener-button hover-effective"
          >
            Shorten It!
          </button>
          {showErrMsg && <p class="form-error-message">Please add a link</p>}
        </form>
      </div>
      {shortenedUrls.map((item) => (
        <UrlsList
          id={item.id}
          defaultUrl={item.defaultUrl}
          shortenedUrl={item.shortenedUrl}
        />
      ))}
    </div>
  );
}

export default Shortener;
