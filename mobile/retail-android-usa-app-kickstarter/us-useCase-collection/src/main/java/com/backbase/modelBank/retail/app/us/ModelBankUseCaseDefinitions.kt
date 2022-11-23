package com.backbase.modelBank.retail.app.us

import android.app.Application
import android.graphics.Color
import com.backbase.android.client.contactmanagerclient2.api.ContactsApi
import com.backbase.android.client.gen2.addressautocompleteclient1.api.AddressAutocompleteApi
import com.backbase.android.client.gen2.arrangementclient2.api.ArrangementsApi
import com.backbase.android.client.gen2.arrangementclient2.api.ProductSummaryApi
import com.backbase.android.client.gen2.externalaccountaggregatorclient1.api.ExternalAccountAggregationClientApi
import com.backbase.android.client.gen2.loansclient1.api.LoansApi
import com.backbase.android.client.gen2.financialinstitutionmanagerclient1.api.FinancialInstitutionManagerClientApi
import com.backbase.android.client.paymentordera2aclient1.api.A2aClientApi
import com.backbase.android.client.paymentorderclient2.api.PaymentOrdersApi
import com.backbase.android.client.usermanagerclient2.api.UserProfileManagementApi
import com.backbase.android.identity.journey.authentication.identity_auth_client_1.IdentityAuthClient1AuthenticationUseCase
import com.backbase.android.identity.journey.userprofile.autocomplete.usecase.AddressAutocompleteUserProfileUseCase
import com.backbase.android.identity.journey.userprofile.usecase.UserManagerUserProfileUseCase
import com.backbase.android.retail.feature_filter.UserEntitlementFeatureFilterUseCase
import com.backbase.android.retail.feature_filter.entitlements.accesscontrol_client_2.AccessControlClient2EntitlementsUseCase
import com.backbase.android.retail.journey.accounts_and_transactions.AccountsAndTransactionsConfiguration
import com.backbase.android.retail.journey.accounts_and_transactions.banner.AccountsBannerResponse
import com.backbase.android.retail.journey.accounts_and_transactions.banner.AccountsBannerUseCase
import com.backbase.android.retail.journey.accounts_and_transactions.gen_arrangements_client_2.ArrangementsUseCaseImpl
import com.backbase.android.retail.journey.accounts_and_transactions.gen_arrangements_client_2.ProductSummaryUseCaseImpl
import com.backbase.android.retail.journey.accounts_and_transactions.gen_loans_client_1.LoanDetailsUseCaseImpl
import com.backbase.android.retail.journey.accounts_and_transactions.gen_transaction_client_2.TransactionsUseCaseImpl
import com.backbase.android.retail.journey.accountstatements.gen_accountstatements_client_2.AccountStatementsUseCaseImpl
import com.backbase.android.retail.journey.app.us.UsUseCaseDefinitions
import com.backbase.android.retail.journey.cardsmanagement.SimpleCallState
import com.backbase.android.retail.journey.cardsmanagement.gen_cards_client_2_travel_notice_use_case.TravelNoticeUseCaseImpl
import com.backbase.android.retail.journey.cardsmanagement.gen_cards_client_2_use_case.CardsUseCaseImpl
import com.backbase.android.retail.journey.cardsmanagement.gen_cards_client_2_use_case.ChangePinUseCaseImpl
import com.backbase.android.retail.journey.cardsmanagement.gen_usermanager_client_2_user_use_case.UserUseCaseImpl
import com.backbase.android.retail.journey.cardsmanagement.usecase.cardimages.CardImageRequestParams
import com.backbase.android.retail.journey.cardsmanagement.usecase.cardimages.CardImagesResponse
import com.backbase.android.retail.journey.cardsmanagement.usecase.cardimages.CardImagesUseCase
import com.backbase.android.retail.journey.contacts.contactmanager_client_2.GenContactManagerClient2ContactsUseCase
import com.backbase.android.retail.journey.financialinsights.gen_2_expense_analyzer_client_1_use_case.IncomeExpenseAnalyzerUseCaseImpl
import com.backbase.android.retail.journey.gen_2_arrangements_client_2_arrangements_use_case.PocketsArrangementsUseCaseImpl
import com.backbase.android.retail.journey.gen_external_account_aggregation_client.ExternalAccountAggregationUseCaseImpl
import com.backbase.android.retail.journey.gen_financial_institutions_1_use_case.FinancialInstitutionsUseCaseImpl
import com.backbase.android.retail.journey.gen_financial_institutions_1_use_case.UrlDrawableProvider
import com.backbase.android.retail.journey.gen_paymentorder_client_2_payment_service_use_case.PocketsPaymentUseCaseImpl
import com.backbase.android.retail.journey.gen_pockets_client_2_use_case.PocketsUseCaseImpl
import com.backbase.android.retail.journey.payments.gen_arrangements_client_2.ArrangementsClient2PaymentAccountsUseCase
import com.backbase.android.retail.journey.payments.gen_contactmanager_client_2.ContactManagerClient2PaymentContactsUseCase
import com.backbase.android.retail.journey.payments.gen_paymentorder_client_2.PaymentOrderClient2PaymentServiceUseCase
import com.backbase.android.retail.journey.payments.gen_paymentordera2a_client_1.PaymentOrderA2AClient1ServiceUseCase
import com.backbase.android.retail.journey.payments.upcoming.gen_paymentorder_client_2.PaymentOrderClient2UpcomingPaymentsServiceUseCase
import com.backbase.android.retail.journey.places.placemanager_client_2.GenPlaceManagerClient2PlacesUseCase
import com.backbase.android.retail.journey.rdc.gen_remotedepositcapturer_client_2.Rdc2ServiceUseCase
import com.backbase.android.retail.journey.rdh.gen2_remotedeposithistory_client2.RemoteDepositHistory2ServiceUseCase
import com.backbase.android.utils.net.response.Response
import com.backbase.deferredresources.DeferredColor
import com.backbase.deferredresources.drawable.DeferredColorDrawable
import com.backbase.engagementchannels.core.util.Result
import com.backbase.engagementchannels.gen_2_engagements_client_1_banners_usecase.Gen2EngagementsClient1BannersUseCase
import com.backbase.engagementchannels.gen_2_engagements_client_1_notification_settings_usecase.GenEngagementsClient1NotificationSettingsUseCase
import com.backbase.engagementchannels.gen_2_engagements_client_1_notification_settings_usecase.NoActionsAccountsNotificationSettingsUseCase
import com.backbase.engagementchannels.messages.gen_message_client_5.GenMessageClient5MessagesUseCase
import com.backbase.engagementchannels.notifications.NotificationSettingsAPI
import com.backbase.engagementchannels.notifications.NotificationsConfiguration
import com.backbase.engagementchannels.notifications.gen_action_client_2_gen_arrangement_client_2.GenActionClient2GenArrangementClient2NotificationSettingsUseCase
import com.backbase.engagementchannels.notifications.gen_notification_client_2.GenNotificationClient2NotificationsUseCase
import com.bumptech.glide.Glide
import java.util.Locale
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import com.backbase.android.retail.journey.gen_2_pockets_transactions_client_2_use_case.TransactionsUseCaseImpl as PocketsTransactionsUseCaseImpl
import com.backbase.android.retail.journey.rdh.gen2_remotedeposithistory_client2.model.DeviceInfo as RdhDeviceInfo
import com.backbase.engagementchannels.gen_2_engagements_client_1_banners_usecase.GetBannerRequest as GetEngagementBannerRequest

