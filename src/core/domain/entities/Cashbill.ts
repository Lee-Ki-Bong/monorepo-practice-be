import { Column, Entity, Index } from "typeorm";

@Index("alldate", ["tsdtime"], {})
@Index("bill_type", ["adminuser", "billType"], {})
@Index("date", ["adminuser", "tsdtime"], {})
@Index("p_ordernum", ["adminuser", "pOrdernum"], {})
@Entity("cashbill", { schema: "makeshop" })
export class Cashbill {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 32 })
  ordernum: string;

  @Column("varchar", { name: "p_ordernum", nullable: true, length: 32 })
  pOrdernum: string | null;

  @Column("varchar", { name: "tsdtime", length: 14 })
  tsdtime: string;

  @Column("varchar", { name: "oktime", length: 14 })
  oktime: string;

  @Column("enum", {
    name: "tax_type",
    nullable: true,
    enum: ["", "Y", "N", "A"],
    default: () => "'Y'",
  })
  taxType: "" | "Y" | "N" | "A" | null;

  @Column("char", { name: "tr_code", nullable: true, length: 1 })
  trCode: string | null;

  @Column("varchar", { name: "tax_no", nullable: true, length: 10 })
  taxNo: string | null;

  @Column("varchar", { name: "id_info", nullable: true, length: 32 })
  idInfo: string | null;

  @Column("varchar", { name: "hname", nullable: true, length: 60 })
  hname: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 20 })
  tel: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "brandname", nullable: true, length: 30 })
  brandname: string | null;

  @Column("varchar", { name: "amt1", nullable: true, length: 10 })
  amt1: string | null;

  @Column("varchar", { name: "amt2", nullable: true, length: 10 })
  amt2: string | null;

  @Column("varchar", { name: "amt3", nullable: true, length: 10 })
  amt3: string | null;

  @Column("varchar", { name: "amt4", nullable: true, length: 10 })
  amt4: string | null;

  @Column("varchar", { name: "amt5", nullable: true, length: 10 })
  amt5: string | null;

  @Column("char", {
    name: "type",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  type: string | null;

  @Column("varchar", { name: "requester", nullable: true, length: 10 })
  requester: string | null;

  @Column("varchar", { name: "oknum", nullable: true, length: 10 })
  oknum: string | null;

  @Column("varchar", { name: "cancelnum", nullable: true, length: 10 })
  cancelnum: string | null;

  @Column("varchar", { name: "errormsg", nullable: true, length: 100 })
  errormsg: string | null;

  @Column("char", { name: "bill_type", length: 1, default: () => "'B'" })
  billType: string;
}
