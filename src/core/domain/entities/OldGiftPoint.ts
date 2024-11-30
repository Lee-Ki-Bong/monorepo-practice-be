import { Column, Entity } from "typeorm";

@Entity("old_gift_point", { schema: "makeshop" })
export class OldGiftPoint {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("decimal", {
    name: "point",
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  point: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("enum", {
    name: "is_give",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isGive: "" | "Y" | "N";
}
