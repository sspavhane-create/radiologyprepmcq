# Radiology Prep MCQ - Production Android App & Website

A comprehensive, interactive, and premium Radiology board exam preparation application built with React, Tailwind CSS, Capacitor, and Firebase. This project features full question banks, interactive quizzes, flashcards, bookmarking, and an automated production-ready Android CI/CD pipeline.

---

## 📱 APK Download

The latest stable, signed production APK is always available for direct download at:
[Download Radiology Prep MCQ Android App](https://github.com/sspavhane-create/radiologyprepmcq/releases/latest/download/Radiology_Prep_MCQ.apk)

---

## 🛠️ GitHub CI/CD Pipeline

This repository includes a fully automated production-ready Android build and release pipeline. Every push to the `main` branch triggers the build workflow which compiles, signs, and deploys the application.

### Workflow Process
1. **Checkout**: Pulls the latest code from the `main` branch.
2. **Environment Setup**: Standardizes on Node.js 22 and Java JDK 17.
3. **Gradle Configuration**: Uses `gradle/actions/setup-gradle` for automatic dependency caching.
4. **Web Build**: Builds the highly optimized React/Vite single page app.
5. **Capacitor Sync**: Synchronizes the web build with the Android native project.
6. **Signing verification**: Validates that all critical signing secrets are present.
7. **Build & Sign**: Compiles the release build and signs it with the provided keystore.
8. **Release Rollout**: Automatically deletes the previous "latest" release and tag, creates a fresh release tagged `latest`, and uploads the signed `Radiology_Prep_MCQ.apk`.

---

## 🔑 GitHub Secrets Configuration

To enable automated APK signing, you must configure the following **Repository Secrets** under `Settings > Secrets and variables > Actions` in your GitHub repository:

| Secret Name | Description | Example / Format |
|---|---|---|
| `ANDROID_KEYSTORE` | Base64-encoded Android release keystore file (`.jks` or `.keystore`) | Run: `base64 -w 0 your-keystore.jks` and copy-paste the output. |
| `KEYSTORE_PASSWORD` | Password of your keystore | `mykeystorepassword` |
| `KEY_ALIAS` | Alias name of your release key | `radiology-key-alias` |
| `KEY_PASSWORD` | Password of your release key | `mykeypassword` |

---

## 🚀 Local Development & Build

### Prerequisites
- Node.js (v20+)
- JDK 17
- Android Studio with Android SDK

### Local Manual Build Instructions
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Compile the Web App**:
   ```bash
   npm run build
   ```
3. **Sync with Android**:
   ```bash
   npx cap sync android
   ```
4. **Build Release APK (Unsigned)**:
   ```bash
   cd android
   ./gradlew assembleRelease
   ```
   The output APK will be generated at:
   `android/app/build/outputs/apk/release/app-release.apk`

---

## 💎 Features

- **Interactive Quizzes**: Multiple choice questions covering physics, chest, musculoskeletal, neuro, abdominal, and pediatric radiology.
- **Bookmarks & Custom Organizers**: Bookmark tough questions and view detailed explanations.
- **Flashcard View**: Study on-the-go with responsive swipeable cards.
- **Progress Tracking**: Real-time stats on quiz performance and streak counters.
- **Instant Updates**: Floating in-app prompt to download the latest Android application directly.
