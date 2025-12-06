/*
    Tab Switcher
    - displays multiple tabs. Each tab displays corresponding content when selected
    - highlights the selected tab
*/

// Sample tab data
const tabs = [
  { id: 'home', label: 'Home', content: 'Welcome to the Home tab!' },
  { id: 'profile', label: 'Profile', content: 'This is your Profile.' },
  { id: 'settings', label: 'Settings', content: 'Adjust your Settings here.' },
];

const TabSwitcher = () => {
  const [active, setActive] = React.useState('home');

  return (
    <div className='tab-switcher'>
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className='tab-buttons'>
        {tabs.map((tab) => (
          <button
            className={active === tab.id ? 'active' : ''}
            key={tab.id}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className='tab-content'>
        {tabs.find((tab) => tab.id === active).content}
      </div>
    </div>
  );
};
