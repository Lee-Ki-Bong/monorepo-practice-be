import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("orderid", ["adminuser", "orderid", "orderstatuscode"], { unique: true })
@Index("pay_date", ["orderdatetime"], {})
@Entity("nhn_orderinfo", { schema: "makeshop" })
export class NhnOrderinfo {
  @PrimaryGeneratedColumn({ type: "int", name: "num" })
  num: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("datetime", {
    name: "orderdatetime",
    default: () => "'0000-00-00 00:00:00'",
  })
  orderdatetime: Date;

  @Column("varchar", { name: "orderid", length: 30 })
  orderid: string;

  @Column("varchar", { name: "orderstatuscode", length: 30 })
  orderstatuscode: string;

  @Column("varchar", { name: "orderstatus", length: 120 })
  orderstatus: string;

  @Column("varchar", { name: "orderername", length: 120 })
  orderername: string;

  @Column("varchar", { name: "ordererid", length: 80 })
  ordererid: string;

  @Column("varchar", { name: "orderertel", length: 18 })
  orderertel: string;

  @Column("varchar", { name: "ordereremail", length: 120 })
  ordereremail: string;

  @Column("varchar", { name: "repayment", length: 8 })
  repayment: string;

  @Column("int", { name: "totalproductamount", default: () => "'0'" })
  totalproductamount: number;

  @Column("int", { name: "shippingfee", default: () => "'0'" })
  shippingfee: number;

  @Column("int", { name: "mallorderamount", default: () => "'0'" })
  mallorderamount: number;

  @Column("int", { name: "naverdiscountamount", default: () => "'0'" })
  naverdiscountamount: number;

  @Column("int", { name: "totalorderamount", default: () => "'0'" })
  totalorderamount: number;

  @Column("int", {
    name: "coupondiscountamount",
    nullable: true,
    default: () => "'0'",
  })
  coupondiscountamount: number | null;

  @Column("int", { name: "cashbackdiscountamount", default: () => "'0'" })
  cashbackdiscountamount: number;

  @Column("int", { name: "paymentamount", default: () => "'0'" })
  paymentamount: number;

  @Column("varchar", { name: "paymentmethod", length: 30 })
  paymentmethod: string;

