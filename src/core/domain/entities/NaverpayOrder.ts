import { Column, Entity, Index } from "typeorm";

@Index("ordernum", ["adminuser", "ordernum"], {})
@Entity("naverpay_order", { schema: "makeshop" })
export class NaverpayOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "order_id", length: 16 })
  orderId: string;

  @Column("varchar", { name: "payment_means", length: 20 })
  paymentMeans: string;

  @Column("varchar", { name: "payment_number", nullable: true, length: 30 })
  paymentNumber: string | null;

  @Column("varchar", { name: "payment_core_type", nullable: true, length: 10 })
  paymentCoreType: string | null;

  @Column("int", {
    name: "order_discount_amount",
    unsigned: true,
    default: () => "'0'",
  })
  orderDiscountAmount: number;

  @Column("int", {
    name: "general_payment_amount",
    unsigned: true,
    default: () => "'0'",
  })
  generalPaymentAmount: number;

  @Column("int", {
    name: "naver_mileage_payment_amount",
    unsigned: true,
    default: () => "'0'",
  })
  naverMileagePaymentAmount: number;

  @Column("int", {
    name: "charge_amount_payment_amount",
    unsigned: true,
    default: () => "'0'",
  })
  chargeAmountPaymentAmount: number;

  @Column("int", {
    name: "checkout_accumulation_payment_amount",
    unsigned: true,
    default: () => "'0'",
  })
  checkoutAccumulationPaymentAmount: number;

  @Column("int", {
    name: "pay_later_payment_amount",
    unsigned: true,
    default: () => "'0'",
  })
  payLaterPaymentAmount: number;
}