/**
 * Default value of [ModelBankUseCaseDefinitions] for all the ModelBank applications.
 *
 * - Please name the constructor parameters of the useCase because there are too many definitions of this class and
 * we use service locator pattern to inject dependencies. _/\_
 *
 * - Please maintain alphabetical order by `Definition` name. _/\_
 *
 */

@Suppress("FunctionName")
fun ModelBankUseCaseDefinitions(overrides: UsUseCaseDefinitions.Builder.() -> Unit = {}): UsUseCaseDefinitions {
    return DefaultUseCaseDefinitions().apply(overrides).build()
}

@Suppress("FunctionName", "RemoveExplicitTypeArguments")
internal fun DefaultUseCaseDefinitions() = UsUseCaseDefinitions.Builder().apply {

    accountsBannerUseCaseDefinition = {
        if (getOrNull<AccountsAndTransactionsConfiguration>()?.accountsScreen?.isBannersEnabled == true) {
            UsEngagementAccountsBannerUseCase(
                request = GetEngagementBannerRequest {
                    appName = "retail-mobile-app"
                    screenName = "index"
                    campaignSpaceName = "widget-bb-campaign-space-_-a498e5475d6e"
                    campaignSpaceDimensions = "300x250"
                    appLocale = Locale.getDefault()
                },
                default = Gen2EngagementsClient1BannersUseCase(get())
            )
        } else {
            null
        }
    }

    accountStatementsUseCaseDefinition = {
        AccountStatementsUseCaseImpl(
            client = get()
        )
    }

    accountsUseCaseDefinition = {
        ProductSummaryUseCaseImpl(
            productSummaryClient = get<ProductSummaryApi>()
        )
    }

    addressAutocompleteUseCaseDefinition = {
        AddressAutocompleteUserProfileUseCase(
            addressAutocompleteApi = get<AddressAutocompleteApi>()
        )
    }

    arrangementsUseCaseDefinition = {
        ArrangementsUseCaseImpl(
            client = get<ArrangementsApi>()
        )
    }

    authenticationUseCaseDefinition = {
        IdentityAuthClient1AuthenticationUseCase(
            application = get(),
            authClient = get()
        )
    }

    cardsCardImagesUseCaseDefinition = {
        object : CardImagesUseCase {
            override suspend fun fetchCardImage(requestParams: CardImageRequestParams): SimpleCallState.Success<CardImagesResponse> {
                return SimpleCallState.Success(CardImagesResponse {})
            }
        }
    }

    cardsUseCaseDefinition = {
        CardsUseCaseImpl(
            client = get()
        )
    }

    cardsUserManagerUseCaseDefinition = {
        UserUseCaseImpl(
            userManagerClient = get()
        )
    }

    cardsCardImagesUseCaseDefinition = {
        object : CardImagesUseCase {
            override suspend fun fetchCardImage(requestParams: CardImageRequestParams): SimpleCallState.Success<CardImagesResponse> {
                return SimpleCallState.Success(CardImagesResponse {
                    front = DeferredColorDrawable(DeferredColor.Constant(Color.DKGRAY))
                    back = DeferredColorDrawable(DeferredColor.Constant(Color.LTGRAY))
                })
            }
        }
    }

    cardsTravelNoticeUseCaseDefinition = {
        TravelNoticeUseCaseImpl(
            client = get()
        )
    }

    changePinUseCaseDefinition = {
        ChangePinUseCaseImpl(
            client = get()
        )
    }

    contactsUseCaseDefinition = {
        GenContactManagerClient2ContactsUseCase(
            contactsApi = get()
        )
    }

    entitlementsUseCaseDefinition = {
        AccessControlClient2EntitlementsUseCase(
            usersApi = get()
        )
    }

    externalPaymentAccountsServiceUseCaseDefinition = {
        PaymentOrderA2AClient1ServiceUseCase(
            a2aClientApi = get<A2aClientApi>()
        )
    }

    featureFilterUserEntitleUseCaseDefinition = {
        UserEntitlementFeatureFilterUseCase(
            entitlementsUseCase = get()
        )
    }

    financialInsightsUseCaseDefinition = {
        IncomeExpenseAnalyzerUseCaseImpl(
            client = get()
        )
    }

    financialInstitutionsUseCaseDefinition = {
        FinancialInstitutionsUseCaseImpl(
            client = get<FinancialInstitutionManagerClientApi>(), // keep the explicit types, otherwise it's an ugly internal cast that may fail in case of a new constructor overload
            urlDrawableProvider = getOrNull<UrlDrawableProvider>()
                ?: UrlDrawableProvider {
                    Glide.with(get<Application>().applicationContext).load(it).submit().get()
                },
        )
    }

    messagesUseCaseDefinition = {
        GenMessageClient5MessagesUseCase(
            messagecenterApi = get()
        )
    }

    notificationPreferencesUseCaseDefinition = {
        if (getOrNull<NotificationsConfiguration>()?.notificationSettingsAPI == NotificationSettingsAPI.ENGAGEMENTS)
            GenEngagementsClient1NotificationSettingsUseCase(preferencesClient = get())
        else
            null
    }

    notificationSettingsUseCaseDefinition = {
        if (getOrNull<NotificationsConfiguration>()?.notificationSettingsAPI == NotificationSettingsAPI.ENGAGEMENTS) {
            NoActionsAccountsNotificationSettingsUseCase(productSummaryApi = get())
        } else {
            GenActionClient2GenArrangementClient2NotificationSettingsUseCase(
                actionRecipesApi = get(),
                productSummaryApi = get()
            )
        }
    }

    notificationsUseCaseDefinition = {
        GenNotificationClient2NotificationsUseCase(
            notificationsApi = get()
        )
    }

    paymentAccountsUseCaseDefinition = {
        ArrangementsClient2PaymentAccountsUseCase(
            productSummaryApiV2 = get(),
            arrangementsApi = get<ArrangementsApi>()
        )
    }

    paymentUseCaseDefinition = {
        PaymentOrderClient2PaymentServiceUseCase(
            paymentOrdersApi = get<PaymentOrdersApi>()
        )
    }

    paymentContactsUseCaseDefinition = {
        ContactManagerClient2PaymentContactsUseCase(
            contactsApi = get<ContactsApi>()
        )
    }

    placesUseCaseDefinition = {
        GenPlaceManagerClient2PlacesUseCase(
            placesApi = get()
        )
    }

    pocketsArrangementsUseCaseDefinition = {
        PocketsArrangementsUseCaseImpl(
            client = get()
        )
    }

    pocketsPaymentsUseCaseDefinition = {
        PocketsPaymentUseCaseImpl(
            paymentOrdersApi = get()
        )
    }

    pocketsTransactionsUseCaseDefinition = {
        PocketsTransactionsUseCaseImpl(
            client = get()
        )
    }

    pocketsUseCaseDefinition = {
        PocketsUseCaseImpl(
            client = get()
        )
    }

    financialInsightsUseCaseDefinition = {
        IncomeExpenseAnalyzerUseCaseImpl(
            client = get()
        )
    }

    loanDetailsUseCaseDefinition = {
        LoanDetailsUseCaseImpl(
            loansApi = get<LoansApi>()
        )
    }

    externalAccountAggregationUseCaseDefinition = {
        ExternalAccountAggregationUseCaseImpl(
            client = get<ExternalAccountAggregationClientApi>()
        )
    }

    rdcServiceUseCaseDefinition = {
        Rdc2ServiceUseCase(
            deviceInfo = get(),
            rdcClientApiV2 = get(),
            productSummaryApiV2 = get()
        )
    }

    transactionsUseCaseDefinition = {
        TransactionsUseCaseImpl(
            client = get()
        )
    }

    upcomingPaymentsUseCaseDefinition = {
        PaymentOrderClient2UpcomingPaymentsServiceUseCase(
            paymentOrdersApi = get<PaymentOrdersApi>()
        )
    }

    userProfileUseCaseDefinition = {
        UserManagerUserProfileUseCase(
            userProfileManagementApi = get<UserProfileManagementApi>()
        )
    }

    rdhServiceUseCaseDefinition = {
        RemoteDepositHistory2ServiceUseCase(
            deviceInfo = get<RdhDeviceInfo>(),
            rdcClientApi = get()
        )
    }
}

private class UsEngagementAccountsBannerUseCase(
    private val request: GetEngagementBannerRequest,
    private val default: Gen2EngagementsClient1BannersUseCase,
) : AccountsBannerUseCase {

    override suspend fun getBanner(): AccountsBannerResponse {
        val result: Result<String, Response> = withContext(Dispatchers.IO) {
            default.getBanner(request)
        }

        return if (result is Result.OnSuccess) {
            AccountsBannerResponse {
                this.banner = result.response
                this.result = AccountsBannerUseCase.AccountsBannerResult.SUCCESS
            }
        } else {
            AccountsBannerResponse {
                this.result = AccountsBannerUseCase.AccountsBannerResult.FAILURE
            }
        }
    }
}