  @Column("datetime", {
    name: "paymentdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  paymentdate: Date;

  @Column("varchar", { name: "escrow", length: 8 })
  escrow: string;

  @Column("varchar", { name: "shippingfeetype", length: 30 })
  shippingfeetype: string;

  @Column("int", {
    name: "originaltotalproductamount",
    nullable: true,
    default: () => "'0'",
  })
  originaltotalproductamount: number | null;

  @Column("int", {
    name: "originalshippingfee",
    nullable: true,
    default: () => "'0'",
  })
  originalshippingfee: number | null;

  @Column("int", {
    name: "originalmallorderamount",
    nullable: true,
    default: () => "'0'",
  })
  originalmallorderamount: number | null;

  @Column("int", {
    name: "originalnaverdiscountamount",
    nullable: true,
    default: () => "'0'",
  })
  originalnaverdiscountamount: number | null;

  @Column("int", {
    name: "originaltotalorderamount",
    nullable: true,
    default: () => "'0'",
  })
  originaltotalorderamount: number | null;

  @Column("int", {
    name: "originalcoupondiscountamount",
    nullable: true,
    default: () => "'0'",
  })
  originalcoupondiscountamount: number | null;

  @Column("int", {
    name: "originalcashbackdiscountamount",
    nullable: true,
    default: () => "'0'",
  })
  originalcashbackdiscountamount: number | null;

  @Column("int", {
    name: "originalpaymentamount",
    nullable: true,
    default: () => "'0'",
  })
  originalpaymentamount: number | null;

  @Column("varchar", {
    name: "originalpaymentmethod",
    nullable: true,
    length: 30,
    default: () => "'0'",
  })
  originalpaymentmethod: string | null;

  @Column("datetime", { name: "originalpaymentdate", nullable: true })
  originalpaymentdate: Date | null;

  @Column("varchar", { name: "originalescrow", nullable: true, length: 8 })
  originalescrow: string | null;

  @Column("varchar", {
    name: "originalshippingfeetype",
    nullable: true,
    length: 30,
    default: () => "'0'",
  })
  originalshippingfeetype: string | null;

  @Column("datetime", {
    name: "salecompletedate",
    default: () => "'0000-00-00 00:00:00'",
  })
  salecompletedate: Date;

  @Column("datetime", {
    name: "paymentduedate",
    default: () => "'0000-00-00 00:00:00'",
  })
  paymentduedate: Date;

  @Column("varchar", { name: "paymentnumber", length: 40 })
  paymentnumber: string;

  @Column("varchar", { name: "paymentbank", length: 40 })
  paymentbank: string;

  @Column("varchar", { name: "paymentsender", length: 40 })
  paymentsender: string;

  @Column("varchar", { name: "sellingcode", nullable: true, length: 80 })
  sellingcode: string | null;

  @Column("varchar", { name: "mallmanagercode", length: 80 })
  mallmanagercode: string;

  @Column("varchar", { name: "malluid", length: 120 })
  malluid: string;

  @Column("varchar", { name: "orderextradata", length: 120 })
  orderextradata: string;

  @Column("varchar", { name: "recipient", length: 80 })
  recipient: string;

  @Column("varchar", { name: "zipcode", length: 30 })
  zipcode: string;

  @Column("varchar", { name: "shippingaddress1", length: 180 })
  shippingaddress1: string;

  @Column("varchar", { name: "shippingaddress2", length: 180 })
  shippingaddress2: string;

  @Column("varchar", { name: "recipienttel1", length: 30 })
  recipienttel1: string;

  @Column("varchar", { name: "recipienttel2", length: 30 })
  recipienttel2: string;

  @Column("varchar", { name: "shippingmessage", length: 255 })
  shippingmessage: string;

  @Column("datetime", {
    name: "senddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  senddate: Date;

  @Column("datetime", {
    name: "pickupdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  pickupdate: Date;

  @Column("datetime", {
    name: "shippingcompleteDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  shippingcompleteDate: Date;

  @Column("varchar", { name: "shippingcompany", length: 180 })
  shippingcompany: string;

  @Column("varchar", { name: "etcshipping", length: 30 })
  etcshipping: string;

  @Column("varchar", { name: "trackingnumber", length: 120 })
  trackingnumber: string;

  @Column("varchar", { name: "shippingprocessstatus", length: 30 })
  shippingprocessstatus: string;

  @Column("varchar", { name: "shippingstatus", length: 30 })
  shippingstatus: string;

  @Column("varchar", { name: "cancelreason", length: 180 })
  cancelreason: string;

  @Column("varchar", { name: "cancelrequester", length: 180 })
  cancelrequester: string;

  @Column("datetime", {
    name: "cancelrequestdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  cancelrequestdate: Date;

  @Column("varchar", { name: "refundpended", length: 30 })
  refundpended: string;

  @Column("varchar", { name: "refundbank", length: 30 })
  refundbank: string;

  @Column("varchar", { name: "refundaccountowner", length: 120 })
  refundaccountowner: string;

  @Column("varchar", { name: "refundaccountnumber", length: 120 })
  refundaccountnumber: string;

  @Column("varchar", { name: "returnreason", length: 180 })
  returnreason: string;

  @Column("varchar", { name: "returnstatuscode", length: 12 })
  returnstatuscode: string;

  @Column("varchar", { name: "returnstatus", length: 30 })
  returnstatus: string;

  @Column("datetime", {
    name: "returndate",
    default: () => "'0000-00-00 00:00:00'",
  })
  returndate: Date;

  @Column("varchar", { name: "returnshippingcompany", length: 120 })
  returnshippingcompany: string;

  @Column("varchar", { name: "returntrackingnumber", length: 120 })
  returntrackingnumber: string;

  @Column("varchar", { name: "returnshippingfeetype", length: 120 })
  returnshippingfeetype: string;

  @Column("datetime", {
    name: "returnrequestdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  returnrequestdate: Date;

  @Column("varchar", { name: "exchangereason", length: 180 })
  exchangereason: string;

  @Column("varchar", { name: "exchangestatuscode", length: 180 })
  exchangestatuscode: string;

  @Column("varchar", { name: "exchangestatus", length: 30 })
  exchangestatus: string;

  @Column("datetime", {
    name: "exchangerequestdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  exchangerequestdate: Date;

  @Column("datetime", {
    name: "receiveddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  receiveddate: Date;

  @Column("varchar", { name: "protest", length: 120 })
  protest: string;

  @Column("datetime", {
    name: "resenddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  resenddate: Date;

  @Column("varchar", { name: "resendshippingcompany", length: 120 })
  resendshippingcompany: string;

  @Column("varchar", { name: "resendtrackingnumber", length: 120 })
  resendtrackingnumber: string;

  @Column("varchar", { name: "resendrecipient", length: 120 })
  resendrecipient: string;

  @Column("varchar", { name: "resendrecipienttel", length: 120 })
  resendrecipienttel: string;

  @Column("varchar", { name: "resendshippingaddress", length: 180 })
  resendshippingaddress: string;

  @Column("enum", {
    name: "cknhn",
    enum: ["", "Y", "N", "E"],
    default: () => "'N'",
  })
  cknhn: "" | "Y" | "N" | "E";

  @Column("varchar", { name: "link_id", length: 30 })
  linkId: string;

  @Column("enum", {
    name: "nhnstock",
    enum: ["", "N", "D", "R"],
    default: () => "'N'",
  })
  nhnstock: "" | "N" | "D" | "R";

  @Column("varchar", { name: "memberid", nullable: true, length: 255 })
  memberid: string | null;
}
