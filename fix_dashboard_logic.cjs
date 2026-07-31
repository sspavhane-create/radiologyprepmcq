const fs = require('fs');

let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

const hookLogic = `
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);

  useEffect(() => {
    setIsUnlocked(getIsPremiumUnlocked());
  }, []);

  const handleSuccessUnlock = () => {
    setIsUnlocked(true);
    setShowUnlockModal(false);
  };
`;

content = content.replace("return (", hookLogic + "\n  return (");

fs.writeFileSync('src/components/Dashboard.tsx', content, 'utf8');
