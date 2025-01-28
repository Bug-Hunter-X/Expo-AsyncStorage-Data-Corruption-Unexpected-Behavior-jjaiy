The solution involves using a more robust data handling approach, potentially leveraging libraries like MMKV or SQLite.  This example uses MMKV for improved performance and reliability.

```javascript
import * as MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

// ... other code ...

const storeData = async (key, value) => {
  try {
    await MMKV.setStringAsync(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

const getData = async (key) => {
  try {
    const value = await MMKV.getStringAsync(key);
    return JSON.parse(value);
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

// ... rest of your app logic using storeData and getData
```

This solution utilizes MMKV, which you'll need to install (`expo install react-native-mmkv-storage`).  Remember to handle potential errors appropriately.