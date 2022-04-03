import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/9ehk.jpg",
  });
  const [allMeme, setAllMeme] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => setAllMeme(data.data.memes))
    );
  }, []);

  console.log(allMeme);

  const getMemeImage = () => {
    // const memeArray = allMeme.data.memes;
    const radomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[radomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <>
      <main>
        <form className={`form ${meme.randomImage === "" ? "" : "mb-36"}`}>
          <input
            type=""
            text
            placeholder="First Meme Text"
            className="form-input"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Second Meme Text"
            className="form-input"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
          <button className="form-btn" onClick={getMemeImage} type="button">
            Get a new meme image 🖼️
          </button>
        </form>
        <div className="meme-image-part">
          <img src={meme.randomImage} alt="" className="memeImg" />
          <h2 className="meme-text meme-text-top">{meme.topText}</h2>
          <h2 className="meme-text meme-text-bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}
