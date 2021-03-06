
export type SearchDateFieldOperator =
  "after" |
  "before" |
  "empty" |
  "notAfter" |
  "notBefore" |
  "notEmpty" |
  "notOn" |
  "notOnOrAfter" |
  "notOnOrBefore" |
  "notWithin" |
  "on" |
  "onOrAfter" |
  "onOrBefore" |
  "within";

export type SearchDate =
  "fiscalHalfBeforeLast" |
  "fiscalHalfBeforeLastToDate" |
  "fiscalQuarterBeforeLast" |
  "fiscalQuarterBeforeLastToDate" |
  "fiscalYearBeforeLast" |
  "fiscalYearBeforeLastToDate" |
  "fiveDaysAgo" |
  "fiveDaysFromNow" |
  "fourDaysAgo" |
  "fourDaysFromNow" |
  "fourWeeksStartingThisWeek" |
  "lastBusinessWeek" |
  "lastFiscalHalf" |
  "lastFiscalHalfOneFiscalYearAgo" |
  "lastFiscalHalfToDate" |
  "lastFiscalQuarter" |
  "lastFiscalQuarterOneFiscalYearAgo" |
  "lastFiscalQuarterToDate" |
  "lastFiscalQuarterTwoFiscalYearsAgo" |
  "lastFiscalYear" |
  "lastFiscalYearToDate" |
  "lastMonth" |
  "lastMonthOneFiscalQuarterAgo" |
  "lastMonthOneFiscalYearAgo" |
  "lastMonthToDate" |
  "lastMonthTwoFiscalQuartersAgo" |
  "lastMonthTwoFiscalYearsAgo" |
  "lastRollingHalf" |
  "lastRollingQuarter" |
  "lastRollingYear" |
  "lastWeek" |
  "lastWeekToDate" |
  "monthAfterNext" |
  "monthAfterNextToDate" |
  "monthBeforeLast" |
  "monthBeforeLastToDate" |
  "nextBusinessWeek" |
  "nextFiscalHalf" |
  "nextFiscalQuarter" |
  "nextFiscalYear" |
  "nextFourWeeks" |
  "nextMonth" |
  "nextOneHalf" |
  "nextOneMonth" |
  "nextOneQuarter" |
  "nextOneWeek" |
  "nextOneYear" |
  "nextWeek" |
  "ninetyDaysAgo" |
  "ninetyDaysFromNow" |
  "oneYearBeforeLast" |
  "previousFiscalQuartersLastFiscalYear" |
  "previousFiscalQuartersThisFiscalYear" |
  "previousMonthsLastFiscalHalf" |
  "previousMonthsLastFiscalQuarter" |
  "previousMonthsLastFiscalYear" |
  "previousMonthsSameFiscalHalfLastFiscalYear" |
  "previousMonthsSameFiscalQuarterLastFiscalYear" |
  "previousMonthsThisFiscalHalf" |
  "previousMonthsThisFiscalQuarter" |
  "previousMonthsThisFiscalYear" |
  "previousOneDay" |
  "previousOneHalf" |
  "previousOneMonth" |
  "previousOneQuarter" |
  "previousOneWeek" |
  "previousOneYear" |
  "previousRollingHalf" |
  "previousRollingQuarter" |
  "previousRollingYear" |
  "sameDayFiscalQuarterBeforeLast" |
  "sameDayFiscalYearBeforeLast" |
  "sameDayLastFiscalQuarter" |
  "sameDayLastFiscalYear" |
  "sameDayLastMonth" |
  "sameDayLastWeek" |
  "sameDayMonthBeforeLast" |
  "sameDayWeekBeforeLast" |
  "sameFiscalHalfLastFiscalYear" |
  "sameFiscalHalfLastFiscalYearToDate" |
  "sameFiscalQuarterFiscalYearBeforeLast" |
  "sameFiscalQuarterLastFiscalYear" |
  "sameFiscalQuarterLastFiscalYearToDate" |
  "sameMonthFiscalQuarterBeforeLast" |
  "sameMonthFiscalYearBeforeLast" |
  "sameMonthLastFiscalQuarter" |
  "sameMonthLastFiscalQuarterToDate" |
  "sameMonthLastFiscalYear" |
  "sameMonthLastFiscalYearToDate" |
  "sameWeekFiscalYearBeforeLast" |
  "sameWeekLastFiscalYear" |
  "sixtyDaysAgo" |
  "sixtyDaysFromNow" |
  "startOfFiscalHalfBeforeLast" |
  "startOfFiscalQuarterBeforeLast" |
  "startOfFiscalYearBeforeLast" |
  "startOfLastBusinessWeek" |
  "startOfLastFiscalHalf" |
  "startOfLastFiscalHalfOneFiscalYearAgo" |
  "startOfLastFiscalQuarter" |
  "startOfLastFiscalQuarterOneFiscalYearAgo" |
  "startOfLastFiscalYear" |
  "startOfLastMonth" |
  "startOfLastMonthOneFiscalQuarterAgo" |
  "startOfLastMonthOneFiscalYearAgo" |
  "startOfLastRollingHalf" |
  "startOfLastRollingQuarter" |
  "startOfLastRollingYear" |
  "startOfLastWeek" |
  "startOfMonthBeforeLast" |
  "startOfNextBusinessWeek" |
  "startOfNextFiscalHalf" |
  "startOfNextFiscalQuarter" |
  "startOfNextFiscalYear" |
  "startOfNextMonth" |
  "startOfNextWeek" |
  "startOfPreviousRollingHalf" |
  "startOfPreviousRollingQuarter" |
  "startOfPreviousRollingYear" |
  "startOfSameFiscalHalfLastFiscalYear" |
  "startOfSameFiscalQuarterLastFiscalYear" |
  "startOfSameMonthLastFiscalQuarter" |
  "startOfSameMonthLastFiscalYear" |
  "startOfThisBusinessWeek" |
  "startOfThisFiscalHalf" |
  "startOfThisFiscalQuarter" |
  "startOfThisFiscalYear" |
  "startOfThisMonth" |
  "startOfThisWeek" |
  "startOfThisYear" |
  "startOfWeekBeforeLast" |
  "tenDaysAgo" |
  "tenDaysFromNow" |
  "thirtyDaysAgo" |
  "thirtyDaysFromNow" |
  "thisBusinessWeek" |
  "thisFiscalHalf" |
  "thisFiscalHalfToDate" |
  "thisFiscalQuarter" |
  "thisFiscalQuarterToDate" |
  "thisFiscalYear" |
  "thisFiscalYearToDate" |
  "thisMonth" |
  "thisMonthToDate" |
  "thisRollingHalf" |
  "thisRollingQuarter" |
  "thisRollingYear" |
  "thisWeek" |
  "thisWeekToDate" |
  "thisYear" |
  "threeDaysAgo" |
  "threeDaysFromNow" |
  "threeFiscalQuartersAgo" |
  "threeFiscalQuartersAgoToDate" |
  "threeFiscalYearsAgo" |
  "threeFiscalYearsAgoToDate" |
  "threeMonthsAgo" |
  "threeMonthsAgoToDate" |
  "today" |
  "tomorrow" |
  "twoDaysAgo" |
  "twoDaysFromNow" |
  "weekAfterNext" |
  "weekAfterNextToDate" |
  "weekBeforeLast" |
  "weekBeforeLastToDate" |
  "yesterday";

