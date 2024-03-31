import { useEffect, useState } from "react";
import "./App.css";

const arr = [
  "https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqvFufO2QwmvFIZZMtyPS7BQ0gOyHSfwg3ff.9b5zLqiaGeLrBpU8EvQbU02z3JPEqylu.v6chP.i94rCgRKbzoURAB5YYqcKvj2Qrw.2MKg9XeTpxbc6Z.tf9CiVWb6ZQU5_axc85BAb943RinYpyCfeNra.yrmpJojtZvz3hcvM-&h=576",
  "https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqc332hb14yywUFlNuLZMnGvpSytKH3NoDNnq3dlSHoZFvqfTPTzZ2Lh.bOCZD4tTsoJyT6dQhzxTORyviqNsHyo5QnqGstfXSnyXmdgvCY9c-&h=576",
  "https://images-eds-ssl.xboxlive.com/image?url=w5xFvB2JQY3nPgHSW13QQjeIjj.ADgKg7d02rTQVV.9UX4eu_c7Ngwq1Alh7tw_nd2T0xRg.llNOfmyWOdn5ubAJFYMClG735abZFYYwrQQ-&h=576",
  "https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqJNLqM.aLQbqXr1G1pOE26Vs4kYKFELdfIi02pI.XYzYVJXB6hT0yvAWUGgcA1pKD07V2lC8kuiZ0WWXXoK8JInCfXkvir..YzUQCD2eo4Uk9fKitpn0yOjJ8jdVTP4hf9WgjWm3F5FON45a5KSkE5w--&h=576",
  "https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqD.dnhEvfs.USON4mQGJJzyolNLm1Npjjh7eTRW03h4mHBb96ZC0cKA6hf1FwBQ0jl80Xlu918dD.HuXd.XXuJ0gDO4jkrK1ySTzfOcaJH8gj8vLSe5JNzmvpvTCXBuB5dL0F.v_EFcJ1xRVEpzKWlA--&h=576",
  "https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqJnYBF3FTBg_b8y7KAg6mXfY.REGZPXKuW2hjMB8TA_KfAgqStmIcR.9IGts_m_4SbxwQnm2sQJ1mnPX2vvoqLZDJRldWbKgGuYrGYU8OpnOP1MhWGfCIpBXnDaCVZUBC9uKjYPfkIX.LQf.h9xSUtg--&h=576",
  "https://images-eds-ssl.xboxlive.com/image?url=qitYpaWI4rA4q5qG2AjZyppiNRjTCv4tLDfYlg.uMBcee9EnGDGvvZ7eC.FuUUY7hq4TusVuO3dyKUCR571hKsBfJ.ZC.AB8Aul4ywH9VaoGNIXWZLVd.Z4K6c5tAN1B&h=576",
];
function App() {
  const [counter, setCounter] = useState(0);

  const handle = () => {
    setCounter((c) => (c + 1) % arr.length);
  };
  const check = (idx) => {
    if (counter + 1 === idx) {
      return 20 + idx * 39.8;
    }
    return idx * 39.7;
  };

  useEffect(() => {
    const id = setInterval(handle, 3000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="layout-container">
      <div style={{ width: "100%" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "441px",
            width: "65vw",
            margin: "auto",
          }}
          className="alert"
        >
          <div
            style={{
              transition: "2s",
              width: "100%",
              transform: `translateX(-${counter * 39.7}%)`,
            }}
          >
            {arr.map((a, i) => (
              <div
                key={a}
                style={{
                  transition: "left 1s ease",
                  position: "absolute",
                  left: `${check(i)}%`,
                }}
              >
                <img
                  part="img"
                  alt=""
                  loading="lazy"
                  style={{ transition: "width 2s ease" }}
                  src={a}
                  className={`opacity-1 bg-img list ${
                    counter === i && "first"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
