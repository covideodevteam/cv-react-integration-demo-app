import { useState } from "react";
import {
  CovideoEmbed,
  Feature,
  FeatureType,
  Environment,
  EnvironmentType,
  ShareData,
  logoutCovideo,
} from "react-covideo-embed";
import "./App.css";
function App() {
  const [token, setToken] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [env, setEnv] = useState<Environment | EnvironmentType>(
    Environment.PRODUCTION
  );
  const [hideFeatures, setHideFeatures] = useState<Feature[] | FeatureType[]>(
    []
  );
  const [rerender, setRerender] = useState(0);
  const [shareData, setShareData] = useState<ShareData>();
  const onInsert = (shareData: ShareData) => {
    console.log({ shareData });
    setShareData(shareData);
  };

  const logout = () => {
    logoutCovideo();
    setToken("");
    setRerender((prev) => prev + 1);
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <div>
          <label>Environment:</label>
          <label>
            <input
              type="radio"
              value={Environment.SANDBOX}
              checked={env === Environment.SANDBOX}
              onChange={() => setEnv(Environment.SANDBOX)}
            />
            Sandbox
          </label>
          <label>
            <input
              type="radio"
              value={Environment.PRODUCTION}
              checked={env === Environment.PRODUCTION}
              onChange={() => setEnv(Environment.PRODUCTION)}
            />
            Production
          </label>
        </div>
        <div>
          <label>Hide Features:</label>
          <div className="checkboxes-grid">
            {Object.values(Feature).map((feature) => (
              <label key={feature}>
                <input
                  type="checkbox"
                  value={feature}
                  checked={hideFeatures.includes(feature)}
                  onChange={() =>
                    setHideFeatures(
                      hideFeatures.includes(feature)
                        ? hideFeatures.filter((f) => f !== feature)
                        : [...hideFeatures, feature]
                    )
                  }
                />
                {feature}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label>Token:</label>
          <textarea
            placeholder="Paste Covideo JWT token here to simulate external authentication..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div>
          <label>ApiKey:</label>
          <textarea
            placeholder="Paste ApiKey provided by Covideo here..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            rows={1}
          />
        </div>
        <div>
          <button onClick={logout}>Logout</button>
        </div>
        <div>
          <label>Insert a video to generate a CRM message:</label>
          <div
            className="insert-video-container"
            dangerouslySetInnerHTML={{ __html: shareData?.html || "" }}
          ></div>
        </div>
      </div>
      <div className="covideo-container">
        <CovideoEmbed
          apikey={apiKey}
          token={token}
          env={env}
          hideFeatures={hideFeatures}
          key={rerender}
          onVideoInsert={onInsert}
        />
      </div>
    </div>
  );
}

export default App;