export type DeletedRecordType =
  "advInterCompanyJournalEntry" |
  "assemblyBuild" |
  "assemblyItem" |
  "assemblyUnbuild" |
  "billingSchedule" |
  "bin" |
  "binTransfer" |
  "binWorksheet" |
  "bom" |
  "bomRevision" |
  "calendarEvent" |
  "campaign" |
  "cashRefund" |
  "cashSale" |
  "charge" |
  "check" |
  "contact" |
  "contactCategory" |
  "costCategory" |
  "couponCode" |
  "creditMemo" |
  "currencyRate" |
  "customPurchase" |
  "customRecord" |
  "customSale" |
  "customTransaction" |
  "customer" |
  "customerCategory" |
  "customerMessage" |
  "customerDeposit" |
  "customerPayment" |
  "customerRefund" |
  "customerStatus" |
  "customerSubsidiaryRelationship" |
  "deposit" |
  "depositApplication" |
  "descriptionItem" |
  "discountItem" |
  "downloadItem" |
  "employee" |
  "estimate" |
  "expenseReport" |
  "file" |
  "folder" |
  "giftCertificateItem" |
  "globalAccountMapping" |
  "interCompanyJournalEntry" |
  "interCompanyTransferOrder" |
  "inventoryAdjustment" |
  "inventoryCostRevaluation" |
  "inventoryItem" |
  "inventoryNumber" |
  "inventoryTransfer" |
  "invoice" |
  "issue" |
  "itemAccountMapping" |
  "itemDemandPlan" |
  "itemFulfillment" |
  "itemSupplyPlan" |
  "itemGroup" |
  "itemReceipt" |
  "itemRevision" |
  "job" |
  "jobStatus" |
  "journalEntry" |
  "kitItem" |
  "lotNumberedAssemblyItem" |
  "lotNumberedInventoryItem" |
  "markupItem" |
  "message" |
  "manufacturingCostTemplate" |
  "manufacturingOperationTask" |
  "manufacturingRouting" |
  "merchandiseHierarchyNode" |
  "nexus" |
  "nonInventoryPurchaseItem" |
  "nonInventoryResaleItem" |
  "nonInventorySaleItem" |
  "note" |
  "noteType" |
  "opportunity" |
  "otherChargePurchaseItem" |
  "otherChargeResaleItem" |
  "otherChargeSaleItem" |
  "otherNameCategory" |
  "partner" |
  "paycheck" |
  "paymentItem" |
  "paymentMethod" |
  "payrollItem" |
  "periodEndJournal" |
  "phoneCall" |
  "priceLevel" |
  "pricingGroup" |
  "projectTask" |
  "promotionCode" |
  "purchaseOrder" |
  "purchaseRequisition" |
  "resourceAllocation" |
  "returnAuthorization" |
  "salesOrder" |
  "salesTaxItem" |
  "serializedAssemblyItem" |
  "serializedInventoryItem" |
  "servicePurchaseItem" |
  "serviceResaleItem" |
  "serviceSaleItem" |
  "statisticalJournalEntry" |
  "subtotalItem" |
  "supportCase" |
  "supportCaseIssue" |
  "supportCaseOrigin" |
  "supportCasePriority" |
  "supportCaseStatus" |
  "supportCaseType" |
  "task" |
  "term" |
  "timeSheet" |
  "transferOrder" |
  "usage" |
  "vendor" |
  "vendorBill" |
  "vendorCredit" |
  "vendorPayment" |
  "vendorReturnAuthorization" |
  "vendorSubsidiaryRelationship" |
  "winLossReason" |
  "workOrder" |
  "workOrderIssue" |
  "workOrderCompletion" |
  "workOrderClose";

