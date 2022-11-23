package com.example.banking

import com.backbase.android.core.utils.BBLogger
import com.backbase.android.retail.journey.accounts_and_transactions.accounts.AccountsScreenConfiguration
import com.backbase.android.retail.journey.app.common.BackbaseSdkConfiguration
import com.backbase.android.retail.journey.app.common.splash.SplashScreenConfiguration
import com.backbase.android.retail.journey.app.us.UsApplicationConfiguration
import com.backbase.android.retail.journey.app.us.UsApplicationFeatureFlag
import com.backbase.android.retail.journey.app.us.UsJourneyConfigurations
import com.backbase.android.retail.journey.app.us.accounts_and_transactions.DefaultUsAccountsAndTransactionsConfiguration
import com.backbase.android.retail.journey.app.us.cards.DefaultUsCardsConfiguration
import com.backbase.android.retail.journey.app.us.more.DefaultUsMoreConfiguration
import com.backbase.android.retail.journey.cardsmanagement.details.CardDetailsScreenConfiguration
import com.backbase.android.retail.journey.places.PlacesConfiguration
import com.backbase.android.retail.journey.places.map.PlacesMapScreenConfiguration
import com.backbase.engagementchannels.notifications.NotificationSettingsAPI
import com.backbase.engagementchannels.notifications.NotificationsConfiguration
import java.time.Duration

@Suppress("FunctionName") // factory method
internal fun AppConfiguration() = UsApplicationConfiguration {
    backbaseSdkConfiguration = BackbaseSdkConfiguration {
        logLevel = if (BuildConfig.DEBUG)
            BBLogger.LogLevel.DEBUG
        else
            BBLogger.LogLevel.WARN
    }

    // TODO: Remove feature flag when user context selector journey is removed from apps. and also DepositMenuFeatureFlag is removed
    applicationFeatureFlags = listOf(
        UsApplicationFeatureFlag.WorkspacesJourneyFeatureFlag,
        UsApplicationFeatureFlag.DepositMenuFeatureFlag
    )

    journeyConfigurations = UsJourneyConfigurations {
        /**
         * change it to false for universal
         */
        val depositSectionMenuEnabled = true
        moreConfigurationDefinition = {
            DefaultUsMoreConfiguration(
                isNotificationSettingsEnabled = true,
                userRepository = getOrNull(),
                depositMenuEnabled = depositSectionMenuEnabled,
                localeSelectorConfiguration = getOrNull()
            )
        }
        placesConfigurationDefinition = { DemoAppPlacesConfiguration() }

        notificationsConfigurationDefinition = {
            NotificationsConfiguration {
                notificationSettingsAPI = NotificationSettingsAPI.ENGAGEMENTS
            }
        }

        accountsAndTransactionsConfigurationDefinition = {
            DefaultUsAccountsAndTransactionsConfiguration(scope = this){
                accountsScreen = AccountsScreenConfiguration {
                    isBannersEnabled = true
                }
            }
        }

        cardsConfigurationDefinition = {
            DefaultUsCardsConfiguration {
                cardDetailsScreen = CardDetailsScreenConfiguration.Builder().apply {
                    navigationIcon = null
                }
            }
        }
    }
}

@Suppress("FunctionName")
fun DemoAppPlacesConfiguration() = PlacesConfiguration {
    placesMapScreenConfiguration = PlacesMapScreenConfiguration { }
        .buildUpon()
        .apply {
            //TODO OPTIONAL: Pass your google maps api key(if you are using same account to register google maps and places Autocomplete search  API) to load results in Places Search screen. https://developers.google.com/maps/documentation/places/android-sdk/cloud-setup
            //   googlePlaceAPIKey = DeferredText.Resource(R.string.your_google_maps_api_key)
        }.build()
}

@Suppress("FunctionName") // factory method
internal fun SplashScreenConfiguration() = SplashScreenConfiguration {
    minimumDuration = if (BuildConfig.DEBUG)
        Duration.ZERO
    else
        Duration.ofSeconds(2)
}