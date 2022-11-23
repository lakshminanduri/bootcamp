// TODO: Move to package in line with bank-specific application ID
package com.example.banking

import com.backbase.android.Backbase
import com.backbase.android.retail.journey.app.us.UsApplication
import com.backbase.android.utils.net.NetworkConnectorBuilder
import com.backbase.modelBank.retail.app.us.ModelBankClientDefinitions
import com.backbase.modelBank.retail.app.us.ModelBankUseCaseDefinitions
import com.google.gson.internal.LinkedTreeMap

/*
TODO: Replace with similar import statements with these ones to switch to `Universal`.

import com.backbase.modelBank.retail.app.universal.ModelBankClientDefinitions
import com.backbase.modelBank.retail.app.universal.ModelBankUseCaseDefinitions

*/

/**
 * The application class used by this app to define its various Journey configurations and other setup items.
 */
@Suppress("unused") // Used in AndroidManifest
class MyApplication : UsApplication() {

    override fun onCreate() {
        super.onCreate()
        enableSecurityControls()
    }

    override fun createSplashScreenConfiguration() = SplashScreenConfiguration()

    override fun createApplicationConfiguration() = AppConfiguration()

    override fun createUseCaseDefinitions() = ModelBankUseCaseDefinitions()

    override val additionalApplicationDependencies = ModelBankClientDefinitions()

    override fun onInitializeDependencies() {
        super.onInitializeDependencies()
        setSecurityViolationListener()
        /**
         * enable it if you are using the model bank ENV
         * setHttpHeaders()
         */
    }

    private fun setHttpHeaders() {
        // This header is required to sign in through identity, bypassing VPN
        val configHeader = Backbase.requireInstance().configuration.custom["default-http-headers"]
        val bypassHeader = tryCast(configHeader)
        NetworkConnectorBuilder.Configurations.appendHeaders(bypassHeader)
    }

    private fun tryCast(any: Any?): HashMap<String, String> {
        val hashMap: HashMap<String, String> = HashMap()
        try {
            val map = any as LinkedTreeMap<*, *>
            for ((k, v) in map) {
                val stringK = k as String
                val stringV = v as String
                hashMap[stringK] = stringV
            }
        } catch (e: Exception) {

        }

        return hashMap
    }
}