export type AsyncStatusType =
  "failed" |
  "finishedWithErrors" |
  "pending" |
  "processing" |
  "finished" |
  "retry";

export type SearchRecordType =
  "account" |
  "accountingPeriod" |
  "accountingTransaction" |
  "billingAccount" |
  "billingSchedule" |
  "bin" |
  "bom" |
  "bomRevision" |
  "budget" |
  "calendarEvent" |
  "campaign" |
  "charge" |
  "classification" |
  "contact" |
  "contactCategory" |
  "contactRole" |
  "costCategory" |
  "consolidatedExchangeRate" |
  "couponCode" |
  "currencyRate" |
  "customer" |
  "customerCategory" |
  "customerMessage" |
  "customerStatus" |
  "customerSubsidiaryRelationship" |
  "customList" |
  "customRecord" |
  "department" |
  "employee" |
  "entityGroup" |
  "expenseCategory" |
  "fairValuePrice" |
  "file" |
  "folder" |
  "giftCertificate" |
  "globalAccountMapping" |
  "hcmJob" |
  "inboundShipment" |
  "inventoryNumber" |
  "item" |
  "itemAccountMapping" |
  "itemDemandPlan" |
  "itemRevision" |
  "itemSupplyPlan" |
  "issue" |
  "job" |
  "jobStatus" |
  "jobType" |
  "location" |
  "manufacturingCostTemplate" |
  "manufacturingOperationTask" |
  "manufacturingRouting" |
  "merchandiseHierarchyNode" |
  "message" |
  "nexus" |
  "note" |
  "noteType" |
  "opportunity" |
  "otherNameCategory" |
  "partner" |
  "partnerCategory" |
  "paycheck" |
  "paymentMethod" |
  "payrollItem" |
  "phoneCall" |
  "priceLevel" |
  "pricingGroup" |
  "projectTask" |
  "promotionCode" |
  "resourceAllocation" |
  "revRecSchedule" |
  "revRecTemplate" |
  "salesRole" |
  "salesTaxItem" |
  "solution" |
  "siteCategory" |
  "subsidiary" |
  "supportCase" |
  "task" |
  "taxGroup" |
  "taxType" |
  "term" |
  "timeBill" |
  "timeSheet" |
  "topic" |
  "transaction" |
  "unitsType" |
  "usage" |
  "vendor" |
  "vendorCategory" |
  "vendorSubsidiaryRelationship" |
  "winLossReason";

