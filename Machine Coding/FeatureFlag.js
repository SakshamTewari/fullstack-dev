const FeatureFlag = React.createContext({});

const FeatureFlagProvider = ({ children }) => {
  const [features, setFeatures] = React.useState({
    darkMode: true,
    chatEnabled: false,
  });

  return (
    <>
      <FeatureFlag.Provider value={{ features }}>
        {children}
      </FeatureFlag.Provider>
    </>
  );
};

const Example = () => {
  const { features } = React.useContext(FeatureFlag);
  console.log('Test feature');
  return (
    <>
      <h1>{features.darkMode ? 'in Dark mode' : 'in light mode'}</h1>
    </>
  );
};

const FeatureFlagComponent = () => {
  return (
    <FeatureFlagProvider>
      <Example />
    </FeatureFlagProvider>
  );
};

const featureFlag = ReactDOM.createRoot(
  document.getElementById('feature-flag'),
);
featureFlag.render(<FeatureFlagComponent />);
