//
// 
//

import UIKit
import RetailUSApp
import Backbase

@main
final class AppDelegate: RetailUSAppDelegate {
    override init() {
        super.init { (sdk, design) in
            // Use `sdk` as a customization point for Backbase SDK.
            // Use `design` as a customization point for design system.
            sdk.additionalSetup = { backbase in
                #if !DEBUG
                // Deny access to the application when device is compromised
                // Application will crash if device is compromised
                backbase.denyWhenJailbroken()
                backbase.denyWhenReverseEngineered()
                #endif
                                   
                // The URLCache may contain sensitive information and it is recommended to disable it.  
                URLCache.shared = URLCache(memoryCapacity: 0, diskCapacity: 0, diskPath: nil)
            }
            return { appConfig in
                // Use `appConfig` as a customization point for the app
                appConfig.featureFlags.useWorkspacesJourney = true
            }
        }
    }
}