export type SearchStringFieldOperator =
  "contains" |
  "doesNotContain" |
  "doesNotStartWith" |
  "empty" |
  "hasKeywords" |
  "is" |
  "isNot" |
  "notEmpty" |
  "startsWith";

export type SearchLongFieldOperator =
  "between" |
  "empty" |
  "equalTo" |
  "greaterThan" |
  "greaterThanOrEqualTo" |
  "lessThan" |
  "lessThanOrEqualTo" |
  "notBetween" |
  "notEmpty" |
  "notEqualTo" |
  "notGreaterThan" |
  "notGreaterThanOrEqualTo" |
  "notLessThan" |
  "notLessThanOrEqualTo";

export type InitializeAuxRefType =
  "shippingGroup" |
  "arAccount" |
  "apAccount" |
  "itemFulfillment" |
  "tranType";

export type GetCustomizationType =
  "crmCustomField" |
  "customList" |
  "customRecordType" |
  "customSegment" |
  "customTransactionType" |
  "entityCustomField" |
  "itemCustomField" |
  "itemNumberCustomField" |
  "itemOptionCustomField" |
  "otherCustomField" |
  "transactionBodyCustomField" |
  "transactionColumnCustomField";

export type SignatureAlgorithm =
  "HMAC_SHA256" |
  "HMAC_SHA1";

