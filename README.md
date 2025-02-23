# Expo Linking.getInitialURL() Intermittently Returns Null

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where it sometimes returns `null` even when a deep link is successfully opened. This makes deep link handling unreliable.

## Reproducing the Issue

1. Clone this repository.
2. Run `npm install`.
3. Run the app on a physical device or emulator.
4. Open a deep link (e.g., `exp://your-expo-app-id.exponeapi.io`).
5. Observe that `Linking.getInitialURL()` sometimes returns `null` in the console.

## Solution

The solution involves using a more robust approach to handle the potential `null` return value. This solution uses a timeout and retry mechanism to increase reliability.  See the `bugSolution.js` file for the improved code.