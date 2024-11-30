import { Column, Entity, Index } from "typeorm";

@Index("shopurl", ["shopurl"], {})
@Entity("adminuser", { schema: "makeshop" })
export class Adminuser {
  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "password", nullable: true, length: 128 })
  password: string | null;

  @Column("varchar", { name: "shopname", nullable: true, length: 50 })
  shopname: string | null;

  @Column("char", {
    name: "freetype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  freetype: string | null;

  @Column("varchar", { name: "shoptitle", nullable: true, length: 100 })
  shoptitle: string | null;

  @Column("varchar", { name: "shopurl", nullable: true, length: 50 })
  shopurl: string | null;

  @Column("varchar", { name: "sslurl", nullable: true, length: 50 })
  sslurl: string | null;

  @Column("varchar", { name: "shopkeyword", nullable: true, length: 100 })
  shopkeyword: string | null;

  @Column("char", {
    name: "shoptype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  shoptype: string | null;

  @Column("char", {
    name: "member",
    nullable: true,
    length: 1,
    default: () => "'U'",
  })
  member: string | null;

  @Column("int", { name: "mini_price", nullable: true, default: () => "'0'" })
  miniPrice: number | null;

  @Column("int", { name: "reserve", nullable: true, default: () => "'0'" })
  reserve: number | null;

  @Column("enum", {
    name: "mobile_reserve",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mobileReserve: "" | "Y" | "N";

  @Column("char", {
    name: "useemoney",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  useemoney: string | null;

  @Column("int", { name: "reserveinit", nullable: true, default: () => "'0'" })
  reserveinit: number | null;

  @Column("int", { name: "mobile_reserveinit", default: () => "'0'" })
  mobileReserveinit: number;

  @Column("varchar", {
    name: "reserve_unit",
    length: 30,
    default: () => "'원'",
  })
  reserveUnit: string;

  @Column("char", {
    name: "card",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  card: string | null;

  @Column("float", {
    name: "card_percent",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  cardPercent: number | null;

  @Column("char", { name: "vat", length: 1, default: () => "'N'" })
  vat: string;

  @Column("enum", {
    name: "vat_set",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  vatSet: "" | "N" | "Y" | null;

  @Column("enum", {
    name: "vat_each",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  vatEach: "" | "N" | "Y" | null;

  @Column("varchar", { name: "tel", nullable: true, length: 100 })
  tel: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 150 })
  address: string | null;

  @Column("mediumtext", { name: "jiro", nullable: true })
  jiro: string | null;

  @Column("enum", {
    name: "jiro_ebank",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  jiroEbank: "" | "N" | "Y" | null;

  @Column("mediumtext", { name: "metatitle", nullable: true })
  metatitle: string | null;

  @Column("enum", {
    name: "nometa",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nometa: "" | "Y" | "N" | null;

  @Column("varchar", {
    name: "return1",
    nullable: true,
    length: 10,
    default: () => "'판매자'",
  })
  return1: string | null;

  @Column("varchar", {
    name: "return2",
    nullable: true,
    length: 10,
    default: () => "'소비자'",
  })
  return2: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 40 })
  email: string | null;

  @Column("enum", {
    name: "stock_type",
    nullable: true,
    enum: ["", "ORDER", "PAY"],
    default: () => "'ORDER'",
  })
  stockType: "" | "ORDER" | "PAY" | null;

  @Column("varchar", { name: "allat_id", nullable: true, length: 20 })
  allatId: string | null;

  @Column("char", { name: "allat_prefix", nullable: true, length: 3 })
  allatPrefix: string | null;

  @Column("varchar", { name: "ksnet_id", nullable: true, length: 10 })
  ksnetId: string | null;

  @Column("varchar", { name: "card_id", nullable: true, length: 20 })
  cardId: string | null;

  @Column("enum", {
    name: "card_id_use",
    nullable: true,
    enum: ["", "Y", "R", "N"],
    default: () => "'Y'",
  })
  cardIdUse: "" | "Y" | "R" | "N" | null;

  @Column("char", { name: "card_type", nullable: true, length: 2 })
  cardType: string | null;

  @Column("varchar", {
    name: "card_list",
    nullable: true,
    length: 5,
    default: () => "'NNNNN'",
  })
  cardList: string | null;

  @Column("enum", {
    name: "partnership_card",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  partnershipCard: "" | "Y" | "N";

  @Column("varchar", { name: "mobile_card_id", nullable: true, length: 30 })
  mobileCardId: string | null;

  @Column("char", { name: "mobile_card_type", nullable: true, length: 2 })
  mobileCardType: string | null;

  @Column("varchar", { name: "escrow_id", nullable: true, length: 100 })
  escrowId: string | null;

  @Column("varchar", { name: "ksbank_id", nullable: true, length: 20 })
  ksbankId: string | null;

  @Column("varchar", { name: "ksbank_jiro", nullable: true, length: 100 })
  ksbankJiro: string | null;

  @Column("enum", {
    name: "ksbank_resno",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ksbankResno: "" | "Y" | "N" | null;

  @Column("varchar", {
    name: "escrow_type",
    nullable: true,
    length: 100,
    default: () => "'cash=10'",
  })
  escrowType: string | null;

  @Column("varchar", { name: "kt_id", nullable: true, length: 15 })
  ktId: string | null;

  @Column("varchar", { name: "banktown_id", nullable: true, length: 43 })
  banktownId: string | null;

  @Column("enum", {
    name: "mobile_type",
    enum: ["", "NONE", "DA", "MO", "PL", "GX"],
    default: () => "'NONE'",
  })
  mobileType: "" | "NONE" | "DA" | "MO" | "PL" | "GX";

  @Column("varchar", { name: "mobile_id", nullable: true, length: 50 })
  mobileId: string | null;

  @Column("enum", {
    name: "mobile_id_use",
    nullable: true,
    enum: ["", "Y", "R", "N"],
    default: () => "'Y'",
  })
  mobileIdUse: "" | "Y" | "R" | "N" | null;

  @Column("varchar", { name: "mobile_phone_id", nullable: true, length: 50 })
  mobilePhoneId: string | null;

  @Column("varchar", { name: "simplepay_id", nullable: true, length: 200 })
  simplepayId: string | null;

  @Column("varchar", { name: "simplepay_secret", length: 200 })
  simplepaySecret: string;

  @Column("mediumtext", { name: "simplepay_key", nullable: true })
  simplepayKey: string | null;

  @Column("varchar", { name: "simplepay_use", nullable: true, length: 200 })
  simplepayUse: string | null;

  @Column("int", { name: "shopfree", nullable: true })
  shopfree: number | null;

  @Column("char", {
    name: "shopfreedir",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  shopfreedir: string | null;

  @Column("varchar", { name: "nv_kcp", nullable: true, length: 6 })
  nvKcp: string | null;

  @Column("char", {
    name: "agree",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agree: string | null;

  @Column("enum", {
    name: "usertype",
    nullable: true,
    enum: ["", "A", "B", "C"],
    default: () => "'A'",
  })
  usertype: "" | "A" | "B" | "C" | null;

  @Column("varchar", { name: "applicant", nullable: true, length: 50 })
  applicant: string | null;

  @Column("varchar", { name: "comname", nullable: true, length: 100 })
  comname: string | null;

  @Column("varchar", { name: "comnumber", nullable: true, length: 100 })
  comnumber: string | null;

  @Column("enum", {
    name: "fortype",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  fortype: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "checktype",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  checktype: "" | "Y" | "N" | null;

  @Column("varchar", { name: "app_resno", length: 13 })
  appResno: string;

  @Column("enum", {
    name: "app_auth_type",
    enum: ["", "NONE", "IPIN", "MOBILE"],
    default: () => "'NONE'",
  })
  appAuthType: "" | "NONE" | "IPIN" | "MOBILE";

  @Column("varchar", { name: "app_email", nullable: true, length: 40 })
  appEmail: string | null;

  @Column("varchar", { name: "app_tel", nullable: true, length: 20 })
  appTel: string | null;

  @Column("varchar", { name: "app_dept", nullable: true, length: 25 })
  appDept: string | null;

  @Column("varchar", { name: "app_post", length: 7 })
  appPost: string;

  @Column("varchar", { name: "app_addr", length: 255 })
  appAddr: string;

  @Column("varchar", { name: "company_name", nullable: true, length: 50 })
  companyName: string | null;

  @Column("varchar", { name: "company_num", nullable: true, length: 20 })
  companyNum: string | null;

  @Column("varchar", { name: "company_post", nullable: true, length: 6 })
  companyPost: string | null;

  @Column("varchar", { name: "company_owner", nullable: true, length: 30 })
  companyOwner: string | null;

  @Column("varchar", { name: "company_addr", nullable: true, length: 150 })
  companyAddr: string | null;

  @Column("varchar", { name: "company_biz", nullable: true, length: 50 })
  companyBiz: string | null;

  @Column("varchar", { name: "company_item", nullable: true, length: 50 })
  companyItem: string | null;

  @Column("varchar", { name: "privercy", nullable: true, length: 10 })
  privercy: string | null;

  @Column("varchar", { name: "privercy_email", nullable: true, length: 40 })
  privercyEmail: string | null;

  @Column("enum", {
    name: "template_type",
    nullable: true,
    enum: ["", "d1", "d2", "d3"],
    default: () => "'d2'",
  })
  templateType: "" | "d1" | "d2" | "d3" | null;

  @Column("enum", {
    name: "template_menu",
    nullable: true,
    enum: ["", "d1", "d2", "d3"],
    default: () => "'d2'",
  })
  templateMenu: "" | "d1" | "d2" | "d3" | null;

  @Column("enum", {
    name: "template_next_type",
    enum: ["", "NONE", "d1", "d2", "d3"],
    default: () => "'NONE'",
  })
  templateNextType: "" | "NONE" | "d1" | "d2" | "d3";

  @Column("enum", {
    name: "use_responsive",
    enum: ["Y", "N"],
    default: () => "'N'",
  })
  useResponsive: "Y" | "N";

  @Column("int", {
    name: "template_setid",
    unsigned: true,
    default: () => "'0'",
  })
  templateSetid: number;

  @Column("int", {
    name: "template_m_setid",
    unsigned: true,
    default: () => "'0'",
  })
  templateMSetid: number;

  @Column("int", {
    name: "powerpack_m_setid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  powerpackMSetid: number | null;

  @Column("int", {
    name: "template_rw_setid",
    unsigned: true,
    default: () => "'0'",
  })
  templateRwSetid: number;

  @Column("int", {
    name: "template_base_setid",
    unsigned: true,
    default: () => "'0'",
  })
  templateBaseSetid: number;

  @Column("int", {
    name: "template_m_base_setid",
    unsigned: true,
    default: () => "'0'",
  })
  templateMBaseSetid: number;

  @Column("int", {
    name: "template_rw_base_setid",
    unsigned: true,
    default: () => "'0'",
  })
  templateRwBaseSetid: number;

  @Column("int", {
    name: "design_id",
    nullable: true,
    default: () => "'10000'",
  })
  designId: number | null;

  @Column("varchar", {
    name: "menutype",
    nullable: true,
    length: 10,
    default: () => "'menu230'",
  })
  menutype: string | null;

  @Column("enum", {
    name: "menuwhich",
    nullable: true,
    enum: ["", "LEFT", "RIGHT"],
    default: () => "'LEFT'",
  })
  menuwhich: "" | "LEFT" | "RIGHT" | null;

  @Column("varchar", {
    name: "toptype",
    nullable: true,
    length: 10,
    default: () => "'top230'",
  })
  toptype: string | null;

  @Column("varchar", {
    name: "maintype",
    nullable: true,
    length: 10,
    default: () => "'main230'",
  })
  maintype: string | null;

  @Column("varchar", {
    name: "icontype",
    nullable: true,
    length: 10,
    default: () => "'230'",
  })
  icontype: string | null;

  @Column("varchar", {
    name: "titletype",
    nullable: true,
    length: 10,
    default: () => "'N'",
  })
  titletype: string | null;

  @Column("char", {
    name: "designtype",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  designtype: string | null;

  @Column("char", {
    name: "oneframetype",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  oneframetype: string | null;

  @Column("char", {
    name: "usecoupon",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usecoupon: string | null;

  @Column("char", {
    name: "aligntype",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  aligntype: string | null;

  @Column("char", {
    name: "royal",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  royal: string | null;

  @Column("char", {
    name: "deli",
    nullable: true,
    length: 1,
    default: () => "'T'",
  })
  deli: string | null;

  @Column("int", { name: "deli_price", nullable: true, default: () => "'0'" })
  deliPrice: number | null;

  @Column("int", { name: "deli_mini", nullable: true, default: () => "'0'" })
  deliMini: number | null;

  @Column("char", {
    name: "deli_product",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deliProduct: string | null;

  @Column("mediumint", {
    name: "default_weight",
    unsigned: true,
    default: () => "'1000'",
  })
  defaultWeight: number;

  @Column("varchar", {
    name: "default_volumn",
    length: 30,
    default: () => "'0|0|0|0'",
  })
  defaultVolumn: string;

  @Column("enum", {
    name: "ems_use",
    enum: ["", "NO", "EMS_AUTO", "EMS_HAND_KOR", "EMS_HAND_OVERSEAS"],
    default: () => "'NO'",
  })
  emsUse: "" | "NO" | "EMS_AUTO" | "EMS_HAND_KOR" | "EMS_HAND_OVERSEAS";

  @Column("tinyint", { name: "ems_discount", default: () => "'0'" })
  emsDiscount: number;

  @Column("enum", {
    name: "ems_discount_type",
    enum: ["", "sale", "add"],
    default: () => "'sale'",
  })
  emsDiscountType: "" | "sale" | "add";

  @Column("int", { name: "gap", nullable: true, default: () => "'1'" })
  gap: number | null;

  @Column("int", { name: "count", default: () => "'0'" })
  count: number;

  @Column("varchar", { name: "joindate", nullable: true, length: 12 })
  joindate: string | null;

  @Column("varchar", { name: "tempkey", nullable: true, length: 32 })
  tempkey: string | null;

  @Column("varchar", { name: "loginip", nullable: true, length: 15 })
  loginip: string | null;

  @Column("varchar", { name: "workdate", nullable: true, length: 14 })
  workdate: string | null;

  @Column("char", {
    name: "worktime",
    nullable: true,
    length: 2,
    default: () => "'0'",
  })
  worktime: string | null;

  @Column("varchar", { name: "email_server", nullable: true, length: 30 })
  emailServer: string | null;

  @Column("varchar", { name: "email_id", nullable: true, length: 50 })
  emailId: string | null;

  @Column("varchar", { name: "email_passwd", nullable: true, length: 255 })
  emailPasswd: string | null;

  @Column("char", {
    name: "board_open",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  boardOpen: string | null;

  @Column("varchar", { name: "databoard", nullable: true, length: 20 })
  databoard: string | null;

  @Column("varchar", { name: "databoardname", nullable: true, length: 50 })
  databoardname: string | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 8 })
  enddate: string | null;

  @Column("varchar", { name: "stop_enddate", nullable: true, length: 10 })
  stopEnddate: string | null;

  @Column("varchar", { name: "setdate", nullable: true, length: 12 })
  setdate: string | null;

  @Column("varchar", { name: "countdate", length: 8 })
  countdate: string;

  @Column("varchar", { name: "imagedate", nullable: true, length: 8 })
  imagedate: string | null;

  @Column("varchar", { name: "sftp", nullable: true, length: 10 })
  sftp: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("char", {
    name: "robots",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  robots: string | null;

  @Column("int", { name: "crmnumber", nullable: true })
  crmnumber: number | null;

  @Column("char", {
    name: "adult_type",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adultType: string | null;

  @Column("varchar", { name: "resno_name_id", nullable: true, length: 20 })
  resnoNameId: string | null;

  @Column("varchar", { name: "resno_name_pw", nullable: true, length: 20 })
  resnoNamePw: string | null;

  @Column("char", {
    name: "user_confirm",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  userConfirm: string | null;

  @Column("varchar", { name: "emd_id", nullable: true, length: 16 })
  emdId: string | null;

  @Column("char", {
    name: "display09",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  display09: string | null;

  @Column("varchar", { name: "reseller_id", nullable: true, length: 20 })
  resellerId: string | null;

  @Column("varchar", { name: "allowmaildate", nullable: true, length: 8 })
  allowmaildate: string | null;

  @Column("varchar", { name: "report_num", nullable: true, length: 40 })
  reportNum: string | null;

  @Column("varchar", { name: "changepassdate", nullable: true, length: 8 })
  changepassdate: string | null;

  @Column("varchar", { name: "changepassdelay", length: 10 })
  changepassdelay: string;

  @Column("char", { name: "usersms", length: 1, default: () => "'N'" })
  usersms: string;

  @Column("varchar", { name: "ipin_did", nullable: true, length: 64 })
  ipinDid: string | null;

  @Column("varchar", { name: "ipin_cid", nullable: true, length: 88 })
  ipinCid: string | null;

  @Column("varchar", { name: "ipin_cpcode", nullable: true, length: 12 })
  ipinCpcode: string | null;

  @Column("varchar", { name: "ipin_provider", nullable: true, length: 10 })
  ipinProvider: string | null;

  @Column("enum", {
    name: "ipin_state",
    nullable: true,
    enum: ["", "CLOSE", "WAIT", "OPEN"],
    default: () => "'WAIT'",
  })
  ipinState: "" | "CLOSE" | "WAIT" | "OPEN" | null;

  @Column("datetime", { name: "ipin_regdate", nullable: true })
  ipinRegdate: Date | null;

  @Column("smallint", {
    name: "makeshop_category",
    nullable: true,
    unsigned: true,
  })
  makeshopCategory: number | null;

  @Column("enum", {
    name: "dgg_pg_type",
    enum: ["", "PA", "PP", "EB"],
    default: () => "'PP'",
  })
  dggPgType: "" | "PA" | "PP" | "EB";

  @Column("varchar", { name: "paygate_api_mid", length: 100 })
  paygateApiMid: string;

  @Column("varchar", { name: "paygate_api_access_key", length: 100 })
  paygateApiAccessKey: string;

  @Column("varchar", { name: "paygate_encryption_key", length: 100 })
  paygateEncryptionKey: string;

  @Column("varchar", { name: "paygate_initialization_vector", length: 100 })
  paygateInitializationVector: string;

  @Column("varchar", { name: "paypal_id", length: 255 })
  paypalId: string;

  @Column("varchar", { name: "paypal_api_id", length: 100 })
  paypalApiId: string;

  @Column("varchar", { name: "paypal_password", length: 100 })
  paypalPassword: string;

  @Column("varchar", { name: "paypal_signature", length: 100 })
  paypalSignature: string;

  @Column("varchar", { name: "eximbay_mid", length: 255 })
  eximbayMid: string;

  @Column("varchar", { name: "eximbay_dynkey", length: 255 })
  eximbayDynkey: string;

  @Column("varchar", { name: "eximbay_site_id", length: 255 })
  eximbaySiteId: string;

  @Column("enum", {
    name: "oversea_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  overseaUse: "" | "N" | "Y";

  @Column("enum", {
    name: "oversea_pg_type",
    enum: ["", "PP", "EB"],
    default: () => "'PP'",
  })
  overseaPgType: "" | "PP" | "EB";

  @Column("enum", {
    name: "usecoupon_skin",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  usecouponSkin: "" | "N" | "Y" | null;

  @Column("varchar", { name: "cpa_account_id", length: 30 })
  cpaAccountId: string;

  @Column("varchar", { name: "cpa_agreement", nullable: true, length: 255 })
  cpaAgreement: string | null;

  @Column("varchar", { name: "cpa_white_domain", nullable: true, length: 255 })
  cpaWhiteDomain: string | null;

  @Column("varchar", {
    name: "bestproduct_config",
    length: 5,
    default: () => "'00|15'",
  })
  bestproductConfig: string;

  @Column("varchar", {
    name: "usecoupon_type",
    length: 15,
    default: () => "'ORDER'",
  })
  usecouponType: string;

  @Column("int", { name: "usecoupon_limit", default: () => "'0'" })
  usecouponLimit: number;

  @Column("enum", {
    name: "usecoupon_multiple",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  usecouponMultiple: "" | "Y" | "N";

  @Column("enum", {
    name: "usecoupon_oneday_limit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  usecouponOnedayLimit: "" | "Y" | "N";

  @Column("int", { name: "usecoupon_oneday_count", default: () => "'0'" })
  usecouponOnedayCount: number;

  @Column("enum", {
    name: "usecoupon_order_limit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  usecouponOrderLimit: "" | "Y" | "N";

  @Column("int", { name: "usecoupon_order_count", default: () => "'0'" })
  usecouponOrderCount: number;

  @Column("enum", {
    name: "usecoupon_pay_condition",
    enum: ["", "PP", "OP"],
    default: () => "'PP'",
  })
  usecouponPayCondition: "" | "PP" | "OP";

  @Column("enum", {
    name: "use_payed",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  usePayed: "" | "Y" | "N";

  @Column("enum", {
    name: "use_package",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  usePackage: "" | "Y" | "N";

  @Column("enum", {
    name: "package_dan",
    enum: ["", "1", "0.1", "0.01", "0.001"],
    default: () => "'1'",
  })
  packageDan: "" | "1" | "0.1" | "0.01" | "0.001";

  @Column("enum", {
    name: "package_cut",
    enum: ["", "round", "floor", "ceil"],
    default: () => "'ceil'",
  })
  packageCut: "" | "round" | "floor" | "ceil";

  @Column("char", { name: "is_fran", length: 2, default: () => "'N'" })
  isFran: string;

  @Column("varchar", { name: "mobile_auth_id", nullable: true, length: 12 })
  mobileAuthId: string | null;

  @Column("enum", {
    name: "mobile_auth_state",
    enum: ["", "CLOSE", "WAIT", "OPEN"],
    default: () => "'WAIT'",
  })
  mobileAuthState: "" | "CLOSE" | "WAIT" | "OPEN";

  @Column("datetime", { name: "mobile_auth_regdate", nullable: true })
  mobileAuthRegdate: Date | null;

  @Column("enum", {
    name: "use_smart_finder",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useSmartFinder: "" | "N" | "Y";

  @Column("enum", {
    name: "use_smart_engine",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useSmartEngine: "" | "N" | "Y";

  @Column("varchar", { name: "slaveIP", nullable: true, length: 20 })
  slaveIp: string | null;

  @Column("varchar", { name: "slaveIP2", nullable: true, length: 20 })
  slaveIp2: string | null;

  @Column("char", {
    name: "ssltype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ssltype: string | null;

  @Column("enum", {
    name: "ISMS",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isms: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "product_notice_view",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  productNoticeView: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "webzine_notice_view",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  webzineNoticeView: "" | "Y" | "N" | null;

  @Column("tinyint", {
    name: "notice_num",
    nullable: true,
    default: () => "'1'",
  })
  noticeNum: number | null;

  @Column("varchar", { name: "ipaddress", nullable: true, length: 250 })
  ipaddress: string | null;

  @Column("enum", {
    name: "ipaddress_unconditional",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ipaddressUnconditional: "" | "Y" | "N" | null;

  @Column("datetime", {
    name: "powerpack_access_date_log",
    default: () => "'0000-00-00 00:00:00'",
  })
  powerpackAccessDateLog: Date;

  @Column("varchar", {
    name: "expire_reserve",
    length: 255,
    default: () => "'use=N'",
  })
  expireReserve: string;

  @Column("varchar", { name: "return_address", nullable: true, length: 150 })
  returnAddress: string | null;

  @Column("varchar", { name: "return_tel", nullable: true, length: 30 })
  returnTel: string | null;

  @Column("enum", {
    name: "order_page",
    enum: ["", "NORMAL", "PAY"],
    default: () => "'NORMAL'",
  })
  orderPage: "" | "NORMAL" | "PAY";

  @Column("enum", {
    name: "web_standard_pg",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  webStandardPg: "" | "Y" | "N";

  @Column("datetime", {
    name: "pg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pgDate: Date;

  @Column("varchar", { name: "facebookcode", nullable: true, length: 30 })
  facebookcode: string | null;

  @Column("enum", {
    name: "smartpickup_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smartpickupUse: "" | "Y" | "N";

  @Column("enum", {
    name: "smartpickup_outer",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smartpickupOuter: "" | "Y" | "N";

  @Column("varchar", { name: "smartpickup_hope", length: 5 })
  smartpickupHope: string;

  @Column("varchar", {
    name: "smartpickup_sms",
    length: 5,
    default: () => "'N'",
  })
  smartpickupSms: string;

  @Column("enum", {
    name: "samsung_pass",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  samsungPass: "" | "Y" | "N";

  @Column("enum", {
    name: "termdelivery_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  termdeliveryUse: "" | "Y" | "N";

  @Column("varchar", { name: "termdelivery_config", length: 255 })
  termdeliveryConfig: string;

  @Column("varchar", { name: "tax_card_id", nullable: true, length: 30 })
  taxCardId: string | null;

  @Column("char", { name: "tax_card_type", nullable: true, length: 2 })
  taxCardType: string | null;

  @Column("varchar", { name: "subs_pg_id", nullable: true, length: 20 })
  subsPgId: string | null;

  @Column("varchar", { name: "subs_pg_type", nullable: true, length: 10 })
  subsPgType: string | null;

  @Column("varchar", { name: "ansimkeyin_pg_id", nullable: true, length: 20 })
  ansimkeyinPgId: string | null;

  @Column("varchar", { name: "rental_pay_pg_id", nullable: true, length: 20 })
  rentalPayPgId: string | null;

  @Column("varchar", { name: "use_paymethod", length: 255 })
  usePaymethod: string;

  @Column("varchar", { name: "live_solution", nullable: true, length: 10 })
  liveSolution: string | null;
}