export type RecordType =
  "account" |
  "accountingPeriod" |
  "advInterCompanyJournalEntry" |
  "assemblyBuild" |
  "assemblyUnbuild" |
  "assemblyItem" |
  "billingAccount" |
  "billingSchedule" |
  "bin" |
  "binTransfer" |
  "binWorksheet" |
  "bom" |
  "bomRevision" |
  "budget" |
  "budgetCategory" |
  "calendarEvent" |
  "campaign" |
  "campaignAudience" |
  "campaignCategory" |
  "campaignChannel" |
  "campaignFamily" |
  "campaignOffer" |
  "campaignResponse" |
  "campaignSearchEngine" |
  "campaignSubscription" |
  "campaignVertical" |
  "cashRefund" |
  "cashSale" |
  "check" |
  "charge" |
  "classification" |
  "consolidatedExchangeRate" |
  "contact" |
  "contactCategory" |
  "contactRole" |
  "costCategory" |
  "couponCode" |
  "creditMemo" |
  "crmCustomField" |
  "currency" |
  "currencyRate" |
  "customList" |
  "customPurchase" |
  "customRecord" |
  "customRecordCustomField" |
  "customRecordType" |
  "customSale" |
  "customSegment" |
  "customTransaction" |
  "customTransactionType" |
  "customer" |
  "customerCategory" |
  "customerDeposit" |
  "customerMessage" |
  "customerPayment" |
  "customerRefund" |
  "customerStatus" |
  "customerSubsidiaryRelationship" |
  "deposit" |
  "depositApplication" |
  "department" |
  "descriptionItem" |
  "discountItem" |
  "downloadItem" |
  "employee" |
  "entityCustomField" |
  "entityGroup" |
  "estimate" |
  "expenseCategory" |
  "expenseReport" |
  "fairValuePrice" |
  "file" |
  "folder" |
  "generalToken" |
  "giftCertificate" |
  "giftCertificateItem" |
  "globalAccountMapping" |
  "hcmJob" |
  "inboundShipment" |
  "interCompanyJournalEntry" |
  "interCompanyTransferOrder" |
  "inventoryAdjustment" |
  "inventoryCostRevaluation" |
  "inventoryItem" |
  "inventoryNumber" |
  "inventoryTransfer" |
  "invoice" |
  "itemAccountMapping" |
  "itemCustomField" |
  "itemDemandPlan" |
  "itemFulfillment" |
  "itemGroup" |
  "itemNumberCustomField" |
  "itemOptionCustomField" |
  "itemSupplyPlan" |
  "itemRevision" |
  "issue" |
  "job" |
  "jobStatus" |
  "jobType" |
  "itemReceipt" |
  "journalEntry" |
  "kitItem" |
  "leadSource" |
  "location" |
  "lotNumberedInventoryItem" |
  "lotNumberedAssemblyItem" |
  "markupItem" |
  "merchandiseHierarchyNode" |
  "message" |
  "manufacturingCostTemplate" |
  "manufacturingOperationTask" |
  "manufacturingRouting" |
  "nexus" |
  "nonInventoryPurchaseItem" |
  "nonInventoryResaleItem" |
  "nonInventorySaleItem" |
  "note" |
  "noteType" |
  "opportunity" |
  "otherChargePurchaseItem" |
  "otherChargeResaleItem" |
  "otherChargeSaleItem" |
  "otherCustomField" |
  "otherNameCategory" |
  "partner" |
  "partnerCategory" |
  "paycheck" |
  "paycheckJournal" |
  "paymentCard" |
  "paymentCardToken" |
  "paymentItem" |
  "paymentMethod" |
  "payrollItem" |
  "periodEndJournal" |
  "phoneCall" |
  "priceLevel" |
  "pricingGroup" |
  "projectTask" |
  "promotionCode" |
  "purchaseOrder" |
  "purchaseRequisition" |
  "resourceAllocation" |
  "returnAuthorization" |
  "revRecSchedule" |
  "revRecTemplate" |
  "salesOrder" |
  "salesRole" |
  "salesTaxItem" |
  "serializedInventoryItem" |
  "serializedAssemblyItem" |
  "servicePurchaseItem" |
  "serviceResaleItem" |
  "serviceSaleItem" |
  "solution" |
  "siteCategory" |
  "state" |
  "statisticalJournalEntry" |
  "subsidiary" |
  "subtotalItem" |
  "supportCase" |
  "supportCaseIssue" |
  "supportCaseOrigin" |
  "supportCasePriority" |
  "supportCaseStatus" |
  "supportCaseType" |
  "task" |
  "taxAcct" |
  "taxGroup" |
  "taxType" |
  "term" |
  "timeBill" |
  "timeSheet" |
  "topic" |
  "transferOrder" |
  "transactionBodyCustomField" |
  "transactionColumnCustomField" |
  "unitsType" |
  "usage" |
  "vendor" |
  "vendorCategory" |
  "vendorBill" |
  "vendorCredit" |
  "vendorPayment" |
  "vendorReturnAuthorization" |
  "vendorSubsidiaryRelationship" |
  "winLossReason" |
  "workOrder" |
  "workOrderIssue" |
  "workOrderCompletion" |
  "workOrderClose";

