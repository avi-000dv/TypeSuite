import * as SoapTypes from "../soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";

const mappingsName = "com_netsuite_webservices_transactions_bank_2019_2";

export class CheckItemList extends SoapTypes.Base {
  item?: CheckItem[];
  replaceAll?: boolean;
  constructor(props: CheckItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class DepositCashBack extends SoapTypes.Base {
  amount?: number;
  account?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
  constructor(props: DepositCashBack) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.amount = props.amount;
    this.account = props.account;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.memo = props.memo;
  }
}

export class CheckExpenseList extends SoapTypes.Base {
  expense?: CheckExpense[];
  replaceAll?: boolean;
  constructor(props: CheckExpenseList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export class DepositPaymentList extends SoapTypes.Base {
  depositPayment?: DepositPayment[];
  replaceAll?: boolean;
  constructor(props: DepositPaymentList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.depositPayment = props.depositPayment;
    this.replaceAll = props.replaceAll;
  }
}

export class DepositPayment extends SoapTypes.Base {
  deposit?: boolean;
  id?: number;
  docDate?: SoapTypes.Dateish;
  type?: string;
  docNumber?: string;
  memo?: string;
  paymentMethod?: PlatformCore.RecordRef;
  refNum?: string;
  entity?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  transactionAmount?: number;
  paymentAmount?: number;
  lineId?: number;
  constructor(props: DepositPayment) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.deposit = props.deposit;
    this.id = props.id;
    this.docDate = props.docDate;
    this.type = props.type;
    this.docNumber = props.docNumber;
    this.memo = props.memo;
    this.paymentMethod = props.paymentMethod;
    this.refNum = props.refNum;
    this.entity = props.entity;
    this.currency = props.currency;
    this.transactionAmount = props.transactionAmount;
    this.paymentAmount = props.paymentAmount;
    this.lineId = props.lineId;
  }
}

export class CheckItem extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  binNumbers?: string;
  serialNumbers?: string;
  expirationDate?: SoapTypes.Dateish;
  rate?: string;
  taxCode?: PlatformCore.RecordRef;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  taxRate1?: number;
  taxRate2?: number;
  department?: PlatformCore.RecordRef;
  grossAmt?: number;
  clazz?: PlatformCore.RecordRef;
  tax1Amt?: number;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  landedCost?: PlatformCommon.LandedCost;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CheckItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.vendorName = props.vendorName;
    this.line = props.line;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.description = props.description;
    this.binNumbers = props.binNumbers;
    this.serialNumbers = props.serialNumbers;
    this.expirationDate = props.expirationDate;
    this.rate = props.rate;
    this.taxCode = props.taxCode;
    this.amount = props.amount;
    this.options = props.options;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.department = props.department;
    this.grossAmt = props.grossAmt;
    this.clazz = props.clazz;
    this.tax1Amt = props.tax1Amt;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.landedCost = props.landedCost;
    this.customFieldList = props.customFieldList;
  }
}

export class CheckLandedCostList extends SoapTypes.Base {
  landedCost?: PlatformCommon.LandedCostSummary[];
  replaceAll?: boolean;
  constructor(props: CheckLandedCostList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.landedCost = props.landedCost;
    this.replaceAll = props.replaceAll;
  }
}

export class DepositCashBackList extends SoapTypes.Base {
  depositCashBack?: DepositCashBack[];
  replaceAll?: boolean;
  constructor(props: DepositCashBackList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.depositCashBack = props.depositCashBack;
    this.replaceAll = props.replaceAll;
  }
}

export class CheckExpense extends SoapTypes.Base {
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  tax1Amt?: number;
  taxRate2?: number;
  grossAmt?: number;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CheckExpense) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.line = props.line;
    this.category = props.category;
    this.account = props.account;
    this.amount = props.amount;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.tax1Amt = props.tax1Amt;
    this.taxRate2 = props.taxRate2;
    this.grossAmt = props.grossAmt;
    this.customFieldList = props.customFieldList;
  }
}

export class Deposit extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  currencyName?: string;
  tranId?: string;
  account?: PlatformCore.RecordRef;
  total?: number;
  exchangeRate?: number;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  toBePrinted?: boolean;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  paymentList?: DepositPaymentList;
  otherList?: DepositOtherList;
  cashBackList?: DepositCashBackList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Deposit) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.currencyName = props.currencyName;
    this.tranId = props.tranId;
    this.account = props.account;
    this.total = props.total;
    this.exchangeRate = props.exchangeRate;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.toBePrinted = props.toBePrinted;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.paymentList = props.paymentList;
    this.otherList = props.otherList;
    this.cashBackList = props.cashBackList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class DepositOtherList extends SoapTypes.Base {
  depositOther?: DepositOther[];
  replaceAll?: boolean;
  constructor(props: DepositOtherList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.depositOther = props.depositOther;
    this.replaceAll = props.replaceAll;
  }
}

export class Check extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  status?: string;
  customForm?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  balance?: number;
  entity?: PlatformCore.RecordRef;
  address?: string;
  subsidiary?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  currency?: PlatformCore.RecordRef;
  voidJournal?: PlatformCore.RecordRef;
  exchangeRate?: number;
  toBePrinted?: boolean;
  tranId?: string;
  memo?: string;
  department?: PlatformCore.RecordRef;
  taxTotal?: number;
  clazz?: PlatformCore.RecordRef;
  tax2Total?: number;
  location?: PlatformCore.RecordRef;
  userTotal?: number;
  landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
  landedCostPerLine?: boolean;
  transactionNumber?: string;
  expenseList?: CheckExpenseList;
  itemList?: CheckItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  landedCostsList?: CheckLandedCostList;
  billPay?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Check) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.status = props.status;
    this.customForm = props.customForm;
    this.account = props.account;
    this.balance = props.balance;
    this.entity = props.entity;
    this.address = props.address;
    this.subsidiary = props.subsidiary;
    this.postingPeriod = props.postingPeriod;
    this.tranDate = props.tranDate;
    this.currency = props.currency;
    this.voidJournal = props.voidJournal;
    this.exchangeRate = props.exchangeRate;
    this.toBePrinted = props.toBePrinted;
    this.tranId = props.tranId;
    this.memo = props.memo;
    this.department = props.department;
    this.taxTotal = props.taxTotal;
    this.clazz = props.clazz;
    this.tax2Total = props.tax2Total;
    this.location = props.location;
    this.userTotal = props.userTotal;
    this.landedCostMethod = props.landedCostMethod;
    this.landedCostPerLine = props.landedCostPerLine;
    this.transactionNumber = props.transactionNumber;
    this.expenseList = props.expenseList;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.landedCostsList = props.landedCostsList;
    this.billPay = props.billPay;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class DepositOther extends SoapTypes.Base {
  entity?: PlatformCore.RecordRef;
  amount?: number;
  account?: PlatformCore.RecordRef;
  paymentMethod?: PlatformCore.RecordRef;
  refNum?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
  constructor(props: DepositOther) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.entity = props.entity;
    this.amount = props.amount;
    this.account = props.account;
    this.paymentMethod = props.paymentMethod;
    this.refNum = props.refNum;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.memo = props.memo;
  }
}
