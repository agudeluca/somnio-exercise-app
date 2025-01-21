# React Native Coding Challenge - Agustín De Luca 👋

This is a React Native project created using [Expo](https://expo.dev). It implements [Expo Router](https://expo.dev/router) for file-based navigation and demonstrates coding solutions for the given challenge.

---

<p align="center">
  <img src="assets/images/Simulator Screenshot - iPhone 15 - 2025-01-21 at 15.03.36.png" alt="Screenshot 1" width="20%" />
  <img src="assets/images/Simulator Screenshot - iPhone 15 - 2025-01-21 at 15.04.13.png" alt="Screenshot 2" width="20%" />
  <img src="assets/images/Simulator Screenshot - iPhone 15 - 2025-01-21 at 15.04.19.png" alt="Screenshot 3" width="20%" />
  <img src="assets/images/Simulator Screenshot - iPhone 15 - 2025-01-21 at 15.04.24.png" alt="Screenshot 4" width="20%" />
</p>
## 🚀 Get Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/agudeluca/somnio-exercise-app
cd somnio-exercise-app
```

### 2. Install Dependencies

Install the necessary packages using:

```bash
npm install
```

### 3. Start the Development Server

Run the project with:

```bash
npx expo start
```

In the output, you'll find options to open the app in:

- A [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- An [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- An [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a sandbox for running Expo projects

---

## 📁 Project Structure

```plaintext
components/       # Reusable components (e.g., Header, Buttons)
app /              # Application screens (e.g., Your Posts, Posts)
store/            # Zustand state management just for animation
assets/           # Static files (fonts, images, etc.)
hooks/            # functions and queries
services/         # endpoints
context/          # contexts to mostly static data
```

---

## 🛠️ Run Tests

This project uses **Jest** for testing. Run the tests with:

```bash
npm test
```

---

## 🖼️ Features

- **File-based Navigation**: Powered by [Expo Router](https://expo.dev/router)
- **State Management**: Using [Zustand](https://github.com/pmndrs/zustand) and [Tanstack Query](https://github.com/TanStack/query)
- **Animations**: Smooth header animations with [Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Theming**: Custom fonts and colors via a centralized `ThemeProvider`

---

## 📖 Learn More

- [Expo Documentation](https://docs.expo.dev/): Comprehensive guides and API documentation.
- [Learn Expo Tutorial](https://docs.expo.dev/tutorial/introduction/): Step-by-step tutorial for building universal apps.
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started): Learn about navigation patterns.

---

## 📬 Contact

Feel free to reach out to me:

- **Email**: agustin.ramon.deluca@gmail.com
- **LinkedIn**: [Agustin De Luca](https://linkedin.com/in/agudeluca11)

---

## 📜 License

This project is licensed under the MIT License.


## TODO

- add swipe animation
- add theme support
