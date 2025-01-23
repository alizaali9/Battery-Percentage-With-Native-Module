# Battery Percentage Fetcher

This React Native project fetches and displays the battery percentage of the user's device using a native module. The application leverages platform-specific code (Kotlin for Android) to retrieve the battery level, ensuring smooth integration with React Native. Note: iOS functionality has not been implemented or tested yet.

---

## Features
1. Fetches the current battery percentage of the device.
2. Displays the battery percentage in real-time.
3. Refresh button to manually update the battery level.
4. Android support only (iOS functionality not implemented).

---

## Prerequisites
- Node.js (v14 or above)
- React Native CLI or Expo
- Android Studio (for Android development)

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/alizaali9/Battery-Percentage-With-Native-Module
   cd Battery-Percentage-With-Native-Module
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Link the native module:
   - For React Native 0.60+, auto-linking should take care of this.
   - For older versions, link manually:
     ```bash
     react-native link
     ```

---

## Native Module Integration

### Android
1. Navigate to `android/app/src/main/java/com/<your_project>/`.
2. Create a file `BatteryModule.kt` and `BatteryPackage.kt`:
   ```kotlin
   <---- BatteryModule.kt ---->
   package com.<your_project>

   import android.content.Intent
   import android.content.IntentFilter
   import android.os.BatteryManager
   import com.facebook.react.bridge.Promise
   import com.facebook.react.bridge.ReactApplicationContext
   import com.facebook.react.bridge.ReactContextBaseJavaModule
   import com.facebook.react.bridge.ReactMethod

   class BatteryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val context: ReactApplicationContext = reactContext

    override fun getName(): String {
        return "BatteryModule"
    }

    @ReactMethod
    fun getBatteryLevel(promise: Promise) {
        try {
            val intentFilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
            val batteryStatus = context.registerReceiver(null, intentFilter)
            val level = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
            val scale = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1
            val batteryPct = (level / scale.toFloat()) * 100
            promise.resolve(batteryPct.toInt())
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }}
   }
   ```
   ---
   ```kotlin
   <---- BatteryPackage.kt ---->
   package com.<your_project>

   import com.facebook.react.ReactPackage
   import com.facebook.react.bridge.NativeModule
   import com.facebook.react.bridge.ReactApplicationContext
   import com.facebook.react.uimanager.ViewManager

   class BatteryPackage : ReactPackage {
       override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
           return listOf(BatteryModule(reactContext))
       }

       override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
           return emptyList()
       }
   }
   ```

4. Update `MainApplication.kt` to include the module.

```kotlin
   <---- MainApplication.kt ---->
   package com.<your_project>

   import android.app.Application
   import com.facebook.react.PackageList
   import com.facebook.react.ReactApplication
   import com.facebook.react.ReactHost
   import com.facebook.react.ReactNativeHost
   import com.facebook.react.ReactPackage
   import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
   import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
   import com.facebook.react.defaults.DefaultReactNativeHost
   import com.facebook.soloader.SoLoader
   import com.test.BatteryPackage

   class MainApplication : Application(), ReactApplication {

     override val reactNativeHost: ReactNativeHost =
         object : DefaultReactNativeHost(this) {
           override fun getPackages(): List<ReactPackage> =
               PackageList(this).packages.apply {
                 add(BatteryPackage())
                 // Packages that cannot be autolinked yet can be added manually here, for example:
                 // add(MyReactNativePackage())
               }

           override fun getJSMainModuleName(): String = "index"

           override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

           override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
           override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
         }

     override val reactHost: ReactHost
       get() = getDefaultReactHost(applicationContext, reactNativeHost)

     override fun onCreate() {
       super.onCreate()
       SoLoader.init(this, false)
       if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
         // If you opted-in for the New Architecture, we load the native entry point for this app.
         load()
       }
     }
   }
   ```

---

## Usage
1. Import the module in your React Native component:
   ```javascript
   import { NativeModules } from 'react-native';

   const { BatteryModule } = NativeModules;

   const fetchBatteryLevel = async () => {
       try {
           const batteryLevel = await BatteryModule.getBatteryLevel();
           console.log(`Battery Level: ${batteryLevel}%`);
       } catch (error) {
           console.error('Error fetching battery level:', error);
       }
   };

   export default function App() {
       useEffect(() => {
           fetchBatteryLevel();
       }, []);

       return (
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>Battery Level:</Text>
               <Button title="Refresh" onPress={fetchBatteryLevel} />
           </View>
       );
   }
   ```

---

## Testing
1. Run the app on Android:
   ```bash
   npx react-native run-android
   ```

---

## Deployment
Follow these steps to deploy your app on the Play Store:
1. Build a release version of the app:
   ```bash
   npx react-native run-android --variant=release
   ```
2. Sign the APK and upload it to the Play Store.

---

## Future Enhancements
1. Implement and test iOS functionality.
2. Add a widget for quick battery level monitoring.
3. Include battery health and charging status.
4. Optimize for better performance on low-end devices.

---

Feel free to reach out if you encounter any issues or have suggestions for improvement!

