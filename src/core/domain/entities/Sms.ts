import { Column, Entity } from "typeorm";

@Entity("sms", { schema: "makeshop" })
export class Sms {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "sms_user", length: 30 })
  smsUser: string;

  @Column("varchar", { name: "sms_deptcode", length: 30 })
  smsDeptcode: string;

  @Column("varchar", { name: "sms_username", length: 30 })
  smsUsername: string;

  @Column("char", {
    name: "member_new",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberNew: string | null;

  @Column("char", {
    name: "member_passwd",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberPasswd: string | null;

  @Column("char", {
    name: "member_order",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberOrder: string | null;

  @Column("char", {
    name: "banknomess",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  banknomess: string | null;

  @Column("char", {
    name: "member_bankin",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberBankin: string | null;

  @Column("char", {
    name: "member_deli",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberDeli: string | null;

  @Column("int", { name: "delitime", nullable: true, default: () => "'0'" })
  delitime: number | null;

  @Column("char", {
    name: "deli_direct_nomess",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  deliDirectNomess: string | null;

  @Column("char", {
    name: "member_orderok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberOrderok: string | null;

  @Column("char", {
    name: "orderok_direct_nomess",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  orderokDirectNomess: string | null;

  @Column("char", {
    name: "member_birth",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberBirth: string | null;

  @Column("char", {
    name: "member_person",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberPerson: string | null;

  @Column("char", { name: "member_group", length: 1, default: () => "'N'" })
  memberGroup: string;

  @Column("char", {
    name: "member_deli_delay",
    length: 1,
    default: () => "'N'",
  })
  memberDeliDelay: string;

  @Column("char", {
    name: "admin_member",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminMember: string | null;

  @Column("char", {
    name: "admin_order",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminOrder: string | null;

  @Column("char", {
    name: "member_bank",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberBank: string | null;

  @Column("char", {
    name: "admin_cancel",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminCancel: string | null;

  @Column("char", {
    name: "member_ok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberOk: string | null;

  @Column("char", {
    name: "member_soldout",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberSoldout: string | null;

  @Column("char", {
    name: "member_importune",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  memberImportune: string | null;

  @Column("char", {
    name: "admin_board",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminBoard: string | null;

  @Column("char", { name: "admin_board_shorturl", nullable: true, length: 1 })
  adminBoardShorturl: string | null;

  @Column("char", {
    name: "admin_person",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminPerson: string | null;

  @Column("char", {
    name: "admin_soldout",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminSoldout: string | null;

  @Column("char", { name: "provider_order", length: 1, default: () => "'N'" })
  providerOrder: string;

  @Column("char", { name: "provider_cancel", length: 1, default: () => "'N'" })
  providerCancel: string;

  @Column("char", { name: "provider_soldout", length: 1, default: () => "'N'" })
  providerSoldout: string;

  @Column("char", {
    name: "provider_bank",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  providerBank: string | null;

  @Column("mediumtext", { name: "member_new_message", nullable: true })
  memberNewMessage: string | null;

  @Column("mediumtext", { name: "member_order_message", nullable: true })
  memberOrderMessage: string | null;

  @Column("mediumtext", { name: "member_bankin_message", nullable: true })
  memberBankinMessage: string | null;

  @Column("mediumtext", { name: "member_deli_message", nullable: true })
  memberDeliMessage: string | null;

  @Column("mediumtext", { name: "member_bank_message", nullable: true })
  memberBankMessage: string | null;

  @Column("mediumtext", { name: "member_delivery_message", nullable: true })
  memberDeliveryMessage: string | null;

  @Column("mediumtext", { name: "member_birth_message", nullable: true })
  memberBirthMessage: string | null;

  @Column("mediumtext", { name: "member_ok_message", nullable: true })
  memberOkMessage: string | null;

  @Column("mediumtext", { name: "member_person_message", nullable: true })
  memberPersonMessage: string | null;

  @Column("mediumtext", { name: "member_passwd_message", nullable: true })
  memberPasswdMessage: string | null;

  @Column("mediumtext", { name: "member_soldout_message", nullable: true })
  memberSoldoutMessage: string | null;

  @Column("enum", {
    name: "member_soldout_lms",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  memberSoldoutLms: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "member_importune_message", nullable: true })
  memberImportuneMessage: string | null;

  @Column("mediumtext", { name: "member_group_message", nullable: true })
  memberGroupMessage: string | null;

  @Column("mediumtext", { name: "member_deli_delay_message", nullable: true })
  memberDeliDelayMessage: string | null;

  @Column("mediumtext", { name: "auto_cancel_message", nullable: true })
  autoCancelMessage: string | null;

  @Column("mediumtext", { name: "auto_bank_message", nullable: true })
  autoBankMessage: string | null;

  @Column("char", {
    name: "edgeday_order",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  edgedayOrder: string | null;

  @Column("mediumtext", { name: "edgeday_order_message", nullable: true })
  edgedayOrderMessage: string | null;

  @Column("char", {
    name: "edgeday_ordercancel",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  edgedayOrdercancel: string | null;

  @Column("mediumtext", { name: "edgeday_ordercancel_message", nullable: true })
  edgedayOrdercancelMessage: string | null;

  @Column("char", {
    name: "edgeday_goalsuccess",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  edgedayGoalsuccess: string | null;

  @Column("mediumtext", { name: "edgeday_goalsuccess_message", nullable: true })
  edgedayGoalsuccessMessage: string | null;

  @Column("char", {
    name: "edgeday_gift",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  edgedayGift: string | null;

  @Column("mediumtext", { name: "edgeday_gift_message", nullable: true })
  edgedayGiftMessage: string | null;

  @Column("char", {
    name: "edgeday_issue",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  edgedayIssue: string | null;

  @Column("mediumtext", { name: "edgeday_issue_message", nullable: true })
  edgedayIssueMessage: string | null;

  @Column("char", {
    name: "order_after_coupon",
    length: 1,
    default: () => "'N'",
  })
  orderAfterCoupon: string;

  @Column("mediumtext", { name: "order_after_coupon_message", nullable: true })
  orderAfterCouponMessage: string | null;

  @Column("mediumtext", { name: "first_buy_coupon", nullable: true })
  firstBuyCoupon: string | null;

  @Column("mediumtext", { name: "first_buy_coupon_message", nullable: true })
  firstBuyCouponMessage: string | null;

  @Column("enum", {
    name: "first_app_buy_coupon",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  firstAppBuyCoupon: "" | "Y" | "N";

  @Column("mediumtext", { name: "first_app_buy_coupon_message" })
  firstAppBuyCouponMessage: string;

  @Column("varchar", { name: "admin_phone", nullable: true, length: 15 })
  adminPhone: string | null;

  @Column("varchar", { name: "admin_phone2", nullable: true, length: 15 })
  adminPhone2: string | null;

  @Column("varchar", { name: "admin_phone3", nullable: true, length: 15 })
  adminPhone3: string | null;

  @Column("varchar", { name: "admin_phone4", nullable: true, length: 60 })
  adminPhone4: string | null;

  @Column("char", {
    name: "telview",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  telview: string | null;

  @Column("smallint", {
    name: "time1",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  time1: number | null;

  @Column("smallint", {
    name: "time2",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  time2: number | null;

  @Column("smallint", {
    name: "memtime1",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  memtime1: number | null;

  @Column("smallint", {
    name: "memtime2",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  memtime2: number | null;

  @Column("smallint", {
    name: "day",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  day: number | null;

  @Column("smallint", {
    name: "smsday",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  smsday: number | null;

  @Column("smallint", {
    name: "smstime",
    nullable: true,
    unsigned: true,
    default: () => "'9'",
  })
  smstime: number | null;

  @Column("smallint", {
    name: "smsbankday",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  smsbankday: number | null;

  @Column("enum", {
    name: "beebank",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  beebank: "" | "Y" | "N" | null;

  @Column("varchar", { name: "beebankday", nullable: true, length: 10 })
  beebankday: string | null;

  @Column("smallint", {
    name: "smsbanktime",
    nullable: true,
    unsigned: true,
    default: () => "'9'",
  })
  smsbanktime: number | null;

  @Column("char", {
    name: "recovery",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  recovery: string | null;

  @Column("varchar", { name: "returntel1", nullable: true, length: 5 })
  returntel1: string | null;

  @Column("varchar", { name: "returntel2", nullable: true, length: 5 })
  returntel2: string | null;

  @Column("varchar", { name: "returntel3", nullable: true, length: 5 })
  returntel3: string | null;

  @Column("int", { name: "birthreserve", nullable: true, default: () => "'0'" })
  birthreserve: number | null;

  @Column("enum", {
    name: "addmess",
    nullable: true,
    enum: ["", "Y", "L", "N"],
    default: () => "'N'",
  })
  addmess: "" | "Y" | "L" | "N" | null;

  @Column("enum", {
    name: "addmess2",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  addmess2: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "addmess3",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  addmess3: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "etcphonetype",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  etcphonetype: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "birthOK",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  birthOk: "" | "Y" | "N" | null;

  @Column("smallint", {
    name: "birthday",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  birthday: number | null;

  @Column("varchar", { name: "ctm_coupon", nullable: true, length: 10 })
  ctmCoupon: string | null;

  @Column("int", { name: "selldate", nullable: true, default: () => "'0'" })
  selldate: number | null;

  @Column("char", {
    name: "member_part_delivery",
    length: 1,
    default: () => "'N'",
  })
  memberPartDelivery: string;

  @Column("mediumtext", {
    name: "member_part_delivery_message",
    nullable: true,
  })
  memberPartDeliveryMessage: string | null;

  @Column("char", {
    name: "part_cancel",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  partCancel: string | null;

  @Column("mediumtext", { name: "part_cancel_message", nullable: true })
  partCancelMessage: string | null;

  @Column("char", {
    name: "refund_bank",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  refundBank: string | null;

  @Column("mediumtext", { name: "refund_bank_message", nullable: true })
  refundBankMessage: string | null;

  @Column("char", {
    name: "card_cancel",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cardCancel: string | null;

  @Column("mediumtext", { name: "card_cancel_message", nullable: true })
  cardCancelMessage: string | null;

  @Column("char", {
    name: "refund_ok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  refundOk: string | null;

  @Column("mediumtext", { name: "refund_ok_message", nullable: true })
  refundOkMessage: string | null;

  @Column("char", {
    name: "refund_ok2",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  refundOk2: string | null;

  @Column("mediumtext", { name: "refund_ok_message2", nullable: true })
  refundOkMessage2: string | null;

  @Column("enum", {
    name: "member_anniversary1",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  memberAnniversary1: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "member_anniversary2",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  memberAnniversary2: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "member_anniversary3",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  memberAnniversary3: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "member_anniversary1_message", nullable: true })
  memberAnniversary1Message: string | null;

  @Column("mediumtext", { name: "member_anniversary2_message", nullable: true })
  memberAnniversary2Message: string | null;

  @Column("mediumtext", { name: "member_anniversary3_message", nullable: true })
  memberAnniversary3Message: string | null;

  @Column("int", { name: "anniversary1_reserve", nullable: true })
  anniversary1Reserve: number | null;

  @Column("int", { name: "anniversary2_reserve", nullable: true })
  anniversary2Reserve: number | null;

  @Column("int", { name: "anniversary3_reserve", nullable: true })
  anniversary3Reserve: number | null;

  @Column("enum", {
    name: "remain_sms",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  remainSms: "" | "Y" | "N" | null;

  @Column("char", { name: "remain_repeat", nullable: true, length: 1 })
  remainRepeat: string | null;

  @Column("int", {
    name: "remain_cnt",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  remainCnt: number | null;

  @Column("int", {
    name: "remain_repeat_cnt",
    unsigned: true,
    default: () => "'1'",
  })
  remainRepeatCnt: number;

  @Column("int", {
    name: "remain_last_repeat",
    unsigned: true,
    default: () => "'0'",
  })
  remainLastRepeat: number;

  @Column("enum", {
    name: "remain_complete",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  remainComplete: "" | "Y" | "N" | null;

  @Column("char", { name: "return_ok", nullable: true, length: 1 })
  returnOk: string | null;

  @Column("mediumtext", { name: "return_ok_message", nullable: true })
  returnOkMessage: string | null;

  @Column("enum", {
    name: "return_collection",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  returnCollection: "" | "Y" | "N";

  @Column("mediumtext", { name: "return_collection_message", nullable: true })
  returnCollectionMessage: string | null;

  @Column("enum", {
    name: "trade_ok",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tradeOk: "" | "Y" | "N";

  @Column("mediumtext", { name: "trade_ok_message", nullable: true })
  tradeOkMessage: string | null;

  @Column("enum", {
    name: "trade_collection",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tradeCollection: "" | "Y" | "N";

  @Column("mediumtext", { name: "trade_collection_message", nullable: true })
  tradeCollectionMessage: string | null;

  @Column("enum", {
    name: "trade_diff",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tradeDiff: "" | "Y" | "N";

  @Column("mediumtext", { name: "trade_diff_message", nullable: true })
  tradeDiffMessage: string | null;

  @Column("enum", {
    name: "smartpickup_delivery",
    nullable: true,
    enum: ["", "Y", "N"],
  })
  smartpickupDelivery: "" | "Y" | "N" | null;

  @Column("mediumtext", {
    name: "smartpickup_delivery_message",
    nullable: true,
  })
  smartpickupDeliveryMessage: string | null;

  @Column("enum", {
    name: "smartpickup_order",
    nullable: true,
    enum: ["", "Y", "N"],
  })
  smartpickupOrder: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "smartpickup_cancel",
    nullable: true,
    enum: ["", "Y", "N"],
  })
  smartpickupCancel: "" | "Y" | "N" | null;

  @Column("char", {
    name: "member_readyproduct",
    length: 1,
    default: () => "'N'",
  })
  memberReadyproduct: string;

  @Column("mediumtext", { name: "member_readyproduct_message", nullable: true })
  memberReadyproductMessage: string | null;

  @Column("enum", {
    name: "repay_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  repayStatus: "" | "Y" | "N";

  @Column("mediumtext", { name: "repay_status_message", nullable: true })
  repayStatusMessage: string | null;

  @Column("enum", {
    name: "repay_complate",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  repayComplate: "" | "Y" | "N";

  @Column("mediumtext", { name: "repay_complate_message", nullable: true })
  repayComplateMessage: string | null;

  @Column("enum", {
    name: "power_review",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerReview: "" | "Y" | "N";

  @Column("mediumtext", { name: "power_review_message" })
  powerReviewMessage: string;

  @Column("enum", {
    name: "ars_reject",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  arsReject: "" | "Y" | "N";

  @Column("mediumtext", { name: "ars_reject_message", nullable: true })
  arsRejectMessage: string | null;

  @Column("mediumtext", { name: "send_limit" })
  sendLimit: string;

  @Column("smallint", {
    name: "vday",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  vday: number | null;

  @Column("varchar", { name: "block_tel", nullable: true, length: 20 })
  blockTel: string | null;

  @Column("enum", {
    name: "sub_privacy_update",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subPrivacyUpdate: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "dormant_user",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dormantUser: "" | "Y" | "N";

  @Column("mediumtext", { name: "dormant_user_message", nullable: true })
  dormantUserMessage: string | null;

  @Column("enum", {
    name: "end_coupon",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  endCoupon: "" | "Y" | "N";

  @Column("mediumtext", { name: "end_coupon_message", nullable: true })
  endCouponMessage: string | null;

  @Column("varchar", { name: "end_coupon_config", length: 7 })
  endCouponConfig: string;

  @Column("enum", {
    name: "rebuy_discount",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rebuyDiscount: "" | "Y" | "N";

  @Column("mediumtext", { name: "rebuy_discount_message", nullable: true })
  rebuyDiscountMessage: string | null;

  @Column("enum", {
    name: "admin_delivery",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  adminDelivery: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "provider_delivery",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  providerDelivery: "" | "Y" | "N" | null;

  @Column("smallint", {
    name: "delivery_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  deliveryDate: number | null;

  @Column("enum", {
    name: "delivery_start",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  deliveryStart: "" | "Y" | "N";

  @Column("mediumtext", { name: "delivery_start_message", nullable: true })
  deliveryStartMessage: string | null;

  @Column("enum", {
    name: "delivery_end",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  deliveryEnd: "" | "Y" | "N";

  @Column("mediumtext", { name: "delivery_end_message", nullable: true })
  deliveryEndMessage: string | null;

  @Column("enum", {
    name: "warning_info",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  warningInfo: "" | "Y" | "N";

  @Column("mediumtext", { name: "warning_info_message", nullable: true })
  warningInfoMessage: string | null;

  @Column("varchar", { name: "warning_info_config", length: 5 })
  warningInfoConfig: string;

  @Column("enum", {
    name: "alimtalk_temp_sms",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  alimtalkTempSms: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "cancel_order_request",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cancelOrderRequest: "" | "Y" | "N" | null;

  @Column("mediumtext", {
    name: "cancel_order_request_message",
    nullable: true,
  })
  cancelOrderRequestMessage: string | null;

  @Column("enum", {
    name: "return_request",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  returnRequest: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "return_request_message", nullable: true })
  returnRequestMessage: string | null;

  @Column("enum", {
    name: "trade_request",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tradeRequest: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "trade_request_message", nullable: true })
  tradeRequestMessage: string | null;

  @Column("enum", {
    name: "cancel_order_accept",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cancelOrderAccept: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "cancel_order_accept_message", nullable: true })
  cancelOrderAcceptMessage: string | null;

  @Column("enum", {
    name: "return_accept",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  returnAccept: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "return_accept_message", nullable: true })
  returnAcceptMessage: string | null;

  @Column("enum", {
    name: "trade_accept",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tradeAccept: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "trade_accept_message", nullable: true })
  tradeAcceptMessage: string | null;

  @Column("enum", {
    name: "smart_tracking",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smartTracking: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "smart_tracking_message", nullable: true })
  smartTrackingMessage: string | null;

  @Column("mediumtext", { name: "smart_tracking_message_2", nullable: true })
  smartTrackingMessage_2: string | null;

  @Column("char", {
    name: "choice_ok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  choiceOk: string | null;

  @Column("mediumtext", { name: "choice_ok_message", nullable: true })
  choiceOkMessage: string | null;

  @Column("char", {
    name: "choice_no",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  choiceNo: string | null;

  @Column("mediumtext", { name: "choice_no_message", nullable: true })
  choiceNoMessage: string | null;

  @Column("char", {
    name: "choice_ok2",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  choiceOk2: string | null;

  @Column("mediumtext", { name: "choice_ok2_message", nullable: true })
  choiceOk2Message: string | null;

  @Column("enum", {
    name: "tour_guide",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tourGuide: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "tour_guide_message", nullable: true })
  tourGuideMessage: string | null;

  @Column("enum", {
    name: "subs_apply",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsApply: "" | "Y" | "N";

  @Column("mediumtext", { name: "subs_apply_message" })
  subsApplyMessage: string;

  @Column("enum", {
    name: "subs_cancel",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsCancel: "" | "Y" | "N";

  @Column("mediumtext", { name: "subs_cancel_message" })
  subsCancelMessage: string;

  @Column("enum", {
    name: "subs_end",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsEnd: "" | "Y" | "N";

  @Column("mediumtext", { name: "subs_end_message" })
  subsEndMessage: string;

  @Column("enum", {
    name: "subs_soldout",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsSoldout: "" | "Y" | "N";

  @Column("mediumtext", { name: "subs_soldout_message" })
  subsSoldoutMessage: string;

  @Column("enum", {
    name: "subs_expected",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsExpected: "" | "Y" | "N";

  @Column("mediumtext", { name: "subs_expected_message" })
  subsExpectedMessage: string;

  @Column("enum", {
    name: "subs_pay",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsPay: "" | "Y" | "N";

  @Column("mediumtext", { name: "subs_pay_message" })
  subsPayMessage: string;

  @Column("enum", {
    name: "subs_jump",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsJump: "" | "Y" | "N";

  @Column("mediumtext", { name: "subs_jump_message" })
  subsJumpMessage: string;

  @Column("enum", {
    name: "subs_fail",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subsFail: "" | "Y" | "N";

  @Column("mediumtext", { name: "subs_fail_message" })
  subsFailMessage: string;

  @Column("tinyint", {
    name: "dormant_notice_period",
    nullable: true,
    default: () => "'0'",
  })
  dormantNoticePeriod: number | null;
}