export type SearchDoubleFieldOperator =
  "between" |
  "empty" |
  "equalTo" |
  "greaterThan" |
  "greaterThanOrEqualTo" |
  "lessThan" |
  "lessThanOrEqualTo" |
  "notBetween" |
  "notEmpty" |
  "notEqualTo" |
  "notGreaterThan" |
  "notGreaterThanOrEqualTo" |
  "notLessThan" |
  "notLessThanOrEqualTo";

export type CalendarEventAttendeeResponse =
  "_accepted" |
  "_declined" |
  "_noResponse" |
  "_tentative";

export type SearchEnumMultiSelectFieldOperator =
  "anyOf" |
  "noneOf";

export type GetSelectValueFilterOperator =
  "contains" |
  "is" |
  "startsWith";

export type GetAllRecordType =
  "budgetCategory" |
  "campaignAudience" |
  "campaignCategory" |
  "campaignChannel" |
  "campaignFamily" |
  "campaignOffer" |
  "campaignSearchEngine" |
  "campaignSubscription" |
  "campaignVertical" |
  "currency" |
  "leadSource" |
  "state" |
  "supportCaseIssue" |
  "supportCaseOrigin" |
  "supportCasePriority" |
  "supportCaseStatus" |
  "supportCaseType" |
  "taxAcct";

export type InitializeRefType =
  "assemblyItem" |
  "assemblyBuild" |
  "cashSale" |
  "creditMemo" |
  "customer" |
  "customerDeposit" |
  "customPurchase" |
  "customSale" |
  "employee" |
  "estimate" |
  "interCompanyTransferOrder" |
  "invoice" |
  "location" |
  "lotNumberedAssemblyItem" |
  "opportunity" |
  "purchaseOrder" |
  "purchaseRequisition" |
  "returnAuthorization" |
  "salesOrder" |
  "serializedAssemblyItem" |
  "transferOrder" |
  "vendor" |
  "vendorBill" |
  "vendorReturnAuthorization" |
  "workOrder";

export type InitializeType =
  "assemblyBuild" |
  "assemblyUnbuild" |
  "binWorksheet" |
  "cashRefund" |
  "cashSale" |
  "creditMemo" |
  "customerPayment" |
  "customerRefund" |
  "customPurchase" |
  "customSale" |
  "depositApplication" |
  "estimate" |
  "invoice" |
  "itemFulfillment" |
  "itemReceipt" |
  "inventoryTransfer" |
  "purchaseOrder" |
  "returnAuthorization" |
  "salesOrder" |
  "vendorBill" |
  "vendorCredit" |
  "vendorReturnAuthorization" |
  "vendorPayment" |
  "workOrder" |
  "workOrderIssue" |
  "workOrderCompletion" |
  "workOrderClose";

export type SearchTextNumberFieldOperator =
  "between" |
  "empty" |
  "equalTo" |
  "greaterThan" |
  "greaterThanOrEqualTo" |
  "lessThan" |
  "lessThanOrEqualTo" |
  "notBetween" |
  "notEmpty" |
  "notEqualTo" |
  "notGreaterThan" |
  "notGreaterThanOrEqualTo" |
  "notLessThan" |
  "notLessThanOrEqualTo";

export type SearchMultiSelectFieldOperator =
  "anyOf" |
  "noneOf";

export type DurationUnit =
  "hour";
