```javascript
import * as Linking from 'expo-linking';

async function getInitialUrlWithRetry() {
  let url = null;
  for (let i = 0; i < 3; i++) {
    try {
      url = await Linking.getInitialURL();
      if (url) {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms before retrying
    } catch (error) {
      console.error('Error getting initial URL:', error);
    }
  }
  return url;
}

export default getInitialUrlWithRetry;
```