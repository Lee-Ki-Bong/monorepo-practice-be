import { Column, Entity } from "typeorm";

@Entity("custom_user", { schema: "makeshop" })
export class CustomUser {
  @Column("varchar", { name: "adminuser", nullable: true, length: 12 })
  adminuser: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("varchar", { name: "sur_name", nullable: true, length: 30 })
  surName: string | null;

  @Column("varchar", { name: "given_name", nullable: true, length: 30 })
  givenName: string | null;

  @Column("varchar", { name: "hp", nullable: true, length: 50 })
  hp: string | null;

  @Column("varchar", { name: "main_card_num", nullable: true, length: 30 })
  mainCardNum: string | null;

  @Column("varchar", { name: "expiry_date", nullable: true, length: 60 })
  expiryDate: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 100 })
  tel: string | null;

  @Column("char", { name: "sms_opt", nullable: true, length: 1 })
  smsOpt: string | null;

  @Column("char", { name: "edm_opt", nullable: true, length: 1 })
  edmOpt: string | null;
}
